'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _routes = require('./routes');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = process.env.PORT || 5000;

// Validate environment
if (!process.env.DATABASE_URL) (0, _utils.exit)('Fatal error: DATABASE_URL env var not set. Shutting down.', 1);

// Configure and start server
(0, _express2.default)().use(_bodyParser2.default.urlencoded({ extended: false })).use(_bodyParser2.default.json()).use('/api/command', _routes.command).use('/api/resources', _routes.resource).use('/api/user', _routes.user).listen(PORT, function () {
  return console.log('Server listening on port ' + PORT + '...');
});