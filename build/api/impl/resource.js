'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getResources = undefined;

var _pg = require('pg');

var getResources = function getResources(req, res) {
  var pool = new _pg.Pool({ connectionString: process.env.DATABASE_URL, ssl: true });
  pool.query('SELECT * FROM resource', function (err, data) {
    if (err) res.status(500).send(err);else res.send(data.rows);

    pool.end();
  });
};

exports.getResources = getResources;