const express = require ('express');
const router = express.Router();

module.exports = (db) => {

  router.get('/', (req, res) => {
    db.query(`SELECT * FROM prices;`)
    .then(data => {
      res.json(data.rows);
    }).catch(err => res.send(err))
  })

  return router;
}