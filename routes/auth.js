const express = require('express');
const router = express.Router();

/**
 * get aapi/auth
 * get logged in user
 * private
 */
router.get('/', (req, res) => {
    res.send('Get the logged in user');
});

/**]
 * post api/auth
 * auth user and get token
 */
router.post('/', (req, res) => {
    res.send('log in user');
});

module.exports = router;