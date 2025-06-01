module.exports = (app) => {
    const controlador = require("../controladores/pais.controlador");

    app.get("/paises", controlador.listar);

    app.get('/paises/capital/:pais', controlador.capital);
}