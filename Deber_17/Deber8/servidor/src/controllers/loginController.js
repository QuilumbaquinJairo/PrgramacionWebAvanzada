const data = require("../database/datos")
const JWT = require('jsonwebtoken')
login = (req, res) => {
    
    const usuario = req.body; // Llamada a la función para obtener los datos
    
    if(data.verificarDato(usuario)){
        const username = usuario.username;
        const token = JWT.sign({username},"Stack",{
            expiresIn:'1min'
        })
        res.send(token);
    }else{
        res.sendStatus(404);
    }
    
}

module.exports = login;