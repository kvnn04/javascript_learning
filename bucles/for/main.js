// for (expression 1; expression 2; expression 3) {
    // code block to be executed
//   }

// Expression 1 is executed (one time) before the execution of the code block.

// Expression 2 defines the condition for executing the code block.

// Expression 3 is executed (every time) after the code block has been executed.


for (let i = 0; i < 5; i++) {
    let text =  "The number is " + i + "<br>";      // ejemplo de la documentacion
    console.log(text)
}
// lista = ['boca', 'riber', 'rasin'];

// for (let i = 0; i < lista.length; i++) {
//     // let text =  "The number is " + i + "<br>";
//     let text = 'acceso al elemento por indice: ' + lista[i];
//     console.log(text);
// }

// las variables declaradas en mi global son diferentes a mis variables creadas para un bucle por ejemplo
// osea let miVariable = 0, es diferente al for (let miVariable = 0)