const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea.'
}

const completado = {
    alias: 'c',
    type: 'boolean',
    desc: 'Actualiza el estado de la tarea.',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crea una tarea', {
        descripcion
    })
    .command('actualizar', 'Actualiza una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}