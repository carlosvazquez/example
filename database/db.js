const mysql2 = require('mysql2');
const conexion = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'n1H0nJ!n',
    database: 'crude_node_db'
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: '+error);
        return
    }
    console.log('Conectado a la BD MySQL');
})


module.exports = conexion;