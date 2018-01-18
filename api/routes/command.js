import express from 'express';
import { getResource } from '../impl/command';

export default
  express.Router()
    .post('/resource', getResource);
