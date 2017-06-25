'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.loadUsers = loadUsers;
exports.loadMessages = loadMessages;
exports.createMessages = createMessages;
exports.createUsers = createUsers;
exports.getMessages = getMessages;
exports.getUsers = getUsers;
exports.deleteMessages = deleteMessages;
exports.deleteUsers = deleteUsers;

require('whatwg-fetch');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function loadMessageError(message) {
  return {
    type: 'MESSAGE_LOAD_ERROR',
    message: message
  };
}

function loadUserError(message) {
  return {
    type: 'USER_LOAD_ERROR',
    message: message
  };
}

function loadUsers() {
  return function (dispatch) {
    fetch("/api/users").then(function (response) {
      return response.json();
    }).then(function (vehicles) {
      dispatch(usersLoaded(vehicles));
    }).catch(function (err) {
      dispatch(loadUserError(err));
    });
  };
}

function loadMessages() {
  return function (dispatch) {
    fetch("/api/messages").then(function (response) {
      return response.json();
    }).then(function (messages) {
      dispatch(messagesLoaded(messages));
    }).catch(function (err) {
      dispatch(loadMessageError(err));
    });
  };
}

function usersLoaded(users) {
  return {
    type: 'USERS_LOADED',
    value: users
  };
}

function messagesLoaded(message) {
  return {
    type: 'MESSAGES_LOADED',
    value: message
  };
}

function createMessageError(message) {
  return {
    type: 'MESSAGE_CREATE_ERROR',
    message: message
  };
}

function createUserError(message) {
  return {
    type: 'USER_CREATE_ERROR',
    message: message
  };
}

function createMessages(m) {
  return function (dispatch) {
    fetch("/api/messages", {
      method: 'POST',
      headers: { 'Content-Type': "application/json" },
      body: (0, _stringify2.default)(m)
    }).then(function () {
      return dispatch(loadMessages());
    }).catch(function (err) {
      dispatch(createMessageError(err));
    });
  };
}

function createUsers(u) {
  return function (dispatch) {
    fetch("/api/users", {
      method: 'POST',
      headers: { 'Content-Type': "application/json" },
      body: (0, _stringify2.default)(u)
    }).then(function () {
      return dispatch(loadUsers());
    }).catch(function (err) {
      dispatch(createUserError(err));
    });
  };
}

function getMessages(id) {
  return function (dispatch) {
    fetch('api/messages/' + id).then(function (res) {
      return res.json();
    }).then(function (messages) {
      dispatch(getMessagesDone(messages));
    });
  };
}

function getUsers(id) {
  return function (dispatch) {
    fetch('api/users/' + id).then(function (res) {
      return res.json();
    }).then(function (users) {
      dispatch(getUsersDone(users));
    });
  };
}

function getUsersDone(vehicles) {
  return {
    type: 'GET_USERS_DONE',
    value: vehicles
  };
}

function getMessagesDone(vehicles) {
  return {
    type: 'GET_MESSAGES_DONE',
    value: vehicles
  };
}

function deleteMessageError(message) {
  return {
    type: 'MESSAGE_DELETE_ERROR',
    message: message
  };
}

function deleteUserError(message) {
  return {
    type: 'USER_DELETE_ERROR',
    message: message
  };
}

function deleteMessages(id) {
  return function (dispatch) {
    fetch('api/messages/' + id, {
      method: 'DELETE',
      headers: { 'Content-Type': "application/json" }
    }).then(function () {
      return dispatch(messageDeleted());
    }).then(function () {
      return dispatch(loadMessages());
    }).catch(function (err) {
      dispatch(deleteMessageError(err));
    });
  };
}

function deleteUsers(id) {
  return function (dispatch) {
    fetch('api/users/' + id, {
      method: 'DELETE',
      headers: { 'Content-Type': "application/json" }
    }).then(function () {
      return dispatch(userDeleted());
    }).then(function () {
      return dispatch(loadUsers());
    }).catch(function (err) {
      dispatch(deleteUserError(err));
    });
  };
}

function messageDeleted(message) {
  return {
    type: 'MESSAGE_DELETED',
    value: message
  };
}

function userDeleted(user) {
  return {
    type: 'USER_DELETED',
    value: user
  };
}