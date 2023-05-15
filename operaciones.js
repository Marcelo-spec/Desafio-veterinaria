

const fs = require('fs');

const citasFilePath = 'citas.json';


function registrar(nombre, edad, animal, color, enfermedad) {
    const citaNueva = {
        nombre,
        edad,
        animal,
        color,
        enfermedad
    };

    let citas = [];

    try {
        
        if (fs.existsSync(citasFilePath)) {
            const dataCitas = fs.readFileSync(citasFilePath, 'utf8');
            citas = JSON.parse(dataCitas);
        }
    } catch (error) {
        console.error('Error al leer citas.json:', error);
    }
    citas.push(citaNueva);

    try {
        const citasJSON = JSON.stringify(citas, null, 2);
        fs.writeFileSync(citasFilePath, citasJSON);

        console.log('Cita nueva agregada:');
        console.log(citaNueva);
    } catch (error) {
        console.error('Error al escribir en citas:', error);
    }
}
function leer() {
    try {
        if (fs.existsSync(citasFilePath)) {
            const dataCitas = fs.readFileSync(citasFilePath, 'utf8');
            const citas = JSON.parse(dataCitas);

            if (citas.length === 0) {
                console.log('No se registran citas.');
            }
            else {
                console.log('Citas registradas:');
                citas.forEach((tarea) => {
                    console.log(tarea);
                })
            }
        } else {
            console.log('No se encuentra el archivo de citas.');
        }
    } catch (error) {
        console.error('Error al leer citas:', error);
    }
}

module.exports = {
    registrar,
    leer
};



