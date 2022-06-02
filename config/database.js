//importar o mongoose
const mongoose = require('mongoose')
//scritps de conexao 
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://userAdmin:Assereherehazaz2007@fiaptecnico.wg0gr.mongodb.net/test')
}

//exportar as informações para acesso externo 
module.exports = conn