const express = require('express')
const {register, login} = require('../controllers/auth_controller.js');

const router = express.Router();

router.get('/', (req, res) => {
    return res.status(200).json({message: "OK"})
})

router.post('/register', register)

router.post('/login', login)

module.exports = router