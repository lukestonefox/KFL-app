package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", rootHandler)
	http.HandleFunc("/home", homeHandler)

	// Starting server on port 8080
	port := 8080
	fmt.Printf("Starting server on port %v\n", port)
	http.ListenAndServe(fmt.Sprintf(":%v", port), nil)
}

func rootHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Root Handler")
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Home Handler")
}
