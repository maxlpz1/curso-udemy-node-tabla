const { describe } = require('yargs');

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Toma la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .option('h', {
        alias: 'limite',
        type: 'number',
        describe: 'Mantidad hasta la cual cualcula la tabla'
    })
    .check((argv, option) => {
        if (isNaN(argv.b)) {
            throw 'la base debe ser numerica'
        }
        return true
    }).argv;

    module.exports = argv;