'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _CreateMessages = require('../components/CreateMessages');

var _CreateMessages2 = _interopRequireDefault(_CreateMessages);

var _actions = require('../actions');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function mapDispatchToProps(dispatch) {
  return {
    createMessages: function createMessages(message) {
      dispatch((0, _actions.createMessages)(message));
    },
    getUsers: function getUsers(id) {
      var action = (0, _actions.getUsers)(id);
      dispatch(action);
    }
  };
}

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(_CreateMessages2.default);