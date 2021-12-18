// Program tmjson generates JSON marshaling and unmarshaling code for the
// specified types. The generated code wraps values of the target type in
// an object with a type label:
//
//    {
//       "type": "<type-label>",
//       "value": <encoded-value>
//    }
//
// Usage:
//    tmjson -pkg name -output file.go -prefix foo/bar/ \
//       TypeName1[=label1] TypeName2[=label2] ...
//
// If a label is provided, it is used as the type label. If it begins with "+",
// the prefix is prepended to it; otherwise it is used exactly.
//
// If no label is provided, the type name is used, with -trim removed from the
// front and -prefix added.
package main

import (
	"bytes"
	"flag"
	"fmt"
	"go/format"
	"io"
	"log"
	"os"
	"path/filepath"
	"strings"
)

var (
	outputPath  = flag.String("output", "", "Output file path (required)")
	packageName = flag.String("pkg", "", "Output package name (required)")
	labelPrefix = flag.String("prefix", "", "Prefix to add to each type label")
	trimPrefix  = flag.String("trim", "", "Prefix to trim from type name in labels")
)

const typeTagged = `type _typeTagged struct{
   T string          ` + "`json:\"type\"`" + `
   V json.RawMessage ` + "`json:\"value\"`" + `
}`

func main() {
	flag.Parse()
	switch {
	case *outputPath == "":
		log.Fatal("You must provide a non-empty -output path")
	case *packageName == "":
		log.Fatal("You must provide a non-empty -pkg name")
	}

	var buf bytes.Buffer
	fmt.Fprintf(&buf, "// Code generated by %s. DO NOT EDIT\n\npackage %s\n\n",
		filepath.Base(os.Args[0]), *packageName)

	fmt.Fprintln(&buf, `import (
   "encoding/json"
   "fmt"
)`)
	fmt.Fprint(&buf, "\n", typeTagged, "\n")

	for _, spec := range flag.Args() {
		if err := generate(&buf, spec); err != nil {
			log.Fatalf("Generating %q: %v", spec, err)
		}
	}

	f, err := os.Create(*outputPath)
	if err != nil {
		log.Fatalf("Creating output: %v", err)
	}

	// In case of failure, (try to) write the unformatted source to the output
	// so that the caller can debug it.
	src, err := format.Source(buf.Bytes())
	if err != nil {
		f.Write(buf.Bytes())
		f.Close()
		log.Fatalf("Formatting failed (unformatted output saved): %v", err)
	}
	if _, err := f.Write(src); err != nil {
		log.Fatalf("Writing output: %v", err)
	}
	if err := f.Close(); err != nil {
		log.Fatalf("Closing output: %v", err)
	}
}

func generate(w io.Writer, spec string) error {
	name, label := spec, ""
	if ps := strings.SplitN(spec, "=", 2); len(ps) == 2 {
		name, label = ps[0], ps[1]
		if strings.HasPrefix(label, "+") {
			label = *labelPrefix + label[1:]
		}
	} else {
		label = *labelPrefix + strings.TrimPrefix(name, *trimPrefix)
	}

	lconst := fmt.Sprintf("_typeTag_%s", name)
	fmt.Fprintf(w, "\nconst %s = %q\n\n", lconst, label)
	fmt.Fprintf(w, `
// MarshalJSON implements the json.Marshaler interface for %[1]s.
// It wraps the encoding in a type-tagged object.
func (v %[1]s) MarshalJSON() ([]byte, error) {
    type shim %[1]s
    value, err := json.Marshal((*shim)(&v))
    if err != nil {
        return nil, err
    }
    return json.Marshal(_typeTagged{T: %[2]s, V: value})
}
`, name, lconst)
	fmt.Fprintf(w, `
// UnmarshalJSON implements the json.Unmarshaler interface for %[1]s.
// It expects a type-tagged object with the tag %[3]q.
func (v *%[1]s) UnmarshalJSON(data []byte) error {
    type shim %[1]s
    var tmp _typeTagged
    if err := json.Unmarshal(data, &tmp); err != nil {
        return err
    } else if tmp.T != %[2]s {
        return fmt.Errorf("wrong type tag %%q for %%q", tmp.T, %[2]s)
    }
    return json.Unmarshal(tmp.V, (*shim)(v))
}
`, name, lconst, label)
	return nil
}