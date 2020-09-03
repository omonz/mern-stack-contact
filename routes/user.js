const express = require('express');
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const router = express.Router()
const User = require('./../model/User');
const config = require('config');

router.post('/', [
    check('name', 'Please add name').not().isEmpty(),
    check('email', 'enter a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({min: 6})
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }
    
    //Destructure the request param
    const {name, email, password } = req.body;
    try {
        //check if user exist with that email
        let user = await User.findOne({ email });
        if (user) {
          return res.status(400).json({ msg: "user already exist" });
        }

        user = new User({
          name,
          email,
          password,
        });

        //has the passord
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);

        await user.save();

        const payload = {
            user: {
                id: user.id
            }
        }

        //Save and signIn user with object of options
        jwt.sign(payload, config.get('jwtSecret'), {
            expiresIn: 360000
        }, (err, token) => {
            if(err) throw err;
            res.json({ token });
        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send('internal server error');
    }
});

module.exports = router;