const db = require('../../db/models')

const {
  admin
} = db;

module.exports = {
  getAdmin: (req, res) => {
    admin.findAll({
        include: [{
          model: db.blog,
          attributes: ['title', 'body', 'comment']
        }]
      })
      .then(result => res.send(result))
      .catch(error => res.send(error))
  }
}