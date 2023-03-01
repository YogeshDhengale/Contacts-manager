const express = require('express')
const router = express.Router()
const signup = require('../Models/Signup')

router.get('/', (req, res) => {
    res.send('Api working perfectly')
})


module.exports = router