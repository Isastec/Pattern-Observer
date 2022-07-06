const h1Titulo = document.querySelector("#h1Titulo")
const footerTitulo = document.querySelector("#footerTitulo")
const fecha = document.querySelector("#fecha")

const date = new Date()

fecha.textContent = date.toLocaleDateString()