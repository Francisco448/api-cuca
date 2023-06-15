const app = require('express').Router(); // se usa la funcion Router() de express solamente
const pool = require('../MySQL/Configuration/MySQL.config'); // se requiere el modulo exportado

// operaciones crud

// busca todos los productos
app.get('/getProducts', async (req, res) => {
    await pool.query('select * from products', (err, row, fields) => {
        if (!err) {
            res.json(row);
        } else {
            console.log(err);
        }
    })
})

// busca un producto con un id
app.get('/getProductById/:Id', async (req, res) => {
    await pool.query('select * from products where IdProduct = ?', [req.params.Id], (err, row, fields) => {
        if (!err) {
            res.json(row);
        } else {
            console.log(err);
        }
    })
})

// el precio (Price) y la cantidad (Quantity) se expresan en numeros enteros en este ejemplo
app.post('/addProduct', async (req, res) => {
    await pool.query('insert into Products (Name, Price, Quantity, Stock, Description) values (?)', [Object.values(req.body)], (err, rows, fields) => {
        if (!err) {
            res.send('Inserted!');
        } else {
            console.log(err);
        }
    })
})

// en este ejemplo solo voy a cambiar el nombre y la descripcion 
app.put('/editProduct/:Id', async (req, res) => {
    await pool.query('update Products set Name = ?, Description = ? where IdProduct = ?', [req.body.Name, req.body.Description, req.params.Id], (err, rows, fields) => {
        if (!err) {
            res.send('Updated!');
        } else {
            console.log(err);
        }
    })
})

// elimina un producto con un id
app.delete('/removeProduct/:Id', async (req, res) => {
    await pool.query('delete from Products where IdProduct = ?', [req.params.Id], (err, rows, fields) => {
        if (!err) {
            res.send('Removed!');
        } else {
            console.log(err);
        }
    })
})

module.exports = app; // se exporta el modulo para que alcance toda la solucion
