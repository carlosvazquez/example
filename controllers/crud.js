const conexion = require('../database/db');

exports.save = (req,res)=>{
    const user = req.body.user;
    const rol = req.body.rol;
    const cap = req.body.cap;
    conexion.query('INSERT INTO users SET ?',{user:user, rol:rol, cap:cap}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })

};


exports.update = (req, res)=>{
    const id = req.body.id;
    const user = req.body.user;
    const rol = req.body.rol;
    const cap = req.body.cap;
    conexion.query('UPDATE users SET ? WHERE id=?', [{user:user, rol:rol, cap:cap}, id], (error,results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    })
}
