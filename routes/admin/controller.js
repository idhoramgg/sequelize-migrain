const db = require ('../../db/models')

const { admin } = db;

module.exports = {
  getAdmin: (req, res) => {
    admin.findAll()
    .then(result => res.send(result))
    .catch(error => res.send(error))
  }
}