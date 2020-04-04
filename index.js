const argv = require('./config/yargs').argv;
const { crearTarea, listarTareas, actualizarTarea, borrarTarea } = require('./tareas/tareas');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = crearTarea(argv.descripcion);
        console.log(`${colors.green('ÉXITO:')} Se ha creado la tarea: ${tarea.descripcion}`);
        break;

    case 'listar':
        let lista = listarTareas();

        console.log('=========Listado Tareas=========='.green);
        for (let tarea of lista) {
            console.log('---------------------------------'.magenta);
            console.log(tarea.descripcion);
            console.log(`Estado: ${tarea.completado ? 'Completada'.blue : 'Pendiente'.red}`);
            console.log('---------------------------------'.magenta);
        }
        console.log('================================='.green);

        break;

    case 'actualizar':
        let actualizado = actualizarTarea(argv.descripcion, argv.completado);

        if (actualizado) {
            console.log(`${colors.green('ÉXITO:')} Se ha actualizado la tarea "${argv.descripcion}".`);
        } else {
            console.log(`${colors.red('ERROR:')} No se ha encontrado la tarea que desea actualizar.`);
        }

        break;

    case 'borrar':
        let borrado = borrarTarea(argv.descripcion);

        if (borrado) {
            console.log(`${colors.green('ÉXITO:')} Se ha borrado la tarea "${argv.descripcion}".`);
        } else {
            console.log(`${colors.red('ERROR:')} No se ha podido borrar la tarea.`);
        }

        break;
        s

    default:
        console.log(`${colors.red('ERROR:')} No se ha reconocido el comando '${comando}'.`);
}