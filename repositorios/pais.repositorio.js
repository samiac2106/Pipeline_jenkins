const bd = require("./bd");

const PaisRepositorio = () => { };

PaisRepositorio.listar = async (respuesta) => {
    const basedatos = bd.obtenerBD();
    try {
        //***** codigo MONGO para obtener la lista de paises
        const resultado = await basedatos.collection("paises")
            .find()
            .project({
                id: 1,
                nombre: 1,
                continente: 1,
                tipoRegion: 1,
                codigoAlfa2: 1,
                codigoAlfa3: 1
            })
            .toArray();
        //***** 

        return respuesta(null, resultado);
    }
    catch (error) {
        return respuesta(error, null);
    }
}

PaisRepositorio.capital = async function (nombrePais, respuesta) {
    try {
        const basedatos = bd.obtenerBD();

        //***** codigo MONGO para obtener la capital
        const capitalObtenida = await basedatos.collection('paises')
            .aggregate([
                { $match: { nombre: nombrePais } },
                { $unwind: '$regiones' },
                { $unwind: '$regiones.ciudades' },
                { $match: { "regiones.ciudades.capitalPais": true } },
                {
                    $project: {
                        ciudad: '$regiones.ciudades.nombre',
                        estado: '$regiones.nombre'
                    }
                }
            ]).toArray();
        //***** 
        respuesta(null, capitalObtenida[0]);
    } catch (error) {
        console.log(error)
        respuesta(error, null);
    }
}


module.exports = PaisRepositorio;