import bcrypt from 'bcrypt-nodejs';
import User from '../models/usersModel';
import LocalStrategy from 'passport-local';

export default new LocalStrategy(function (username, password, done) {
  console.log('Seaching for userName',username);
  User.findOne({ username }).exec()
  .then(user => {

    if (!user) {
      console.log('Username not listed',username);
      return done(null, false);
    }

    bcrypt.compare(password, user.password, function (err, isMatch) {

      if (err) {
        return done(err, false);
      }


      if (!isMatch) {
        return done(null, false);
      }
      console.log('Credentials confirmed',username);

      return done(null, user);
    });
  })
  .catch(err => done(err, false));
});
