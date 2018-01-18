'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.exit = undefined;

var _colors = require('colors');

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var exit = function exit() {
  var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var exitCode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var msg = message || 'Server exiting with code ' + exitCode;

  if (exitCode === 0) console.log(msg);else console.error(_colors2.default.red(msg));

  process.exit(exitCode);
};

exports.exit = exit;