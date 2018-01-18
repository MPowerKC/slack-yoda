import express from 'express';
import bodyParser from 'body-parser';
import { command, user } from './routes';
import { exit } from './utils';

const PORT = process.env.PORT || 5000;

// Validate environment
if (!process.env.DATABASE_URL) exit('Fatal error: DATABASE_URL env var not set. Shutting down.', 1);

// Configure and start server
express()
  .use(bodyParser.urlencoded({extended: false}))
  .use(bodyParser.json())
  .use('/api/command', command)
  .use('/api/user', user)
  .listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
