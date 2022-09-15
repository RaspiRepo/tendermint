(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{781:function(e,t,a){"use strict";a.r(t);var n=a(1),o=Object(n.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"creating-a-built-in-application-in-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-a-built-in-application-in-go"}},[e._v("#")]),e._v(" Creating a built-in application in Go")]),e._v(" "),a("h2",{attrs:{id:"guide-assumptions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#guide-assumptions"}},[e._v("#")]),e._v(" Guide assumptions")]),e._v(" "),a("p",[e._v("This guide is designed for beginners who want to get started with a Tendermint\nCore application from scratch. It does not assume that you have any prior\nexperience with Tendermint Core.")]),e._v(" "),a("p",[e._v('Tendermint Core is a service that provides a Byzantine fault tolerant consensus engine\nfor state-machine replication. The replicated state-machine, or "application", can be written\nin any language that can send and receive protocol buffer messages.')]),e._v(" "),a("p",[e._v("This tutorial is written for Go and uses Tendermint as a library, but applications not\nwritten in Go can use Tendermint to drive state-machine replication in a client-server\nmodel.")]),e._v(" "),a("p",[e._v("This tutorial expects some understanding of the Go programming language.\nIf you have never written Go, you may want to go through "),a("a",{attrs:{href:"https://learnxinyminutes.com/docs/go/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Learn X in Y minutes\nWhere X=Go"),a("OutboundLink")],1),e._v(" first to familiarize\nyourself with the syntax.")]),e._v(" "),a("p",[e._v("By following along with this guide, you'll create a Tendermint Core application\ncalled kvstore, a (very) simple distributed BFT key-value store.")]),e._v(" "),a("blockquote",[a("p",[e._v("Note: please use a released version of Tendermint with this guide. The guides will work with the latest released version.\nBe aware that they may not apply to unreleased changes on master.\nWe strongly advise against using unreleased commits for your development.")])]),e._v(" "),a("h2",{attrs:{id:"_1-1-installing-go"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-installing-go"}},[e._v("#")]),e._v(" 1.1 Installing Go")]),e._v(" "),a("p",[e._v("Please refer to "),a("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("the official guide for installing\nGo"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Verify that you have the latest version of Go installed:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBnbyB2ZXJzaW9uCmdvIHZlcnNpb24gZ28xLjE3LjUgZGFyd2luL2FtZDY0Cg=="}}),e._v(" "),a("p",[e._v("Note that the exact patch number may differ as Go releases come out.")]),e._v(" "),a("h2",{attrs:{id:"_1-2-creating-a-new-go-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-creating-a-new-go-project"}},[e._v("#")]),e._v(" 1.2 Creating a new Go project")]),e._v(" "),a("p",[e._v("We'll start by creating a new Go project.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"bWtkaXIga3ZzdG9yZQpjZCBrdnN0b3JlCmdvIG1vZCBpbml0IGdpdGh1Yi5jb20vJmx0O2dpdGh1Yl91c2VybmFtZSZndDsvJmx0O3JlcG9fbmFtZSZndDsK"}}),e._v(" "),a("p",[e._v("Inside the example directory create a "),a("code",[e._v("main.go")]),e._v(" file with the following content:")]),e._v(" "),a("blockquote",[a("p",[e._v("Note: there is no need to clone or fork Tendermint in this tutorial.")])]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBtYWluCgppbXBvcnQgKAogJnF1b3Q7Zm10JnF1b3Q7CikKCmZ1bmMgbWFpbigpIHsKIGZtdC5QcmludGxuKCZxdW90O0hlbGxvLCBUZW5kZXJtaW50IENvcmUmcXVvdDspCn0K"}}),e._v(" "),a("p",[e._v('When run, this should print "Hello, Tendermint Core" to the standard output.')]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBnbyBydW4gbWFpbi5nbwpIZWxsbywgVGVuZGVybWludCBDb3JlCg=="}}),e._v(" "),a("h2",{attrs:{id:"_1-3-writing-a-tendermint-core-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-writing-a-tendermint-core-application"}},[e._v("#")]),e._v(" 1.3 Writing a Tendermint Core application")]),e._v(" "),a("p",[e._v("Tendermint Core communicates with an application through the Application\nBlockChain Interface (ABCI) protocol. All of the message types Tendermint uses for\ncommunicating with the application can be found in the ABCI "),a("a",{attrs:{href:"https://github.com/tendermint/spec/blob/b695d30aae69933bc0e630da14949207d18ae02c/proto/tendermint/abci/types.proto",target:"_blank",rel:"noopener noreferrer"}},[e._v("protobuf\nfile"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("We will begin by creating the basic scaffolding for an ABCI application in\na new "),a("code",[e._v("app.go")]),e._v(" file. The first step is to create a new type, "),a("code",[e._v("KVStoreApplication")]),e._v("\nwith methods that implement the abci "),a("code",[e._v("Application")]),e._v(" interface.")]),e._v(" "),a("p",[e._v("Create a file called "),a("code",[e._v("app.go")]),e._v(" and add the following contents:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBtYWluCgppbXBvcnQgKAogYWJjaXR5cGVzICZxdW90O2dpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2FiY2kvdHlwZXMmcXVvdDsKKQoKdHlwZSBLVlN0b3JlQXBwbGljYXRpb24gc3RydWN0IHt9Cgp2YXIgXyBhYmNpdHlwZXMuQXBwbGljYXRpb24gPSAoKktWU3RvcmVBcHBsaWNhdGlvbikobmlsKQoKZnVuYyBOZXdLVlN0b3JlQXBwbGljYXRpb24oKSAqS1ZTdG9yZUFwcGxpY2F0aW9uIHsKIHJldHVybiAmYW1wO0tWU3RvcmVBcHBsaWNhdGlvbnt9Cn0KCmZ1bmMgKGFwcCAqS1ZTdG9yZUFwcGxpY2F0aW9uKSBJbmZvKHJlcSBhYmNpdHlwZXMuUmVxdWVzdEluZm8pIGFiY2l0eXBlcy5SZXNwb25zZUluZm8gewogcmV0dXJuIGFiY2l0eXBlcy5SZXNwb25zZUluZm97fQp9CgpmdW5jIChhcHAgKktWU3RvcmVBcHBsaWNhdGlvbikgRGVsaXZlclR4KHJlcSBhYmNpdHlwZXMuUmVxdWVzdERlbGl2ZXJUeCkgYWJjaXR5cGVzLlJlc3BvbnNlRGVsaXZlclR4IHsKIHJldHVybiBhYmNpdHlwZXMuUmVzcG9uc2VEZWxpdmVyVHh7Q29kZTogMH0KfQoKZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIENoZWNrVHgocmVxIGFiY2l0eXBlcy5SZXF1ZXN0Q2hlY2tUeCkgYWJjaXR5cGVzLlJlc3BvbnNlQ2hlY2tUeCB7CiByZXR1cm4gYWJjaXR5cGVzLlJlc3BvbnNlQ2hlY2tUeHtDb2RlOiAwfQp9CgpmdW5jIChhcHAgKktWU3RvcmVBcHBsaWNhdGlvbikgQ29tbWl0KCkgYWJjaXR5cGVzLlJlc3BvbnNlQ29tbWl0IHsKIHJldHVybiBhYmNpdHlwZXMuUmVzcG9uc2VDb21taXR7fQp9CgpmdW5jIChhcHAgKktWU3RvcmVBcHBsaWNhdGlvbikgUXVlcnkocmVxIGFiY2l0eXBlcy5SZXF1ZXN0UXVlcnkpIGFiY2l0eXBlcy5SZXNwb25zZVF1ZXJ5IHsKIHJldHVybiBhYmNpdHlwZXMuUmVzcG9uc2VRdWVyeXtDb2RlOiAwfQp9CgpmdW5jIChhcHAgKktWU3RvcmVBcHBsaWNhdGlvbikgSW5pdENoYWluKHJlcSBhYmNpdHlwZXMuUmVxdWVzdEluaXRDaGFpbikgYWJjaXR5cGVzLlJlc3BvbnNlSW5pdENoYWluIHsKIHJldHVybiBhYmNpdHlwZXMuUmVzcG9uc2VJbml0Q2hhaW57fQp9CgpmdW5jIChhcHAgKktWU3RvcmVBcHBsaWNhdGlvbikgQmVnaW5CbG9jayhyZXEgYWJjaXR5cGVzLlJlcXVlc3RCZWdpbkJsb2NrKSBhYmNpdHlwZXMuUmVzcG9uc2VCZWdpbkJsb2NrIHsKIHJldHVybiBhYmNpdHlwZXMuUmVzcG9uc2VCZWdpbkJsb2Nre30KfQoKZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIEVuZEJsb2NrKHJlcSBhYmNpdHlwZXMuUmVxdWVzdEVuZEJsb2NrKSBhYmNpdHlwZXMuUmVzcG9uc2VFbmRCbG9jayB7CiByZXR1cm4gYWJjaXR5cGVzLlJlc3BvbnNlRW5kQmxvY2t7fQp9CgpmdW5jIChhcHAgKktWU3RvcmVBcHBsaWNhdGlvbikgTGlzdFNuYXBzaG90cyhhYmNpdHlwZXMuUmVxdWVzdExpc3RTbmFwc2hvdHMpIGFiY2l0eXBlcy5SZXNwb25zZUxpc3RTbmFwc2hvdHMgewogcmV0dXJuIGFiY2l0eXBlcy5SZXNwb25zZUxpc3RTbmFwc2hvdHN7fQp9CgpmdW5jIChhcHAgKktWU3RvcmVBcHBsaWNhdGlvbikgT2ZmZXJTbmFwc2hvdChhYmNpdHlwZXMuUmVxdWVzdE9mZmVyU25hcHNob3QpIGFiY2l0eXBlcy5SZXNwb25zZU9mZmVyU25hcHNob3QgewogcmV0dXJuIGFiY2l0eXBlcy5SZXNwb25zZU9mZmVyU25hcHNob3R7fQp9CgpmdW5jIChhcHAgKktWU3RvcmVBcHBsaWNhdGlvbikgTG9hZFNuYXBzaG90Q2h1bmsoYWJjaXR5cGVzLlJlcXVlc3RMb2FkU25hcHNob3RDaHVuaykgYWJjaXR5cGVzLlJlc3BvbnNlTG9hZFNuYXBzaG90Q2h1bmsgewogcmV0dXJuIGFiY2l0eXBlcy5SZXNwb25zZUxvYWRTbmFwc2hvdENodW5re30KfQoKZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIEFwcGx5U25hcHNob3RDaHVuayhhYmNpdHlwZXMuUmVxdWVzdEFwcGx5U25hcHNob3RDaHVuaykgYWJjaXR5cGVzLlJlc3BvbnNlQXBwbHlTbmFwc2hvdENodW5rIHsKIHJldHVybiBhYmNpdHlwZXMuUmVzcG9uc2VBcHBseVNuYXBzaG90Q2h1bmt7fQp9Cg=="}}),e._v(" "),a("h3",{attrs:{id:"_1-3-1-add-a-persistent-data-store"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-add-a-persistent-data-store"}},[e._v("#")]),e._v(" 1.3.1 Add a persistent data store")]),e._v(" "),a("p",[e._v("Our application will need to write its state out to persistent storage so that it\ncan stop and start without losing all of its data.")]),e._v(" "),a("p",[e._v("For this tutorial, we will use "),a("a",{attrs:{href:"https://github.com/dgraph-io/badger",target:"_blank",rel:"noopener noreferrer"}},[e._v("BadgerDB"),a("OutboundLink")],1),e._v(".\nBadger is a fast embedded key-value store.")]),e._v(" "),a("p",[e._v("First, add Badger as a dependency of your go module using the "),a("code",[e._v("go get")]),e._v(" command:")]),e._v(" "),a("p",[a("code",[e._v("go get github.com/dgraph-io/badger/v3")])]),e._v(" "),a("p",[e._v("Next, let's update the application and its constructor to receive a handle to the\ndatabase.")]),e._v(" "),a("p",[e._v("Update the application struct as follows:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBLVlN0b3JlQXBwbGljYXRpb24gc3RydWN0IHsKCWRiICAgICAgICAgICAqYmFkZ2VyLkRCCglwZW5kaW5nQmxvY2sgKmJhZGdlci5UeG4KfQo="}}),e._v(" "),a("p",[e._v("And change the constructor to set the appropriate field when creating the application:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBOZXdLVlN0b3JlQXBwbGljYXRpb24oZGIgKmJhZGdlci5EQikgKktWU3RvcmVBcHBsaWNhdGlvbiB7CglyZXR1cm4gJmFtcDtLVlN0b3JlQXBwbGljYXRpb257ZGI6IGRifQp9Cg=="}}),e._v(" "),a("p",[e._v("The "),a("code",[e._v("pendingBlock")]),e._v(" keeps track of the transactions that will update the application's\nstate when a block is completed. Don't worry about it for now, we'll get to that later.")]),e._v(" "),a("p",[e._v("Finally, update the "),a("code",[e._v("import")]),e._v(" stanza at the top to include the "),a("code",[e._v("Badger")]),e._v(" library:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0KAoJJnF1b3Q7Z2l0aHViLmNvbS9kZ3JhcGgtaW8vYmFkZ2VyL3YzJnF1b3Q7CglhYmNpdHlwZXMgJnF1b3Q7Z2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvYWJjaS90eXBlcyZxdW90OwopCg=="}}),e._v(" "),a("h3",{attrs:{id:"_1-3-1-checktx"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-checktx"}},[e._v("#")]),e._v(" 1.3.1 CheckTx")]),e._v(" "),a("p",[e._v("When Tendermint Core receives a new transaction, Tendermint asks the application\nif the transaction is acceptable. In our new application, let's implement some\nbasic validation for the transactions it will receive.")]),e._v(" "),a("p",[e._v("For our KV store application, a transaction is a string with the form "),a("code",[e._v("key=value")]),e._v(",\nindicating a key and value to write to the store.")]),e._v(" "),a("p",[e._v("Add the following helper method to "),a("code",[e._v("app.go")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIHZhbGlkYXRlVHgodHggW11ieXRlKSB1aW50MzIgewoJcGFydHMgOj0gYnl0ZXMuU3BsaXROKHR4LCBbXWJ5dGUoJnF1b3Q7PSZxdW90OyksIDIpCgoJLy8gY2hlY2sgdGhhdCB0aGUgdHJhbnNhY3Rpb24gaXMgbm90IG1hbGZvcm1lZAoJaWYgbGVuKHBhcnRzKSAhPSAyIHx8IGxlbihwYXJ0c1swXSkgPT0gMCB7CgkJcmV0dXJuIDEKCX0KCXJldHVybiAwCn0K"}}),e._v(" "),a("p",[e._v("And call it from within your "),a("code",[e._v("CheckTx")]),e._v(" method:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIENoZWNrVHgocmVxIGFiY2l0eXBlcy5SZXF1ZXN0Q2hlY2tUeCkgYWJjaXR5cGVzLlJlc3BvbnNlQ2hlY2tUeCB7Cgljb2RlIDo9IGFwcC52YWxpZGF0ZVR4KHJlcS5UeCkKCXJldHVybiBhYmNpdHlwZXMuUmVzcG9uc2VDaGVja1R4e0NvZGU6IGNvZGV9Cn0K"}}),e._v(" "),a("p",[e._v("Any response with a non-zero code will be considered invalid by Tendermint.\nOur "),a("code",[e._v("CheckTx")]),e._v(" logic returns "),a("code",[e._v("0")]),e._v(" to Tendermint when a transaction passes\nits validation checks. The specific value of the code is meaningless to Tendermint.\nNon-zero codes are logged by Tendermint so applications can provide more specific\ninformation on why the transaction was rejected.")]),e._v(" "),a("p",[e._v("Note that "),a("code",[e._v("CheckTx")]),e._v(" "),a("em",[e._v("does not execute")]),e._v(" the transaction, it only verifies that that the\ntransaction "),a("em",[e._v("could")]),e._v(" be executed. We do not know yet if the rest of the network has\nagreed to accept this transaction into a block.")]),e._v(" "),a("p",[e._v("Finally, make sure to add the "),a("code",[e._v("bytes")]),e._v(" package to the your import stanza\nat the top of "),a("code",[e._v("app.go")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0KAoJJnF1b3Q7Ynl0ZXMmcXVvdDsKCgkmcXVvdDtnaXRodWIuY29tL2RncmFwaC1pby9iYWRnZXIvdjMmcXVvdDsKCWFiY2l0eXBlcyAmcXVvdDtnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9hYmNpL3R5cGVzJnF1b3Q7CikK"}}),e._v(" "),a("p",[e._v("While this "),a("code",[e._v("CheckTx")]),e._v(" is simple and only validates that the transaction is well-formed,\nit is very common for "),a("code",[e._v("CheckTx")]),e._v(" to make more complex use of the state of an application.")]),e._v(" "),a("h3",{attrs:{id:"_1-3-2-beginblock-delivertx-endblock-commit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-beginblock-delivertx-endblock-commit"}},[e._v("#")]),e._v(" 1.3.2 BeginBlock -> DeliverTx -> EndBlock -> Commit")]),e._v(" "),a("p",[e._v("When the Tendermint consensus engine has decided on the block, the block is transferred to the\napplication over three ABCI method calls: "),a("code",[e._v("BeginBlock")]),e._v(", "),a("code",[e._v("DeliverTx")]),e._v(", and "),a("code",[e._v("EndBlock")]),e._v(".")]),e._v(" "),a("p",[a("code",[e._v("BeginBlock")]),e._v(" is called once to indicate to the application that it is about to\nreceive a block.")]),e._v(" "),a("p",[a("code",[e._v("DeliverTx")]),e._v(" is called repeatedly, once for each "),a("code",[e._v("Tx")]),e._v(" that was included in the block.")]),e._v(" "),a("p",[a("code",[e._v("EndBlock")]),e._v(" is called once to indicate to the application that no more transactions\nwill be delivered to the application.")]),e._v(" "),a("p",[e._v("To implement these calls in our application we're going to make use of Badger's\ntransaction mechanism. Bagder uses the term "),a("em",[e._v("transaction")]),e._v(" in the context of databases,\nbe careful not to confuse it with "),a("em",[e._v("blockchain transactions")]),e._v(".")]),e._v(" "),a("p",[e._v("First, let's create a new Badger "),a("code",[e._v("Txn")]),e._v(" during "),a("code",[e._v("BeginBlock")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIEJlZ2luQmxvY2socmVxIGFiY2l0eXBlcy5SZXF1ZXN0QmVnaW5CbG9jaykgYWJjaXR5cGVzLlJlc3BvbnNlQmVnaW5CbG9jayB7CglhcHAucGVuZGluZ0Jsb2NrID0gYXBwLmRiLk5ld1RyYW5zYWN0aW9uKHRydWUpCglyZXR1cm4gYWJjaXR5cGVzLlJlc3BvbnNlQmVnaW5CbG9ja3t9Cn0K"}}),e._v(" "),a("p",[e._v("Next, let's modify "),a("code",[e._v("DeliverTx")]),e._v(" to add the "),a("code",[e._v("key")]),e._v(" and "),a("code",[e._v("value")]),e._v(" to the database "),a("code",[e._v("Txn")]),e._v(" every time our application\nreceives a new "),a("code",[e._v("RequestDeliverTx")]),e._v(".")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIERlbGl2ZXJUeChyZXEgYWJjaXR5cGVzLlJlcXVlc3REZWxpdmVyVHgpIGFiY2l0eXBlcy5SZXNwb25zZURlbGl2ZXJUeCB7CglpZiBjb2RlIDo9IGFwcC52YWxpZGF0ZVR4KHJlcS5UeCk7IGNvZGUgIT0gMCB7CgkJcmV0dXJuIGFiY2l0eXBlcy5SZXNwb25zZURlbGl2ZXJUeHtDb2RlOiBjb2RlfQoJfQoKCXBhcnRzIDo9IGJ5dGVzLlNwbGl0TihyZXEuVHgsIFtdYnl0ZSgmcXVvdDs9JnF1b3Q7KSwgMikKCWtleSwgdmFsdWUgOj0gcGFydHNbMF0sIHBhcnRzWzFdCgoJaWYgZXJyIDo9IGFwcC5wZW5kaW5nQmxvY2suU2V0KGtleSwgdmFsdWUpOyBlcnIgIT0gbmlsIHsKCQlsb2cuUGFuaWNmKCZxdW90O0Vycm9yIHJlYWRpbmcgZGF0YWJhc2UsIHVuYWJsZSB0byB2ZXJpZnkgdHg6ICV2JnF1b3Q7LCBlcnIpCgl9CgoJcmV0dXJuIGFiY2l0eXBlcy5SZXNwb25zZURlbGl2ZXJUeHtDb2RlOiAwfQp9Cg=="}}),e._v(" "),a("p",[e._v("Note that we check the validity of the transaction "),a("em",[e._v("again")]),e._v(" during "),a("code",[e._v("DeliverTx")]),e._v(".\nTransactions are not guaranteed to be valid when they are delivered to an\napplication. This can happen if the application state is used to determine transaction\nvalidity. Application state may have changed between when the "),a("code",[e._v("CheckTx")]),e._v(" was initially\ncalled and when the transaction was delivered in "),a("code",[e._v("DeliverTx")]),e._v(" in a way that rendered\nthe transaction no longer valid.")]),e._v(" "),a("p",[e._v("Also note that we don't commit the Badger "),a("code",[e._v("Txn")]),e._v(" we are building during "),a("code",[e._v("DeliverTx")]),e._v(".\nOther methods, such as "),a("code",[e._v("Query")]),e._v(", rely on a consistent view of the application's state.\nThe application should only update its state when the full block has been delivered.")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Commit")]),e._v(" method indicates that the full block has been delivered. During "),a("code",[e._v("Commit")]),e._v(",\nthe application should persist the pending "),a("code",[e._v("Txn")]),e._v(".")]),e._v(" "),a("p",[e._v("Let's modify our "),a("code",[e._v("Commit")]),e._v(" method to persist the new state to the database:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIENvbW1pdCgpIGFiY2l0eXBlcy5SZXNwb25zZUNvbW1pdCB7CglpZiBlcnIgOj0gYXBwLnBlbmRpbmdCbG9jay5Db21taXQoKTsgZXJyICE9IG5pbCB7CgkJbG9nLlBhbmljZigmcXVvdDtFcnJvciB3cml0aW5nIHRvIGRhdGFiYXNlLCB1bmFibGUgdG8gY29tbWl0IGJsb2NrOiAldiZxdW90OywgZXJyKQoJfQoJcmV0dXJuIGFiY2l0eXBlcy5SZXNwb25zZUNvbW1pdHtEYXRhOiBbXWJ5dGV7fX0KfQo="}}),e._v(" "),a("p",[e._v("Finally, make sure to add the "),a("code",[e._v("log")]),e._v(" library to the "),a("code",[e._v("import")]),e._v(" stanza as well:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aW1wb3J0ICgKCSZxdW90O2J5dGVzJnF1b3Q7CgkmcXVvdDtsb2cmcXVvdDsKCgkmcXVvdDtnaXRodWIuY29tL2RncmFwaC1pby9iYWRnZXIvdjMmcXVvdDsKCWFiY2l0eXBlcyAmcXVvdDtnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9hYmNpL3R5cGVzJnF1b3Q7CikK"}}),e._v(" "),a("p",[e._v("You may have noticed that the application we are writing will "),a("em",[e._v("crash")]),e._v(" if it receives an\nunexpected error from the database during the "),a("code",[e._v("DeliverTx")]),e._v(" or "),a("code",[e._v("Commit")]),e._v(" methods.\nThis is not an accident. If the application received an error from the database,\nthere is no deterministic way for it to make progress so the only safe option is to terminate.")]),e._v(" "),a("h3",{attrs:{id:"_1-3-3-query-method"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-query-method"}},[e._v("#")]),e._v(" 1.3.3 Query Method")]),e._v(" "),a("p",[e._v("We'll want to be able to determine if a transaction was committed to the state-machine.\nTo do this, let's implement the "),a("code",[e._v("Query")]),e._v(" method in "),a("code",[e._v("app.go")]),e._v(":")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyAoYXBwICpLVlN0b3JlQXBwbGljYXRpb24pIFF1ZXJ5KHJlcSBhYmNpdHlwZXMuUmVxdWVzdFF1ZXJ5KSBhYmNpdHlwZXMuUmVzcG9uc2VRdWVyeSB7CglyZXNwIDo9IGFiY2l0eXBlcy5SZXNwb25zZVF1ZXJ5e0tleTogcmVxLkRhdGF9CgoJZGJFcnIgOj0gYXBwLmRiLlZpZXcoZnVuYyh0eG4gKmJhZGdlci5UeG4pIGVycm9yIHsKCQlpdGVtLCBlcnIgOj0gdHhuLkdldChyZXEuRGF0YSkKCQlpZiBlcnIgIT0gbmlsIHsKCQkJaWYgZXJyICE9IGJhZGdlci5FcnJLZXlOb3RGb3VuZCB7CgkJCQlyZXR1cm4gZXJyCgkJCX0KCQkJcmVzcC5Mb2cgPSAmcXVvdDtrZXkgZG9lcyBub3QgZXhpc3QmcXVvdDsKCQkJcmV0dXJuIG5pbAoJCX0KCgkJcmV0dXJuIGl0ZW0uVmFsdWUoZnVuYyh2YWwgW11ieXRlKSBlcnJvciB7CgkJCXJlc3AuTG9nID0gJnF1b3Q7ZXhpc3RzJnF1b3Q7CgkJCXJlc3AuVmFsdWUgPSB2YWwKCQkJcmV0dXJuIG5pbAoJCX0pCgl9KQoJaWYgZGJFcnIgIT0gbmlsIHsKCQlsb2cuUGFuaWNmKCZxdW90O0Vycm9yIHJlYWRpbmcgZGF0YWJhc2UsIHVuYWJsZSB0byB2ZXJpZnkgdHg6ICV2JnF1b3Q7LCBkYkVycikKCX0KCXJldHVybiByZXNwCn0K"}}),e._v(" "),a("h2",{attrs:{id:"_1-3-4-additional-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-4-additional-methods"}},[e._v("#")]),e._v(" 1.3.4 Additional Methods")]),e._v(" "),a("p",[e._v("You'll notice that we left several methods unchanged. Specifically, we have yet\nto implement the "),a("code",[e._v("Info")]),e._v(" and "),a("code",[e._v("InitChain")]),e._v(" methods and we did not implement\nany of the "),a("code",[e._v("*Snapthot")]),e._v(" methods. These methods are all important for running Tendermint\napplications in production but are not required for getting a very simple application\nup and running.")]),e._v(" "),a("p",[e._v("To better understand these methods and why they are useful, check out the Tendermint\n"),a("a",{attrs:{href:"https://github.com/tendermint/spec/tree/20b2abb5f9a83c2d9d97b53e555e4ea5a6bd7dc4/spec/abci",target:"_blank",rel:"noopener noreferrer"}},[e._v("specification on ABCI"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"_1-4-starting-an-application-and-a-tendermint-core-instance-in-the-same-process"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-starting-an-application-and-a-tendermint-core-instance-in-the-same-process"}},[e._v("#")]),e._v(" 1.4 Starting an application and a Tendermint Core instance in the same process")]),e._v(" "),a("p",[e._v("Now that we have the basic functionality of our application in place, let's put it\nall together inside of our "),a("code",[e._v("main.go")]),e._v(" file.")]),e._v(" "),a("p",[e._v("Add the following code to your "),a("code",[e._v("main.go")]),e._v(" file:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"cGFja2FnZSBtYWluCgppbXBvcnQgKAoJJnF1b3Q7ZmxhZyZxdW90OwoJJnF1b3Q7Zm10JnF1b3Q7CgkmcXVvdDtsb2cmcXVvdDsKCSZxdW90O29zJnF1b3Q7CgkmcXVvdDtvcy9zaWduYWwmcXVvdDsKCSZxdW90O3BhdGgvZmlsZXBhdGgmcXVvdDsKCSZxdW90O3N5c2NhbGwmcXVvdDsKCgkmcXVvdDtnaXRodWIuY29tL2RncmFwaC1pby9iYWRnZXIvdjMmcXVvdDsKCSZxdW90O2dpdGh1Yi5jb20vc3BmMTMvdmlwZXImcXVvdDsKCWFiY2ljbGllbnQgJnF1b3Q7Z2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQvYWJjaS9jbGllbnQmcXVvdDsKCWNmZyAmcXVvdDtnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9jb25maWcmcXVvdDsKCXRtbG9nICZxdW90O2dpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2xpYnMvbG9nJnF1b3Q7CglubSAmcXVvdDtnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC9ub2RlJnF1b3Q7CgkmcXVvdDtnaXRodWIuY29tL3RlbmRlcm1pbnQvdGVuZGVybWludC90eXBlcyZxdW90OwopCgp2YXIgaG9tZURpciBzdHJpbmcKCmZ1bmMgaW5pdCgpIHsKCWZsYWcuU3RyaW5nVmFyKCZhbXA7aG9tZURpciwgJnF1b3Q7dG0taG9tZSZxdW90OywgJnF1b3Q7JnF1b3Q7LCAmcXVvdDtQYXRoIHRvIHRoZSB0ZW5kZXJtaW50IGNvbmZpZyBkaXJlY3RvcnkgKGlmIGVtcHR5LCB1c2VzICRIT01FLy50ZW5kZXJtaW50KSZxdW90OykKfQoKZnVuYyBtYWluKCkgewoJZmxhZy5QYXJzZSgpCglpZiBob21lRGlyID09ICZxdW90OyZxdW90OyB7CgkJaG9tZURpciA9IG9zLkV4cGFuZEVudigmcXVvdDskSE9NRS8udGVuZGVybWludCZxdW90OykKCX0KCWNvbmZpZyA6PSBjZmcuRGVmYXVsdFZhbGlkYXRvckNvbmZpZygpCgoJY29uZmlnLlNldFJvb3QoaG9tZURpcikKCgl2aXBlci5TZXRDb25maWdGaWxlKGZtdC5TcHJpbnRmKCZxdW90OyVzLyVzJnF1b3Q7LCBob21lRGlyLCAmcXVvdDtjb25maWcvY29uZmlnLnRvbWwmcXVvdDspKQoJaWYgZXJyIDo9IHZpcGVyLlJlYWRJbkNvbmZpZygpOyBlcnIgIT0gbmlsIHsKCQlsb2cuRmF0YWxmKCZxdW90O1JlYWRpbmcgY29uZmlnOiAldiZxdW90OywgZXJyKQoJfQoJaWYgZXJyIDo9IHZpcGVyLlVubWFyc2hhbChjb25maWcpOyBlcnIgIT0gbmlsIHsKCQlsb2cuRmF0YWxmKCZxdW90O0RlY29kaW5nIGNvbmZpZzogJXYmcXVvdDssIGVycikKCX0KCWlmIGVyciA6PSBjb25maWcuVmFsaWRhdGVCYXNpYygpOyBlcnIgIT0gbmlsIHsKCQlsb2cuRmF0YWxmKCZxdW90O0ludmFsaWQgY29uZmlndXJhdGlvbiBkYXRhOiAldiZxdW90OywgZXJyKQoJfQoJZ2YsIGVyciA6PSB0eXBlcy5HZW5lc2lzRG9jRnJvbUZpbGUoY29uZmlnLkdlbmVzaXNGaWxlKCkpCglpZiBlcnIgIT0gbmlsIHsKCQlsb2cuRmF0YWxmKCZxdW90O0xvYWRpbmcgZ2VuZXNpcyBkb2N1bWVudDogJXYmcXVvdDssIGVycikKCX0KCglkYlBhdGggOj0gZmlsZXBhdGguSm9pbihob21lRGlyLCAmcXVvdDtiYWRnZXImcXVvdDspCglkYiwgZXJyIDo9IGJhZGdlci5PcGVuKGJhZGdlci5EZWZhdWx0T3B0aW9ucyhkYlBhdGgpKQoJaWYgZXJyICE9IG5pbCB7CgkJbG9nLkZhdGFsZigmcXVvdDtPcGVuaW5nIGRhdGFiYXNlOiAldiZxdW90OywgZXJyKQoJfQoJZGVmZXIgZnVuYygpIHsKCQlpZiBlcnIgOj0gZGIuQ2xvc2UoKTsgZXJyICE9IG5pbCB7CgkJCWxvZy5GYXRhbGYoJnF1b3Q7Q2xvc2luZyBkYXRhYmFzZTogJXYmcXVvdDssIGVycikKCQl9Cgl9KCkKCWFwcCA6PSBOZXdLVlN0b3JlQXBwbGljYXRpb24oZGIpCglhY2MgOj0gYWJjaWNsaWVudC5OZXdMb2NhbENyZWF0b3IoYXBwKQoKCWxvZ2dlciA6PSB0bWxvZy5NdXN0TmV3RGVmYXVsdExvZ2dlcih0bWxvZy5Mb2dGb3JtYXRQbGFpbiwgdG1sb2cuTG9nTGV2ZWxJbmZvLCBmYWxzZSkKCW5vZGUsIGVyciA6PSBubS5OZXcoY29uZmlnLCBsb2dnZXIsIGFjYywgZ2YpCglpZiBlcnIgIT0gbmlsIHsKCQlsb2cuRmF0YWxmKCZxdW90O0NyZWF0aW5nIG5vZGU6ICV2JnF1b3Q7LCBlcnIpCgl9CgoJbm9kZS5TdGFydCgpCglkZWZlciBmdW5jKCkgewoJCW5vZGUuU3RvcCgpCgkJbm9kZS5XYWl0KCkKCX0oKQoKCWMgOj0gbWFrZShjaGFuIG9zLlNpZ25hbCwgMSkKCXNpZ25hbC5Ob3RpZnkoYywgb3MuSW50ZXJydXB0LCBzeXNjYWxsLlNJR1RFUk0pCgkmbHQ7LWMKfQo="}}),e._v(" "),a("p",[e._v("This is a huge blob of code, so let's break down what it's doing.")]),e._v(" "),a("p",[e._v("First, we load in the Tendermint Core configuration files:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Li4uCgljb25maWcgOj0gY2ZnLkRlZmF1bHRWYWxpZGF0b3JDb25maWcoKQoKCWNvbmZpZy5TZXRSb290KGhvbWVEaXIpCgoJdmlwZXIuU2V0Q29uZmlnRmlsZShmbXQuU3ByaW50ZigmcXVvdDslcy8lcyZxdW90OywgaG9tZURpciwgJnF1b3Q7Y29uZmlnL2NvbmZpZy50b21sJnF1b3Q7KSkKCWlmIGVyciA6PSB2aXBlci5SZWFkSW5Db25maWcoKTsgZXJyICE9IG5pbCB7CgkJbG9nLkZhdGFsZigmcXVvdDtSZWFkaW5nIGNvbmZpZzogJXYmcXVvdDssIGVycikKCX0KCWlmIGVyciA6PSB2aXBlci5Vbm1hcnNoYWwoY29uZmlnKTsgZXJyICE9IG5pbCB7CgkJbG9nLkZhdGFsZigmcXVvdDtEZWNvZGluZyBjb25maWc6ICV2JnF1b3Q7LCBlcnIpCgl9CglpZiBlcnIgOj0gY29uZmlnLlZhbGlkYXRlQmFzaWMoKTsgZXJyICE9IG5pbCB7CgkJbG9nLkZhdGFsZigmcXVvdDtJbnZhbGlkIGNvbmZpZ3VyYXRpb24gZGF0YTogJXYmcXVvdDssIGVycikKCX0KCWdmLCBlcnIgOj0gdHlwZXMuR2VuZXNpc0RvY0Zyb21GaWxlKGNvbmZpZy5HZW5lc2lzRmlsZSgpKQoJaWYgZXJyICE9IG5pbCB7CgkJbG9nLkZhdGFsZigmcXVvdDtMb2FkaW5nIGdlbmVzaXMgZG9jdW1lbnQ6ICV2JnF1b3Q7LCBlcnIpCgl9Ci4uLgo="}}),e._v(" "),a("p",[e._v("Next, we create a database handle and use it to construct our ABCI application:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Li4uCglkYlBhdGggOj0gZmlsZXBhdGguSm9pbihob21lRGlyLCAmcXVvdDtiYWRnZXImcXVvdDspCglkYiwgZXJyIDo9IGJhZGdlci5PcGVuKGJhZGdlci5EZWZhdWx0T3B0aW9ucyhkYlBhdGgpLldpdGhUcnVuY2F0ZSh0cnVlKSkKCWlmIGVyciAhPSBuaWwgewoJCWxvZy5GYXRhbGYoJnF1b3Q7T3BlbmluZyBkYXRhYmFzZTogJXYmcXVvdDssIGVycikKCX0KCWRlZmVyIGZ1bmMoKSB7CgkJaWYgZXJyIDo9IGRiLkNsb3NlKCk7IGVyciAhPSBuaWwgewoJCQlsb2cuRmF0YWxmKCZxdW90O0Vycm9yIGNsb3NpbmcgZGF0YWJhc2U6ICV2JnF1b3Q7LCBlcnIpCgkJfQoJfSgpCglhcHAgOj0gTmV3S1ZTdG9yZUFwcGxpY2F0aW9uKGRiKQoJYWNjIDo9IGFiY2ljbGllbnQuTmV3TG9jYWxDcmVhdG9yKGFwcCkKLi4uCg=="}}),e._v(" "),a("p",[e._v("Then we construct a logger:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Li4uCglsb2dnZXIgOj0gdG1sb2cuTXVzdE5ld0RlZmF1bHRMb2dnZXIodG1sb2cuTG9nRm9ybWF0UGxhaW4sIHRtbG9nLkxvZ0xldmVsSW5mbywgZmFsc2UpCi4uLgo="}}),e._v(" "),a("p",[e._v("Now we have everything setup to run the Tendermint node. We construct\na node by passing it the configuration, the logger, a handle to our application and\nthe genesis file:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Li4uCglub2RlLCBlcnIgOj0gbm0uTmV3KGNvbmZpZywgbG9nZ2VyLCBhY2MsIGdmKQoJaWYgZXJyICE9IG5pbCB7CgkJbG9nLkZhdGFsZigmcXVvdDtDcmVhdGluZyBub2RlOiAldiZxdW90OywgZXJyKQoJfQouLi4K"}}),e._v(" "),a("p",[e._v("Finally, we start the node:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Li4uCglub2RlLlN0YXJ0KCkKCWRlZmVyIGZ1bmMoKSB7CgkJbm9kZS5TdG9wKCkKCQlub2RlLldhaXQoKQoJfSgpCi4uLgo="}}),e._v(" "),a("p",[e._v("The additional logic at the end of the file allows the program to catch "),a("code",[e._v("SIGTERM")]),e._v(".\nThis means that the node can shutdown gracefully when an operator tries to kill the program:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"go ",base64:"Li4uCmMgOj0gbWFrZShjaGFuIG9zLlNpZ25hbCwgMSkKc2lnbmFsLk5vdGlmeShjLCBvcy5JbnRlcnJ1cHQsIHN5c2NhbGwuU0lHVEVSTSkKJmx0Oy1jCi4uLgo="}}),e._v(" "),a("h2",{attrs:{id:"_1-5-getting-up-and-running"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-getting-up-and-running"}},[e._v("#")]),e._v(" 1.5 Getting Up and Running")]),e._v(" "),a("p",[e._v("Our application is almost ready to run.\nLet's install the latest release version of the Tendermint library.")]),e._v(" "),a("p",[e._v("From inside of the project directory, run:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Z28gZ2V0IGdpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50QHYwLjM1LjAK"}}),e._v(" "),a("p",[e._v("Next, we'll need to populate the Tendermint Core configuration files.\nThis command will create a "),a("code",[e._v("tendermint-home")]),e._v(" directory in your project and add a basic set of configuration\nfiles in "),a("code",[e._v("tendermint-home/config/")]),e._v(". For more information on what these files contain\nsee "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/v0.35.0/docs/nodes/configuration.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("the configuration documentation"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("From the root of your project, run:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z28gcnVuIGdpdGh1Yi5jb20vdGVuZGVybWludC90ZW5kZXJtaW50L2NtZC90ZW5kZXJtaW50QHYwLjM1LjAgaW5pdCB2YWxpZGF0b3IgLS1ob21lIC4vdGVuZGVybWludC1ob21lCg=="}}),e._v(" "),a("p",[e._v("Next, build the application:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"Z28gYnVpbGQgLW1vZD1tb2QgLW8gbXktYXBwICAjIHVzZSAtbW9kPW1vZCB0byBhdXRvbWF0aWNhbGx5IHVwZGF0ZSBnby5zdW0K"}}),e._v(" "),a("p",[e._v("Everything is now in place to run your application.")]),e._v(" "),a("p",[e._v("Run:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCAuL215LWFwcCAtdG0taG9tZSAuL3RlbmRlcm1pbnQtaG9tZQo="}}),e._v(" "),a("p",[e._v("The application will begin producing blocks and you can see this reflected in\nthe log output.")]),e._v(" "),a("p",[e._v("You now have successfully started running an application using Tendermint Core 🎉🎉.")]),e._v(" "),a("h2",{attrs:{id:"_1-6-using-the-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-using-the-application"}},[e._v("#")]),e._v(" 1.6 Using the application")]),e._v(" "),a("p",[e._v("Your application is now running and emitting logs to the terminal.\nNow it's time to see what this application can do!")]),e._v(" "),a("p",[e._v("Let's try submitting a transaction to our new application.")]),e._v(" "),a("p",[e._v("Open another terminal window and run the following curl command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBjdXJsIC1zICdsb2NhbGhvc3Q6MjY2NTcvYnJvYWRjYXN0X3R4X2NvbW1pdD90eD0mcXVvdDt0ZW5kZXJtaW50PXJvY2tzJnF1b3Q7Jwo="}}),e._v(" "),a("p",[e._v("If everything went well, you should see a response indicating which height the\ntransaction was included in the blockchain.")]),e._v(" "),a("p",[e._v("Finally, let's make sure that transaction really was persisted by the application.")]),e._v(" "),a("p",[e._v("Run the following command:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"bash",base64:"JCBjdXJsIC1zICdsb2NhbGhvc3Q6MjY2NTcvYWJjaV9xdWVyeT9kYXRhPSZxdW90O3RlbmRlcm1pbnQmcXVvdDsnCg=="}}),e._v(" "),a("p",[e._v("Let's examine the response object that this request returns.\nThe request returns a "),a("code",[e._v("json")]),e._v(" object with a "),a("code",[e._v("key")]),e._v(" and "),a("code",[e._v("value")]),e._v(" field set.")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"json",base64:"Li4uCiAgICAgICZxdW90O2tleSZxdW90OzogJnF1b3Q7ZEdWdVpHVnliV2x1ZEE9PSZxdW90OywKICAgICAgJnF1b3Q7dmFsdWUmcXVvdDs6ICZxdW90O2NtOWphM009JnF1b3Q7LAouLi4K"}}),e._v(" "),a("p",[e._v("Those values don't look like the "),a("code",[e._v("key")]),e._v(" and "),a("code",[e._v("value")]),e._v(" we sent to Tendermint,\nwhat's going on here?")]),e._v(" "),a("p",[e._v("The response contain a "),a("code",[e._v("base64")]),e._v(" encoded representation of the data we submitted.\nTo get the original value out of this data, we can use the "),a("code",[e._v("base64")]),e._v(" command line utility.")]),e._v(" "),a("p",[e._v("Run:")]),e._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"",base64:"ZWNobyBjbTlqYTNNPSZxdW90OyB8IGJhc2U2NCAtZAo="}}),e._v(" "),a("h2",{attrs:{id:"outro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#outro"}},[e._v("#")]),e._v(" Outro")]),e._v(" "),a("p",[e._v("I hope everything went smoothly and your first, but hopefully not the last,\nTendermint Core application is up and running. If not, please "),a("a",{attrs:{href:"https://github.com/tendermint/tendermint/issues/new/choose",target:"_blank",rel:"noopener noreferrer"}},[e._v("open an issue on\nGithub"),a("OutboundLink")],1),e._v(". To dig\ndeeper, read "),a("a",{attrs:{href:"https://docs.tendermint.com/master/",target:"_blank",rel:"noopener noreferrer"}},[e._v("the docs"),a("OutboundLink")],1),e._v(".")])],1)}),[],!1,null,null,null);t.default=o.exports}}]);