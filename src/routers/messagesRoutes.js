import express from 'express';
import {list, show, create, update, remove} from '../controllers/MessagesController';

const router = express.Router();

router.get('/api/messages', list);
router.get('/api/messages/:id', show);
router.delete('/api/messages/:id', remove);
router.post('/api/messages', create);
router.put('/api/messages/:id', update);

export default router;
