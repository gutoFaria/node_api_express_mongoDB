const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    nome_user:String,
    email_user:String,
    tipo_user:{type:Number,default:1},
    senha_user:String
},{
    timestamps:true
})

// criptografando a senha
userSchema.pre('save',function(next){
    if(!this.isModified('senha_user'))
        return next();
    
    this.senha_user = bcrypt.hashSync(this.senha_user,10);
    next();
})

const users = mongoose.model("Users",userSchema);

module.exports = users;