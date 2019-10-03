const express = require('express')
const router = express.Router()

const {
  getBlog, addBlog
} = require ('./controller')

router.get('/blog', getBlog)
router.post('/blog', addBlog)

module.exports = router;
