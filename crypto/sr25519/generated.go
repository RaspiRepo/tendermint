// Code generated by tmjson. DO NOT EDIT

package sr25519

import (
	"encoding/json"
	"fmt"
)

type _typeTagged struct {
	T string          `json:"type"`
	V json.RawMessage `json:"value"`
}

const _typeTag_PubKey = "tendermint/PubKeySr25519"

// MarshalJSON implements the json.Marshaler interface for PubKey.
// It wraps the encoding in a type-tagged object.
func (v PubKey) MarshalJSON() ([]byte, error) {
	type shim PubKey
	value, err := json.Marshal((*shim)(&v))
	if err != nil {
		return nil, err
	}
	return json.Marshal(_typeTagged{T: _typeTag_PubKey, V: value})
}

// UnmarshalJSON implements the json.Unmarshaler interface for PubKey.
// It expects a type-tagged object with the tag "tendermint/PubKeySr25519".
func (v *PubKey) UnmarshalJSON(data []byte) error {
	type shim PubKey
	var tmp _typeTagged
	if err := json.Unmarshal(data, &tmp); err != nil {
		return err
	} else if tmp.T != _typeTag_PubKey {
		return fmt.Errorf("wrong type tag %q for %q", tmp.T, _typeTag_PubKey)
	}
	return json.Unmarshal(tmp.V, (*shim)(v))
}