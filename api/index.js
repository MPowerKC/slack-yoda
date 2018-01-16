import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import { routes } from './routes';
const PORT = process.env.PORT || 5000;

express()
  .use(bodyParser.urlencoded({extended: false}))
  .use(bodyParser.json())
  .use('/', routes)
  .listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
