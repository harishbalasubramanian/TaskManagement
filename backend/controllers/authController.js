const User = require('../../database/model/user.model')
const jwt = require('jsonwebtoken')
const validator = require('email-validator');
const signin = async (req,res) => {
    let {email,password} = req.body
    try{
        let user = await User.findOne({email});

        if (!user) {
            return res.status(400).send('User Not Found')
        }
        user.comparePassword(password,(err,match) => {
            if (!match || err) {
                return res.status(400).send('Wrong Password');
            }
            let token = jwt.sign(
                {_id:user._id},
                'aoweurghnoegaiejg',
                {expiresIn: '24h'}
            )
            res.status(200).send({
                token,
                username:user.username,
                email: user.email,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,

            })
        })
    }catch (error) {
        return res.status(400).send('Login Failed')
    }
};

const register = async (req,res) => {
    const {email,password,username} = req.body;
    try {
        if (!username) {
            return res.status(400).send('username is required')
        }
        if (!email) {
            return res.status(400).send('email is required')
        }
        if(!validator.validate(email)) {
            return res.status(400).send('enter valid email id')
        }
        if (!password || password.length < 6) {
            return res.status(400).send('password is required and should be min 6 characters long')
        }
        const userExist = await User.findOne({email})
        if (userExist) {
            return res.status(400).send('email is taken')
        }
        const user = await new User({
            username,password,email
        });
        await user.save();
        return res.status(200).send(user);
    }catch(error) {
        return res.status(400).send('error creating user')
    }
};

module.exports = {
    signin,
    register
}