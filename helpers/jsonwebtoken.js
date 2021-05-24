const jwt = require('jsonwebtoken');

const generarJWT = ( userId, nombres ) => {
    return new Promise(( resolve, reject )=>{
        const payload = {userId, nombres};
        jwt.sign( payload, process.env.SECRET_WORD, {
            expiresIn: '10h'
        },(err, token) => {
            if(err){
                console.log(err);
                reject('No se pudo generar el token');
            }
            resolve(token);
        });
    })
}

module.exports = {
    generarJWT
}