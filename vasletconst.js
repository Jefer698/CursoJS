/*
VAR VS LET VS CONST

//var: si tu colocas el mismo nombre de la variable es decir var edad y var edad, el sistema se va a quedar con el ultimo valor
var edad = 10
var edad = 20 
console.log(edad)

//let: en cambio con let si tu colocas el mismo nombre de la variable, el sistema va a tirar un error
// let no nos permite declarar dos veces la misma variable es decir let edad let edad, pero si nos permite modificar su valor

let edad1 = 15
edad1 = 16
console.log(edad1)

//const : en cambio con const no puedes cambiar el valor puesto que es una constante

const edad3 = 5
console.log(edad3)

*/
/*
//var if lo que pasa con el var es que cuando tu modificas el valor dentro de un if u otra condicion
// el valor tambien es modificado por completo es decir tanto el valor dentro de la condicion como
// fuera de la condicion pasan a ser lo mismo puesto que fue modificado
//en resumen el valor cambiado sale del if puesto que lo sobreescribe
var edad = 10

if(true){
    var edad = 20
    console.log(edad)
}
console.log(edad)

//let if en cambio lo que sucede con el let es que cuando tu modificas el valor dentro de un if u otra
//condicion es que el valor solo cambia dentro de la condicion, al salir de la condicion el valor vuelve
// a ser el mismo que el valor inicial 
//en resumen el valor cambiado no sale del if

let edad2 = 10 
if(true){
    let edad2 = 20
    console.log(edad2)
}
console.log(edad2)

//const, con const pasa exactamente lo mismo que con el let es decir el valor dentro de la condicion no altera al valor
// fuera de la condicion

const edad3 = 30 
if(true){
    const edad3 = 20
    console.log(edad3)
}
console.log(edad3)

var arrayNumero = [10,20,30]
var arrayNumero = [10,20,30,40]

let arrayNumero = [10,20,30]
    arrayNumero = [10,20,30,40]
*/

/*
const arrayNumero = [10,20,30]
arrayNumero.push(40)    
console.log(arrayNumero)

const persona = {
    nombre : 'Juan',
    edad: 20
}

persona.edad = 21
persona.pais = 'Mexico'
console.log(persona)
*/


