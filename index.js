
const { registrar, leer } = require('./operaciones.js');


const [operacion, nombre, edad, animal, color, enfermedad] = process.argv.slice(2);

if (operacion === 'registrar') {
    if (nombre && edad && animal && color && enfermedad) {
        registrar(nombre, edad, animal, color, enfermedad);
    } else {
        console.error('Error. Debes otorgar: nombre, edad, animal, color, enfermedad.');
    }
} else if (operacion === 'leer') {
    leer();
} else {
    console.error('Error. Debes escribir: leer o registrar.');
}