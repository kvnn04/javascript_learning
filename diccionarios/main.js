const diccionario = {
    nombre: "Juan",
    edad: 25,
    ciudad: "Madrid",
  };

// tipo de dato de diccionario
console.log(typeof(diccionario))

// obtener un valor mediate su clave
console.log(diccionario.nombre);

// lo mismo pero con corchetes
console.log(diccionario['edad']);

// agregar un nuevo item a diccionario

diccionario.pais = 'Argentina';
console.log(diccionario)

// modificar un valor
diccionario.nombre = 'Kevin'
console.log(diccionario)

// eliminar item
delete diccionario.ciudad
console.log(diccionario)

// Pares clave-valor (Object.entries)

Object.entries(diccionario).forEach(([clave, valor]) => {
    console.log(`${clave}: ${valor}`);
  });

// --------------------------------------------------------------------------

// Diccionarios con Map

const twoDiccionario = new Map()

// agregar valores al map
twoDiccionario.set('nombre', 'kevin')
twoDiccionario.set('edad', 21)
twoDiccionario.set('pais', 'Argentina')
console.log(twoDiccionario)

// verificar si una clave existe
claveVerify = twoDiccionario.has('nombre')
console.log('existe esa clave?', claveVerify)

// acceder a un valor
console.log(twoDiccionario.get('nombre')) // si no lo encuentra obtiene un undefined

// eliminar un item
twoDiccionario.delete('edad')
console.log(twoDiccionario)

// tamaño de la lista
console.log(twoDiccionario.size)

// pares claves valor
for (let [clave, valor] of twoDiccionario.entries()) {
    console.log(`${clave}: ${valor}`);
}

// USAR SIEMPRE MAP, EL OTRO QUEDO OBSOLETO

// Comparación entre Object y Map

// Característica	Object	Map

// Claves:	Solo cadenas o símbolos,	Cualquier tipo
// Orden de inserción:	No garantizado (antiguo),	Garantizado
// Métodos para iterar:	Limitados (keys, etc.),	Métodos específicos (keys, values, etc.)
// Rendimiento para grandes datos:	Menor,	Mejor

const texto = "hola mundo hola universo";
const palabras = texto.split(" ");
const contador = new Map();
                                                                // me costo entender esto.
palabras.forEach((palabra) => {
  contador.set(palabra, (contador.get(palabra) || 0) + 1);
});

console.log(contador);