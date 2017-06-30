/*
  Note: With containers, I continue to use redux and employ the connect
  method. Next.js is not needed here. The next redux wrapper will come in
  later, on the physical pages we want to render.
*/

import { connect } from 'react-redux';
import CreateMessages from '../components/CreateMessages';
import {
  createMessages,
  getUsers,
  loadUsers
} from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    createMessages: function (message) {
      dispatch(createMessages(message));
    },
    getUsers: id => {
      const action = getUsers(id);
      dispatch(action);
    },
    loadUsers: () => {
      const action = loadUsers();
      dispatch(action);
    }
  };
}

export default connect(null,mapDispatchToProps)(CreateMessages);
