import express from 'express';

let routes = express.Router();

let resources = [{
    description: "JavaScript docs",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  }, {
    description: "Service api worker docs",
    link: "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API"
  }
];

routes
  .get('/', (req, res) => {
    res.status(200).json({message: "connected"});
  })
  .get('/test', (req, res) => {
    res.status(200).json({
      response_type: "ephemeral",
      text: "Hey, what up?"
    });
  })
  .post('/command/resource', (req, res) => {
    let results = resources.reduce((lines, resource, index) => {
      lines.push(`${index + 1}: ${resource.description}`);
      lines.push(resource.link);
      lines.push('');
      return lines;
    }, []);

    res.status(200).json({
      response_type: "ephemeral",
      text: `Check out these resources, you should <@${req.body.user_id}>. Related to \`${req.body.text}\`, they are.\n\n${results.join('\n')}`
    });
  })
  .post('/user/event', (req, res) => {
    console.log(JSON.stringify(req.body, null, 2));

    res.status(200).json({status: 'ok'});
  });

export {
  routes
}
