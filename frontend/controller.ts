fetch('https://localhost:8080/home')
    .then(response => response.text())
    .then(data => console.log(data))
    .catch(error => console.error(error));