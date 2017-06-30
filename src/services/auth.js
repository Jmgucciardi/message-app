import User from '../models/usersModel';
import {
  Strategy as JwtStrategy,
  ExtractJwt
} from 'passport-jwt';


const jwtOptions = {

  secretOrKey: process.env.SECRET,

  jwtFromRequest: ExtractJwt.fromHeader('authorization')
};


export default new JwtStrategy(jwtOptions, function (payload, done) {
  User.findById(payload.userId, function (err, user) {
    if (err) { return done(err, false); }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});
