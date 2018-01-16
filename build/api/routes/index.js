'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _express2.default.Router();

routes.get('/', function (req, res) {
  res.status(200).json({ message: "connected" });
}).get('/test', function (req, res) {
  res.status(200).json({
    response_type: "ephemeral",
    text: "Hey, what up?"
  });
}).post('/test', function (req, res) {
  res.status(200).json({
    response_type: "ephemeral",
    text: "Hey, what up?"
  });
});

exports.routes = routes;