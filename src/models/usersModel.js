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
    required: false,
    type: String,
    maxlength: [ 25, 'length limit' ]
  },
  phonenumber: {
    required: false,
    type: String,
    maxlength: [ 25, 'length limit' ]
  },
  address: {
    required: false,
    type: String,
  },
  hobbies: {
    required: false,
    type: String,
    maxlength: [ 150, 'length limit' ]
  },
  username: {
    type: String,
    unique: true,
    required: true,
    maxlength: [ 25, 'length limit' ]
  },
  password: {
    type: String,
    required: false,
  }
});

export default mongoose.model('User', schema);
