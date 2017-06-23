import { connect } from 'react-redux';
import GetMessages from '../components/GetMessages';
import {
  getMessages,
  deleteMessages,
  loadMessages
 } from '../actions';

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMessages: id => {
      const action = getMessages(id);
      dispatch(action);
    },
    deleteMessages: id => {
      const action = deleteMessages(id);
      dispatch(action);
    },
    loadMessages: () => {
      const action = loadMessages();
      dispatch(action);
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GetMessages);
