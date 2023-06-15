const { PrismaClient } = require('@prisma/client');
const Prisma = new PrismaClient;
const app = require('express').Router(); // se usa la funcion Router() de express solamente

// operaciones crud

// busca todos los productos
app.get('/Prisma/getProducts', async (req, res) => {
    const products = await Prisma.products.findMany();
    res.send(products);
})

// busca un producto con un id
app.get('/Prisma/getProductById/:Id', async (req, res) => {
    const product = await Prisma.products.findFirst({
        where: {
            IdProduct: parseInt(req.params.Id)
        }
    })
    res.send(product);
})

// el precio (Price) y la cantidad (Quantity) se expresan en numeros enteros en este ejemplo
app.post('/Prisma/addProduct', async (req, res) => {
    const newProduct = await Prisma.products.create({
        data: req.body,
    })
    res.send(newProduct);
})

// en este ejemplo solo voy a cambiar el nombre y la descripcion 
app.put('/Prisma/editProduct/:Id', async (req, res) => {
    const editProduct = await Prisma.products.update({
        data: {
            Name: req.body.Name,
            Description: req.body.Description
        },
        where: {
            IdProduct: parseInt(req.params.Id)
        }
    })
    res.send(editProduct);
})

// elimina un producto con un id
app.delete('/Prisma/removeProduct/:Id', async (req, res) => {
    const deletedProduct = await Prisma.products.delete({
        where: {
            IdProduct: parseInt(req.params.Id)
        }
    })
    res.send(deletedProduct);
})

module.exports = app; // se exporta el modulo para que alcance toda la solucion
