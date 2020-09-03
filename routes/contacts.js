const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Get all contact');
});

router.post('/', (req, res) => {
    res.send('add new contact');
});

router.put('/:id', (req, res) => {
    res.send('update contact');
});

router.delete('/:id', (req, res) => {
    res.send('delete a contact');
});

module.exports = router;