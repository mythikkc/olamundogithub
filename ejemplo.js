
var vestimenta=['camisa','gorra','pantalon']

function mifuncion(item,index){
    console.log(index+":"+item)
}

vestimenta.forEach(mifuncion)

let array= Array.from("1A2B3C4D")

console.log(array)

//every

let num=[32,33,15,40]
mifuncion1()
function validarArray(item){
    return item>=19
}

function mifuncion1(){
    console.log(num.every(validarArray))
}

// De un determinado arreglo con nombre y edad 
//Buscar aquellas personas que tengan más de 5 años
// 5 elementos


let personas=[
    {nombre: "Alan",edad:65},
    {nombre: "Abdiel",edad:10},
    {nombre: "Cesar",edad:3},
    {nombre: "Diego",edad:5},
    {nombre: "Mario",edad:6},

]

let busqueda=personas.filter(persona=>persona.edad>5)

console.log(busqueda)

// Hacer una búsqueda de 10 trabajadores donde sean developers
 console.log("chi")