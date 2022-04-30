const {personas} = require('./constantes')

nombre = "segundoNombre"


for(var i = 0; i < personas.length; i++) {
    if(personas[i]["nombre"] == nombre) {
        console.log(personas[i])
    }
}