import { connect } from 'react-redux';
import CreateUsers from '../components/CreateUsers';
import {
  createUsers,
} from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    createUsers: function (users) {
      dispatch(createUsers(users));
    }
  };
}

export default connect(null,mapDispatchToProps)(CreateUsers);
