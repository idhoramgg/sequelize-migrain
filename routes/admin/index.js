const express = require('express')
const router = express.Router()

const {
  getAdmin
} = require ('./controller')

router.get('/admin', getAdmin);

module.exports = router;
