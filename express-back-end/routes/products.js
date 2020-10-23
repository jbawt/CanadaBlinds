const express = require ('express');
const router = express.Router();

module.exports = (db) => {

  router.get('/', (req, res) => {
    db.query(`SELECT * FROM products;`)
    .then(data => {
      res.json(data.rows);
    }).catch(err => res.send(err))
  })

  router.get('/:id', (req, res) => {
    const product = db.query(`SELECT * FROM products
              WHERE products.id = $1;`, [req.params.id])
    const prices = db.query(`SELECT * FROM prices
              WHERE product_id = $1;`, [req.params.id])
    const options = db.query(`SELECT * FROM options
              WHERE product_id = $1;`, [req.params.id])
    Promise.all([product, prices, options])
    .then(values => {
      res.json({product:values[0].rows[0], prices:values[1].rows, options:values[2].rows})
    })
  })

  return router;
}