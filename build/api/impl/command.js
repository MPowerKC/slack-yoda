"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getResource = undefined;

var _pg = require("pg");

var resources = [{
  description: "JavaScript docs",
  link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
}, {
  description: "Service api worker docs",
  link: "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API"
}];

var getResource = function getResource(req, res) {
  var pool = new _pg.Pool({ connectionString: process.env.DATABASE_URL, ssl: true });
  pool.query('SELECT * FROM tag', function (err, res) {
    if (err) console.log("Error! " + JSON.stringify(err, null, 2));else {
      console.log("Got data! " + res.rows.length + " row(s)");
      console.log(JSON.stringify(res.rows, null, 2));
    }

    pool.end();
  });

  var results = resources.reduce(function (lines, resource, index) {
    lines.push(index + 1 + ": " + resource.description);
    lines.push(resource.link);
    lines.push('');
    return lines;
  }, []);

  var actions = resources.map(function (resource, index) {
    return {
      name: 'like',
      text: ":heart: " + (index + 1) + ": " + resource.description,
      type: 'button',
      value: "like|resource|" + (index + 1)
    };
  });

  res.status(200).json({
    response_type: "ephemeral",
    text: "Check out these resources, you should <@" + req.body.user_id + ">. Related to `" + req.body.text + "`, they are.\n\n" + results.join('\n'),
    attachments: [{
      text: "Find anything you liked?",
      fallback: "Find anything you liked?",
      callback_id: "resource-like",
      color: "#33b50b",
      attachment_type: "default",
      actions: actions
    }]
  });
};

exports.getResource = getResource;