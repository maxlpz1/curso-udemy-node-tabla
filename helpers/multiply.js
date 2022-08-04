const fs = require('fs')
const colors = require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {

    try {

        let salida = '';
        let conso = '';

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} =` + ` ${base * i}\n`;
            conso += `${base} x ${i} =`.magenta + ` ${base * i}\n`.red;
        }

        if (listar) {

            console.log('===========')
            console.log(`Tabla del: ${base}`.rainbow)
            console.log('===========')

            console.log(conso);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;

    } catch (err) {
        throw err
    }
}

module.exports = {
    crearArchivo
}



