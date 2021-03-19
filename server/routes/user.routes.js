const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.set({
      "Access-Control-Allow-Headers":
      "x-access-token, Origin, Content-Type, Accept",
      "Access-Control-Allow-Methods": "POST, GET, OPTIONS, DELETE"
    })
  });

  app.get('/all', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
  });
}