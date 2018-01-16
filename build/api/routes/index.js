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
  console.log(JSON.stringify(req.headers, null, 2));
  console.log(JSON.stringify(req.body, null, 2));
  var resources = "https://developer.mozilla.org/en-US/docs/Web/JavaScript\nhttps://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API";
  res.status(200).json({
    response_type: "ephemeral",
    text: 'Hey <@' + req.body.user_id + '>, check out these resources related to `' + req.body.text + '`\n' + resources
  });
});

exports.routes = routes;