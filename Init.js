
const data1 = require('./data.json');
const data2 = require('./dataDesordenada.json');
const busqueda = require('./busqueda');
const ordenamiento = require('./ordenamiento');

const objetivo = "e";

let data = data1;

// probamos con la data ya ordenada
let resultado = busqueda.binario(objetivo, data);

console.log("Info ya ordenada");
console.log(`El objetivo "${objetivo}" se encuentra en el indice ${resultado} y en la posición ${(data[resultado].index + 1)}`);


// Probamos la data desordenada
// primero la ordenamos con el metodo de insersion
// tenemos tres metodos intercambio, insersion, quicksort
// el mas eficiente es quicksort, pero no se logra insertar el indice indicado
// asi por que se usa el de insersion ya que es el segundo mas eficiente
data = ordenamiento.insersion(data2);

resultado = busqueda.binario(objetivo, data);

// el resultado es el mismo que el de antes
console.log("Info desordenada");
console.log(`El objetivo "${objetivo}" se encuentra en el indice ${resultado} y en la posición ${(data[resultado].index + 1)}`);