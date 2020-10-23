DROP TABLE IF EXISTS order_li CASCADE;
CREATE TABLE order_li (
  id SERIAL PRIMARY KEY NOT NULL,
  price_id INTEGER REFERENCES prices(id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(id) ON DELETE CASCADE,
  motor_option_id INTEGER REFERENCES options(id) ON DELETE CASCADE,
  valence_option_id INTEGER REFERENCES options(id) ON DELETE CASCADE,
  mount_option_id INTEGER REFERENCES options(id) ON DELETE CASCADE,
  cordless_option_id INTEGER REFERENCES options(id) ON DELETE CASCADE,
  remote_option_id INTEGER REFERENCES options(id) ON DELETE CASCADE,
  metalbeadedchain_option_id INTEGER REFERENCES options(id) ON DELETE CASCADE
);