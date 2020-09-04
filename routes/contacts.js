const express = require('express');
const router = express.Router();
const User = require("./../model/User");
const Contact = require("./../model/Contact");

const { check, validationResult } = require("express-validator");
const auth = require('./../middleware/auth');

/**
 * Get all contacts
 * get api/contact
 * private
 */
router.get('/', auth, async (req, res) => {
    try {
        const contacts = await Contact.find({ user : req.user.id}).sort({ date: -1});
        res.json(contacts);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Internal Server Error');
    }
}); 

/**
 * Add new contact
 * post api/contact
 * private
 */
router.post('/', [auth, [
    check('name', 'Name is required').not().isEmpty()
]], async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        //deconstruct and save new contact to database
        const { name, email, phone, type } = req.body;
        try {
            const newContact = new Contact({
                name, email, phone, type, user: req.user.id
            });

            const contact = await newContact.save();
            res.json(contact);
        } catch (err) { 
            console.log(err.message);
            res.status(500).send('Internal server error');
        }
});

router.put('/:id', (req, res) => {
    res.send('update contact');
});

router.delete('/:id', (req, res) => {
    res.send('delete a contact');
});

module.exports = router;