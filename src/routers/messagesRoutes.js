/*
  I like my routing pages to look clean, rather than design all my functions here
  I instead choose ot import those function from the controllers then call those
  functions on the route.
*/

import express from 'express';
import {list, show, create, update, remove} from '../controllers/MessagesController';

const router = express.Router();

router.get('/api/messages', list);
router.get('/api/messages/:id', show);
router.delete('/api/messages/:id', remove);
router.post('/api/messages', create);
router.put('/api/messages/:id', update);

export default router;
