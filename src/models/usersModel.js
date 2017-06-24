import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  firstname: {
    required: true,
    type: String,
    maxlength: [ 25 , 'length limit' ]
  },
  lastname: {
    required: true,
    type: String,
    maxlength: [ 25, 'length limit' ]
  },
  avatar: {
    required: true,
    type: String,
    maxlength: [ 25, 'length limit' ]
  },
  phonenumber: {
    required: true,
    type: String,
    maxlength: [ 25, 'length limit' ]
  },
  address: {
    required: true,
    type: String,
  },
  hobbies: {
    required: true,
    type: String,
    maxlength: [ 150, 'length limit' ]
  },
  username: {
    type: String,
    unique: true,
    required: true,
    maxlength: [ 25, 'length limit' ]
  }
});

export default mongoose.model('User', schema);
