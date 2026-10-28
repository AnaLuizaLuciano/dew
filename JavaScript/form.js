console.log("Carreguei")
const formulario = document.querySelector("#formularioAcademico")
console.log(formulario)

const campoNome = document.querySelector("#nome")
console.log(campoNome)

const campoNotaUm = document.querySelector("#notaUm")
console.log(campoNotaUm)

const campoNotaDois = document.querySelector("#notaDois")
console.log(campoNotaDois)

const resultado = document.querySelector("#resultado")
console.log(resultado)

function calcularMedia(){
    console.log("calcularMedia: ", notaUm+notaDois)/2;
}
calcularMedia()

formulario.addEventListener("click", function() {
    console.log("Enviou")

});
