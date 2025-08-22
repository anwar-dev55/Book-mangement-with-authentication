const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema({
name: String,
email: String,
age: Number,
password: String,
role: String,

})

userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password,this.password)
}
 
module.exports = mongoose.model('user', userSchema)
