import { connect } from 'react-redux';
import GetUsers from '../components/GetUsers';
import {
  getUsers,
  deleteUsers,
  loadUsers
 } from '../actions';

function mapStateToProps(state) {
  return {
    users: state.users
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUsers: id => {
      const action = getUsers(id);
      dispatch(action);
    },
    deleteUsers: id => {
      const action = deleteUsers(id);
      dispatch(action);
    },
    loadUsers: () => {
      const action = loadUsers();
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GetUsers);
