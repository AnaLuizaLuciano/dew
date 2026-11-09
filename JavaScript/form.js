const formulario = document.querySelector("#formularioAcademico")
const campoNome = document.querySelector("#nome")
const campoNotaUm = document.querySelector("#notaUm")
const campoNotaDois = document.querySelector("#notaDois")
 
// Recebe as duas notas e devolve a média
function calcularMedia(notaUm, notaDois) {
    return (notaUm + notaDois) / 2
}
 
// O cálculo acontece quando o formulário é enviado (clique em "Calcular")
formulario.addEventListener("submit", function (evento) {
    // impede a página de recarregar ao enviar
    evento.preventDefault()
 
    const nome = campoNome.value.trim()
    const notaUm = parseFloat(campoNotaUm.value)
    const notaDois = parseFloat(campoNotaDois.value)
 
    const media = calcularMedia(notaUm, notaDois)
 
    // Popup na tela com o texto: Nome - média
    alert(nome + " - " + media.toFixed(1))
})