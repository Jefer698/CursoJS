// FUNCIONES 

function sumar (num){
    console.log(num)
}

sumar(10)

// FUNCION FLECHA

// cuando se tiene solo 1 parametro se pueden quitar los parentesis de la funcion flecha

const sumarDos1 = num => {
    console.log(num)
}
sumarDos1(30)

// cuando se tiene mas de 1 parametro se deben colocar los parentesis en la funcion flecha
const sumarDos = (num1, num2) => {
    return num1 + num2
}
const resultado = sumarDos(20, 30 )

console.log(resultado)

// tambien se puede abreviar esto de la siguiente manera

const sumarTres = (num1, num2) => {
    return num1 + num2
}
console.log(sumarTres(20, 20 ))