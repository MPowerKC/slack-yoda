import express from 'express';
import { getResources } from '../impl/resource';

export default
  express.Router()
    .get('/', getResources);
