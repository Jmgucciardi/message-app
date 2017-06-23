'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = require('redux');

function messages() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  if (action.type === 'MESSAGES_LOADED') {
    return action.value;
  }
  return state;
}

var rootReducer = (0, _redux.combineReducers)({
  messages: messages
});
exports.default = rootReducer;