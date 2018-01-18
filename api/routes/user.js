import express from 'express';
import { processEvent } from '../impl/user';

export default
  express.Router()
    .post('/event', processEvent);
