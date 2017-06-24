import { combineReducers } from 'redux';

function messages(state = [], action) {
  if (action.type === 'MESSAGES_LOADED') {
    return action.value;
  }
  return state;
}
function users(state = [], action) {
  if (action.type === 'USERS_LOADED') {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  messages,
  users
});
export default rootReducer;
