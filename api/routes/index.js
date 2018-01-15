import express from 'express';

let routes = express.Router();

routes
  .get('/', (req, res) => {
    res.status(200).json({message: "connected"});
  }).get('/test', (req, res) => {
    res.status(200).json({message: "test"});
  });

export {
  routes
}
