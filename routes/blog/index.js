const express = require('express')
const router = express.Router()

const {
  getBlog
} = require ('./controller')

router.get('/blog', getBlog)

module.exports = router;
