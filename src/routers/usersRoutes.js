import express from 'express';
import {list, show, create, update, remove} from '../controllers/usersController';

const router = express.Router();

router.get('/api/users', list);
router.get('/api/users/:id', show);
router.delete('/api/users/:id', remove);
router.post('/api/users', create);
router.put('/api/users/:id', update);

export default router;
