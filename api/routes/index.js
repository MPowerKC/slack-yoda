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
  })
  .post('/user/event', (req, res) => {
    let payload = JSON.parse(req.body.payload);
    console.log(JSON.stringify(payload, null, 2));

    res.status(200).json({
      response_type: 'ephemeral',
      replace_original: false,
      text: `I :heart: that one too.`
    });
  });

export {
  routes
}

/*
// user event payload from slack
{
  "type": "interactive_message",
  "actions": [
    {
      "name": "like",
      "type": "button",
      "value": "like|resource|2"
    }
  ],
  "callback_id": "resource-like",
  "team": {
    "id": "T8SM8CS9X",
    "domain": "kc-googlescholar"
  },
  "channel": {
    "id": "C8U3R2214",
    "name": "demo"
  },
  "user": {
    "id": "U8TBFRSJZ",
    "name": "mpowerkc"
  },
  "action_ts": "1516092460.952064",
  "message_ts": "1516092444.000113",
  "attachment_id": "1",
  "token": "wFQ75QDy9KLkjWXwgbxdZUNY",
  "is_app_unfurl": false,
  "response_url": "https://hooks.slack.com/actions/T8SM8CS9X/300248649126/c2jIykS5JXt5hw9Bdx31MzST",
  "trigger_id": "300453576183.298722434337.206439d63325b48c547f99f0c7aa1e29"
}
*/
