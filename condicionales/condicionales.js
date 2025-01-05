// condicionales
let condicion = 4 < 3

if (condicion){     // ejecuta si condicion es true
    console.log('boka')
}
if (!condicion){     // ejecuta si condicion es False pq le puse un ! que niega el resultado entonces el negado de false es true
    console.log('bokaaaa')
}
// --------------------------------------------------------

let persona = { nombre: "Juan", edad: 25 };

if ('nombre' in persona) {
    console.log("La propiedad 'nombre' existe.");
} else {
    console.log("La propiedad 'nombre' no existe.");
}
// ----------------------------------------------------------

let variable;

if (typeof variable !== 'undefined') {
    console.log("La variable está definida.");
} else {
    console.log("La variable no está definida.");
}
// --------------------------------------------------------------

let coches = ['audi', 'ford'];
let verificarSiExiste = coches.includes('audi')
// console.log(con)
if (verificarSiExiste){
    console.log('si existe');
}

// ----------------------------------------------------------------------

let edad = 25;

if (edad < 18) {
    console.log('Eres menor de edad.');
} else if (edad >= 18 && edad < 30) {
    console.log('Eres joven adulto.');
} else if (edad >= 30 && edad < 50) {
    console.log('Eres adulto.');
} else {
    console.log('Eres mayor de 50 años.');
}
