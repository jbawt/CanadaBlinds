const express = require("express");
const router = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM order_li WHERE user_id = 1 AND is_paid = false;`)
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => res.send(err));
  });

  router.post("/", (req, res) => {
    let {
      price,
      product_id,
      user_id,
      motor_option,
      cordless_option,
      remote_option,
      metalbeadedchain_option,
      retractable_cord_option,
      charger,
      width,
      height,
    } = req.body;
    db.query(
      `INSERT INTO order_li (price, product_id, user_id, motor_option, cordless_option, remote_option, metalbeadedchain_option, retractable_cord_option, charger, width, height) 
              VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)`,
      [
        price,
        product_id,
        user_id,
        motor_option,
        cordless_option,
        remote_option,
        metalbeadedchain_option,
        retractable_cord_option,
        charger,
        width,
        height,
      ]
    )
      .then((data) => {
        res.json(data.rows);
      })
      .catch((err) => console.log(err));
  });
  router.delete("/", (req,res) => {
    let id = req.body.id;
    return db.query(`DELETE FROM order_li WHERE id = $1;`, [id])
    .then((response) => {
      response.statusCode = 200;
      res.send(response)
    })
    .catch((err) => console.log(err));
  })

  return router;
};
