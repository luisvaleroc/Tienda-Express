const mongoose = require('mongoose');

const dbConnection = async() => {

    try {

        await mongoose.connect('mongodb+srv://cecilios:cecilios@cluster0.wxscw.mongodb.net/ProductDB', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});
        console.log('db conectada')
    } catch (error) {
        console.log('error')
        throw new Error('error en conectar db');
    }
    
}

module.exports = {
    dbConnection
}