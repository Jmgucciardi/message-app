/*
  I like my routing pages to look clean, rather than design all my functions here
  I instead choose ot import those function from the controllers then call those
  functions on the route.
*/

import express from 'express';
import {list, show, create, update, remove} from '../controllers/usersController';

const router = express.Router();

router.get('/api/users', list);
router.get('/api/users/:id', show);
router.delete('/api/users/:id', remove);
router.post('/api/users', create);
router.put('/api/users/:id', update);

export default router;
