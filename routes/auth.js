const express = require('express');
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");

const User = require("./../model/User");

const { check, validationResult } = require("express-validator");
const auth = require('./../middleware/auth');

/**
 * get aapi/auth
 * get logged in user
 * private
 */ 
router.get("/", auth, async (req, res) => {
 try {
     const user = await User.findById(req.user.id).select('-password');
     res.json(user);
 } catch (err) {
     console.log(err.message);
     res.status(500).send('Internal server error');
 }
});

/**] 
 * post api/auth
 * auth user and get token
 */
router.post('/', [
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please password at least 6 characters').exists()
], async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {email, password} = req.body;

    try {
        let user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({msg : 'user not found'});
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({msg: 'incorrect password please try again'});
        }

        //set the payload
        const payload = {
          user: {
            id: user.id,
          },
        };

        //Save and signIn user with object of options
        jwt.sign(
          payload,
          config.get("jwtSecret"),
          {
            expiresIn: 360000,
          },
          (err, token) => {
            if (err) throw err;
            res.json({ token });
          }
        );
    } catch (err) {
        console.log(err.message);
        res.status(500).send('internal server error');
    }
});

module.exports = router;