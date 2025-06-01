const paisRepositorio = require("../repositorios/pais.repositorio");

exports.listar = (solicitud, respuesta) => {
    paisRepositorio.listar((error, datos) => {
        if (error) {
            return respuesta.status(500).send({
                mensaje: "Error obteniendo la lista de Paises"
            });
        }
        return respuesta.send(datos);
    })
}

exports.agregar = (solicitud, respuesta) => {

}

exports.capital = (req, res) => {
    paisRepositorio.capital(req.params.pais, (error, dato) => {

        if (error) {
            return res.status(500).send(
                { mensaje: 'Error obteniendo la capital del pais' }
            );
        }
        return res.send(dato);
    });
}