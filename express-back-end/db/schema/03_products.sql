DROP TABLE IF EXISTS products CASCADE;
CREATE TABLE products (
  id SERIAL PRIMARY KEY NOT NULL,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(555) NOT NULL,
  thumbnail VARCHAR(555) NOT NULL,
  image VARCHAR(555) NOT NULL,
  category_id INTEGER REFERENCES categories(id) ON DELETE CASCADE
);

