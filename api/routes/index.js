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
  .post('/test', (req, res) => {
    let results = resources.reduce((lines, resource, index) => {
      lines.push(`${index + 1}: ${resource.description}`);
      lines.push(resource.link);
      lines.push('');
      return lines;
    }, []);

    res.status(200).json({
      response_type: "ephemeral",
      text: `Hey <@${req.body.user_id}>, check out these resources related to \`${req.body.text}\`\n\n${results.join('\n')}`
    });
  });

export {
  routes
}
