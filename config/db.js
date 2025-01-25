const mongoose = require('mongoose');
require('dotenv').config();

const conectarDBMongo = async () => {
    try {
        await mongoose.connect(process.env.DB_MONGO_CONN);
        console.log('DB Conectada');
    } catch (error) {
        console.log('Hubo un error');
        console.log(error);
        process.exit(1); // Detener la app
    }
}

module.exports = conectarDBMongo;
