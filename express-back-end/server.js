const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 3005;
const usersRoute = require ('./routes/users')

const cookieSession = require("cookie-session");

App.use(
  cookieSession({
    name: "session",
    keys: ["secretKey"],
  })
);

const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect(() => {
  console.log("connected to database");
});

// Express Configuration
App.use(BodyParser.urlencoded({ extended: false }));
App.use(BodyParser.json());
App.use(Express.static("public"));

App.use('/users', usersRoute(db));

//home route
App.get("/", (req, res) => {
  res.json({
    message: "database /",
  });
});

// Sample GET route
App.get("/api/data", (req, res) => {
  res.json({
    message: "Seems to work!",
  });
});

// - GET /api/index
App.get("/api/index", (req, res) => {
  res.json({
    message: "index",
  });
});
// - GET /api/products

App.get("/api/products", (req, res) => {
  res.json({
    message: "products",
  });
});
// - GET /api/products/:id/prices
App.get("/api/products/:id/prices", (req, res) => {
  res.json({
    message: "products/:id/prices",
  });
});
// - GET /api/cart
App.get("/api/cart", (req, res) => {
  res.json({
    message: "carts",
  });
});

// - GET /api/users/:id
App.get("/api/users/:id", (req, res) => {
  res.json({
    message: "users/:id",
  });
});

App.post("/api/cart", (req, res) => {
  res.json({
    message: "cart",
  });
});

App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
