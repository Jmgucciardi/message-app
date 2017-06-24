import { connect } from 'react-redux';
import CreateMessages from '../components/CreateMessages';
import {
  createMessages,
  getUsers
} from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    createMessages: function (message) {
      dispatch(createMessages(message));
    },
    getUsers: id => {
      const action = getUsers(id);
      dispatch(action);
    }
  };
}

export default connect(null,mapDispatchToProps)(CreateMessages);
