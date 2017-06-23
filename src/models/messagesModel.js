import mongoose from 'mongoose';

const schema = new mongoose.Schema({
  message: {
    required: true,
    type: String
  },

});

export default mongoose.model('Message', schema);
