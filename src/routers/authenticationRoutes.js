import express from 'express';
const router = express.Router();
import { signIn } from '../controllers/AuthController';
import passport from 'passport';
import '../services/passport';


const signinStrategy = passport.authenticate('signinStrategy', { session: false });


router.post('/api/signin', signinStrategy, signIn);

export default router;
