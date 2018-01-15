import express from 'express';
import path from 'path';
import { routes } from './routes';
const PORT = process.env.PORT || 5000;

express()
  .use('/', routes)
  .listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
