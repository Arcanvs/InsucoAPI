const mongoose = require('mongoose');

const dbCon = async () => {
    try {
        await mongoose.connect(process.env.BD_CON, {
            authSource: "admin",
            user: process.env.BD_USER,
            pass: process.env.BD_PASS,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('BD Operativa');
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    dbCon
}