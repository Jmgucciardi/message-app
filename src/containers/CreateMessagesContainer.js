import { connect } from 'react-redux';
import CreateMessages from '../components/CreateMessages';
import {
  createMessages,
} from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    createMessages: function (message) {
      dispatch(createMessages(message));
    }
  };
}

export default connect(null,mapDispatchToProps)(CreateMessages);
