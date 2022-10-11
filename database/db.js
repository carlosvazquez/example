const DATABASE = process.env.DATABASE;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const PASSWORD = process.env.PASSWORD;
const USER = process.env.USER;

const mysql2 = require('mysql2');

const conexion = mysql2.createConnection({
    host: DB_HOST,
    user: USER,
    port: PORT,
    password: PASSWORD,
    database: DATABASE
});

conexion.connect((error)=>{
    if(error){
        console.error('El error de conexion es: '+error);
        return
    }
    console.log('Conectado a la BD MySQL');
})


module.exports = conexion;
