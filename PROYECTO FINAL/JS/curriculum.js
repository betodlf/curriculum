let anho = "2023";

alert("Hola! Este es mi CV." + anho);


document.getElementById('boton').onclick = function () {
    console.log("Capturamos el evento click")
    document.getElementById("demo").innerHTML = "Operario del 06/1968 a 12/1988"
}

/*
INTENTE HACER LO MISMO QUE CON LA EXPERIENCIA 1 Y NO DIO RESULTADO, NO PUDE ENCONTRARLE LA VUELTA. PERDON.

document.getElementById('boton2').onclick = function () {
    console.log("Capturamos el evento click")
    document.getElementById("demo2").innerHTML = "Director del 01/1989 a 12/1999"
}

document.getElementById('boton3').onclick = function () {
    console.log("Capturamos el evento click")
    document.getElementById("demo3").innerHTML = "Subgerente del 01/2000 a 12/2005"
}

document.getElementById('boton4').onclick = function () {
    console.log("Capturamos el evento click")
    document.getElementById("demo4").innerHTML = "Gerente de sucursal del 01/2006 a 12/2009"
}

document.getElementById('boton5').onclick = function () {
    console.log("Capturamos el evento click")
    document.getElementById("demo5").innerHTML = "Gerente general del 01/2010 a la actualidad"
}
*/