const express = require('express')
const app = express()
const adminRouter = require('./routes/admin/index')
const blogRouter = require('./routes/blog/index')

const PORT = process.env.PORT || 3888

app.get('/', (req, res) => res.send('hello peasant, from sequelize migrain'))
app.use('/', adminRouter)
app.use('/', blogRouter)

app.listen(PORT, () => console.log(
  `server is running in port ${PORT}`
))