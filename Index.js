const express = require('express');
const morgan = require('morgan');
const app = express();


// setea un puerto de ejecucion cualquiera en caso de que el puerto 5000 este ocupado.

app.set('port', process.env.port || 5000);

// middlewares (lo que pasa a mitad de camino antes de ejecutarse)
// ...............................................................
app.use(express.json()); // prepara express para recibir JSON
app.use(morgan('dev')); // controla las rutas y devuelve el codigo de status segun la operacion
app.use(express.urlencoded({ extended: false })); // permite enviar datos de un formulario a express


// se requiere los modulos exportados
app.use(require('./Query Example/Routes')); // el modulo tiene alcance segun donde lo requieran
app.use(require('./Prisma Example/Routes'));

// inicializa el servidor
app.listen(app.get('port'), () => {
    console.log('server on port', app.get('port'));
})