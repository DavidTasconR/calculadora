var Suma = function (){

    var valor1 = parseInt (document.getElementById("valor1").value)
    var valor2 = parseInt (document.getElementById("valor2").value)
    var resultado = valor1 + valor2
    document.getElementById("total").value = resultado
}
var Resta = function (){

    var valor1 = parseInt (document.getElementById("valor1").value)
    var valor2 = parseInt (document.getElementById("valor2").value)
    var resultado = valor1 - valor2
    document.getElementById("total").value = resultado
}
var Multiplicacion = function (){

    var valor1 = parseInt (document.getElementById("valor1").value)
    var valor2 = parseInt (document.getElementById("valor2").value)
    var resultado = valor1 * valor2
    document.getElementById("total").value = resultado
}
var Division = function (){

    var valor1 = parseInt (document.getElementById("valor1").value)
    var valor2 = parseInt (document.getElementById("valor2").value)
    var resultado = valor1 / valor2
    document.getElementById("total").value =  resultado
}

