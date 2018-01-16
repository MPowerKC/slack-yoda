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
    res.status(200).json({
      response_type: "ephemeral",
      text: "Hey, what up?"
    });
  });

export {
  routes
}
