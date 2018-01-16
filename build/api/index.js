'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _routes = require('./routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 5000;

(0, _express2.default)().use(_bodyParser2.default.urlencoded({ extended: false })).use(_bodyParser2.default.json()).use('/', _routes.routes).listen(PORT, function () {
  return console.log('Server listening on port ' + PORT + '...');
});