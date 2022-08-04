const { crearArchivo } = require('./helpers/multiply');
const argv = require('./config/yargs');

console.clear()

// console.log(argv);

crearArchivo(argv.b, argv.l , argv.h)
    .then(n => console.log(n, 'creado!'))
    .catch(err => console.log(err))