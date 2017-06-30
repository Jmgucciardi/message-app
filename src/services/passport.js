import passport from 'passport';
import signinStrategy from './signin';
import authStrategy from './auth';

passport.use('signinStrategy', signinStrategy);
passport.use('authStrategy', authStrategy);
