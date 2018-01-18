import { Pool, Client } from 'pg';

const resources = [{
    description: "JavaScript docs",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  }, {
    description: "Service api worker docs",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API"
  }
];

const getResource = (req, res) => {
  let pool = new Pool({ connectionString: process.env.DATABASE_URL, ssl: true });
  pool.query('SELECT * FROM tag', (err, res) => {
    if (err)
      console.log(`Error! ${JSON.stringify(err, null, 2)}`);
    else {
      console.log(`Got data! ${res.rows.length} row(s)`);
      console.log(JSON.stringify(res.rows, null, 2));
    }

    pool.end();
  })

  let results = resources.reduce((lines, resource, index) => {
    lines.push(`${index + 1}: ${resource.description}`);
    lines.push(resource.link);
    lines.push('');
    return lines;
  }, []);

  let actions = resources.map((resource, index) => ({
    name: 'like',
    text: `:heart: ${index + 1}: ${resource.description}`,
    type: 'button',
    value: `like|resource|${index + 1}`
  }));

  res.status(200).json({
    response_type: "ephemeral",
    text: `Check out these resources, you should <@${req.body.user_id}>. Related to \`${req.body.text}\`, they are.\n\n${results.join('\n')}`,
    attachments: [{
      text: "Find anything you liked?",
      fallback: "Find anything you liked?",
      callback_id: "resource-like",
      color: "#33b50b",
      attachment_type: "default",
      actions
    }]
  });
}

export {
  getResource
}
