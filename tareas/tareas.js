const fs = require('fs');

let tareas = []

const crearTarea = (descripcion) => {
    cargarDB();

    let tarea = {
        descripcion,
        completado: false
    };

    tareas.push(tarea);
    guardarDB();

    return tarea;

}

const listarTareas = () => {
    cargarDB();
    return tareas;
}

const actualizarTarea = (descripcion, completado) => {
    cargarDB();

    let index = tareas.findIndex(tarea => descripcion === tarea.descripcion);

    if (index >= 0) {
        tareas[index].completado = completado;
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const borrarTarea = (descripcion) => {
    cargarDB();

    let index = tareas.findIndex(tarea => descripcion === tarea.descripcion);

    if (index >= 0) {
        tareas.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}

const guardarDB = () => {
    let data = JSON.stringify(tareas);

    fs.writeFile('db/data.json', data, err => {
        if (err) throw new Error('No se han podido guardar los datos.', err);
    });
}

const cargarDB = () => {
    try {
        tareas = require('../db/data.json');
    } catch (error) {
        tareas = [];
    }
}

module.exports = {
    crearTarea,
    listarTareas,
    actualizarTarea,
    borrarTarea
}