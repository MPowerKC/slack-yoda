import express from 'express';

let routes = express.Router();

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
    console.log(JSON.stringify(req.headers, null, 2))
    console.log(JSON.stringify(req.body, null, 2))
    let resources = "https://developer.mozilla.org/en-US/docs/Web/JavaScript\nhttps://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API"
    res.status(200).json({
      response_type: "ephemeral",
      text: `Hey <@${req.body.user_id}>, check out these resources related to \`${req.body.text}\`\n${resources}`
    });
  });

export {
  routes
}
