const mongoose = require('mongoose')
const bcrypt = require ('bcryptjs');
// Creates the schema for the user profiles in the database
const userSchema = mongoose.Schema({
    username: {type:String},
    password: {type: String},
    email: {type: String},
},{timestamp: true});
// Saving middleware used here which actually does the hashing
userSchema.pre('save',function(next) {
    let user = this;
    if (user.isModified('password')) {
        return bcrypt.hash(user.password,12,function(err,hash){
            if(err) {
                return next(err)
            }
            user.password = hash;
            return next();
        })
    }
    else {
        return next();
    }
});
// Method used for comparing passwords after being hashed
userSchema.methods.comparePassword = function(password,next){
    bcrypt.compare(password,this.password,function(err,match) {
        if(err){
            return next(err,false);
        }
        return next(null,match);
    })
}

const User = mongoose.model('User',userSchema);
module.exports = User;