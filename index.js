const express = require('express');
const cors = require('cors')
const { dbConnection } = require('./database/config');
const Product = require('./models/product');
const app = express();
const port = 3001;



const conectarDb = async () => {
    await dbConnection();
}
  
conectarDb();

app.use(cors());



app.use(express.json())

app.get('/api/product', async(req,res) => {
    const products = await Product.find();
    res.json({
        products
    })
});
app.post('/api/product', async (req,res) => {
    
        const body = req.body;
        body.estado = true
        const productDB = await Product.findOne(body)

        if(productDB){
            return res.status(400).json({
                msg:'Producto existe'
            })
        }
        const product = new Product(body)
       await  product.save();
    
    res.json({
        msg:'Producto creado',
        product,
        body

})
});

app.put('/api/product/:id', async (req,res) => { 
    const {id} = req.params;
    const body = req.body;
    const product = await Product.findByIdAndUpdate(id, req.body, {new: true})
    return res.json({
        product
    })
})

app.delete('/api/product/:id', async(req,res) => {
    const { id } = req.params
    const productoBorrado = await Product.findByIdAndUpdate( id, { estado: false }, {new: true });
    res.json( productoBorrado );
})

app.listen(port, () => {
    console.log('escuchando desde el puerto', port)
})

