"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.routes = undefined;

var _express = require("express");

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var routes = _express2.default.Router();

var resources = [{
  description: "JavaScript docs",
  link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
}, {
  description: "Service api worker docs",
  link: "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API"
}];

routes.get('/', function (req, res) {
  res.status(200).json({ message: "connected" });
}).get('/test', function (req, res) {
  res.status(200).json({
    response_type: "ephemeral",
    text: "Hey, what up?"
  });
}).post('/test', function (req, res) {
  var results = resources.reduce(function (lines, resource, index) {
    lines.push(index + 1 + ": " + resource.description);
    lines.push(resource.link);
    lines.push('');
    return lines;
  }, []);

  res.status(200).json({
    response_type: "ephemeral",
    text: "Hey <@" + req.body.user_id + ">, check out these resources related to `" + req.body.text + "`\n\n" + results.join('\n')
  });
});

exports.routes = routes;