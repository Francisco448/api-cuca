const mysql = require('mysql');
const { ConnectionString } = require('../ConnectionString/ConnectionString.json');

const pool = mysql.createConnection(ConnectionString); // un pool es otra forma de conectar con una base de datos, en mi opinion mas sencillo

pool.connect((err) => {
    if (!err) {
        console.log('Connected!');
    } else {
        console.log(err);
    }
})

module.exports = pool; // exportar modulo para que alcance la solucion;
