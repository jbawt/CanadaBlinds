const Express = require("express");
const App = Express();
const BodyParser = require("body-parser");
const PORT = 8080;
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

// routes
const usersRoute = require ('./routes/users');
const categoriesRoute = require ('./routes/categories');
const productsRoute = require ('./routes/products');
const optionsRoute = require ('./routes/options');
const pricesRoute = require ('./routes/prices');
// using routes
App.use('/users', usersRoute(db));
App.use('/categories', categoriesRoute(db));
App.use('/products', productsRoute(db));
App.use('/options', optionsRoute(db));
App.use('/prices', pricesRoute(db));


App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    `Express seems to be listening on port ${PORT} so that's pretty good 👍`
  );
});
