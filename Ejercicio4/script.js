const $=(id) => document.getElementById(id)
const formulario = $("formulario-IMC")


formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    const altura=parseFloat($("altura").value)
    const peso=parseFloat($("peso").value)

    if (altura === "" ){
        alert ("Por favor, ingrese altura")
        return
    } 
    else if(peso === ""|| peso < 0) {
        alert ("Por favor ,ingrese peso")
    }

    const imc = peso/ (altura * altura)

    alert(`Tu IMC es ${imc.toFixed(2)}`)
})
