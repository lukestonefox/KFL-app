package main

import (
	"fmt"
	"net/http"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
)

func main() {
	router := mux.NewRouter()
	router.HandleFunc("/home", homeHandler).Methods("GET")
	router.Handle("/", router)

	corsOptions := cors.New(cors.Options{
		AllowedOrigins:   []string{"http://localhost:5173"},
		AllowedMethods:   []string{"GET", "POST", "PUT", "DELETE"},
		AllowedHeaders:   []string{"Content-Type", "Authorization", "Origin", "Accept", "X-Requested-With"},
		AllowCredentials: true,
		Debug:            true,
	})

	port := 8080
	fmt.Printf("Starting server on port %v\n", port)

	handler := corsOptions.Handler(router)

	http.ListenAndServe(fmt.Sprintf(":%v", port), handler)
}

func rootHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Root Handler")
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Access-Control-Allow-Origin", "http://localhost:5173")
	fmt.Fprintf(w, "Home Handler")
}
