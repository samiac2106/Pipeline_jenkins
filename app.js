const express = require("express");
const app = express();

//conectarse a la base de datos
const bd = require("./repositorios/bd");
bd.conectar();

require("./rutas/pais.rutas")(app);
require("./rutas/region.rutas")(app);
require("./rutas/ciudad.rutas")(app);

const puerto = 3030;

app.listen(puerto, () => {
    console.log(`API escuchando por el puerto ${puerto}`);
});