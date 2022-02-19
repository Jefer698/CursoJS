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

const mensaje = nombre =>{
    return 'hola soy ' +nombre
} 

console.log(mensaje('Jefersson'))

// se puede seguir acortando el codigo de la siguiente manera

const mensaje2 = nombre => ('hola soy ' +nombre) 

console.log(mensaje2('Jefersson 2'))

// si nosotros no le colocamos ningun valor al parametro nos va a tirar un valor NaN pero si por defecto le damos un valor al paramatro de entrada nos va a tirar el valor dado por defecto
// una vez le asignemos el valor final al parametro se va a quedar con el valor final 

const sumaTres = (num = 0) => 
(console.log(num + 3))

sumaTres(9)