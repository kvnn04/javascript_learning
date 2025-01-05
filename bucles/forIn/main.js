// for (key in object) {
//    code block to be executed
// }

// 'key' se refiere a que van a ser las claves que esten adentro de 'object'
// const person = {fname:"John", lname:"Doe", age:25};

// let text = "";
// for (let x in person) {
//   console.log(x)
//   text += person[x];
// }
// -----------------------------------------------------------------

// for (let x in person) {
//   console.log(x);
//   text += person[x];
//   let condicion = person[x] == 'John';

//   if (condicion){
//     console.log('si existe ese nombre')
//   };

// }

// -----------------------------------------------------------------------------

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   // si se usa 'in' en un array esa varible va a ser los indices de esa array
//   console.log(x);
//   txt += numbers[x];
// }


// -------------------------------------------------------------------------------

// The forEach() method calls a function (a callback function) once for each array element.

// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   // console.log(value);
//   // console.log(index);
//   // console.log(array);
//   let x = 'el valor es '+value+' el indice es '+index+' el array al que pertenece es '+array;
//   console.log(x)
// }

