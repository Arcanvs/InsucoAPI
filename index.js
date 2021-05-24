const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const { dbCon } = require('./database/db');

dotenv.config();
const app = express();
dbCon();
app.use( cors() );
app.use( express.static('public') );
app.use( express.json() );

//Rutas
app.use( '/api/auth', require('./routes/auth') );
app.use( '/api/usuarios', require('./routes/usuarios') );
app.use( '/api/perfiles', require('./routes/perfiles') );
app.use( '/api/valores', require('./routes/valores') );
app.use( '/api/menus', require('./routes/menus') );


app.listen(process.env.PORT, () => {
    console.log( `Servidor Listo en puerto: ${process.env.PORT}` );
});