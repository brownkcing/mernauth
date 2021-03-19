const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");
const routes = require('express').Router();


module.exports = function(app) {
    routes.get('/', (req, res) => {
        res.status(200).json({ message: 'Connected!' });
      });
}