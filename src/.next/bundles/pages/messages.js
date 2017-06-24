
          window.__NEXT_REGISTER_PAGE('/messages', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 549:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(557);

var _stringify2 = _interopRequireDefault(_stringify);

exports.loadUsers = loadUsers;
exports.loadMessages = loadMessages;
exports.createMessages = createMessages;
exports.createUsers = createUsers;
exports.getMessages = getMessages;
exports.getUsers = getUsers;
exports.deleteMessages = deleteMessages;
exports.deleteUsers = deleteUsers;

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jonmgucciardi/Desktop/message-app/src/actions/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jonmgucciardi/Desktop/message-app/src/actions/index.js"); } } })();

/***/ }),

/***/ 556:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/jonmgucciardi/Desktop/message-app/src/pages/messages.js?entry';
// import Link from 'next/link';

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _nextReduxWrapper = __webpack_require__(576);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _CreateMessagesContainer = __webpack_require__(579);

var _CreateMessagesContainer2 = _interopRequireDefault(_CreateMessagesContainer);

var _GetMessagesContainer = __webpack_require__(580);

var _GetMessagesContainer2 = _interopRequireDefault(_GetMessagesContainer);

var _store = __webpack_require__(582);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function messagesPage() {
  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, _react2.default.createElement(_CreateMessagesContainer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }), _react2.default.createElement(_GetMessagesContainer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }));
}

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, null)(messagesPage);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jonmgucciardi/Desktop/message-app/src/pages/messages.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jonmgucciardi/Desktop/message-app/src/pages/messages.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(86)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/messages")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 577:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = __webpack_require__(94);

var _assign2 = _interopRequireDefault(_assign);

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/jonmgucciardi/Desktop/message-app/src/components/CreateMessages.js';

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _glamorous = __webpack_require__(547);

var _glamorous2 = _interopRequireDefault(_glamorous);

var _glamor = __webpack_require__(546);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var basicStyles = {
  textAlign: 'left',
  backgroundColor: 'white',
  color: 'cornflowerblue',
  border: '1px solid lightblue',
  borderRight: 'none',
  borderBottom: 'none',
  boxShadow: '5px 5px 0 0 lightblue, 10px 10px 0 0 lightyellow',
  transition: 'all 0.1s linear',
  margin: '3rem 0',
  padding: '1rem 0.5rem',
  position: 'absolute',
  bottom: 0
};

var TextContainer = {
  padding: '1px',
  border: '1px solid lightblue',
  boxShadow: '5px 5px 0 0 lightblue, 10px 10px 0 0 lightyellow',
  transition: 'boxShadow 0.3s, border 0.3s',
  width: '700px',
  height: '100px'
};

var ButtonSubmit = {
  position: 'absolute',
  bottom: '0%',
  right: '10%',
  left: '17%'
};

var Basic = _glamorous2.default.div(basicStyles);
var TextInput = _glamorous2.default.textArea(TextContainer);
var ButtonMessageSubmit = _glamorous2.default.button(ButtonSubmit);

var CreateMessages = function (_React$Component) {
  (0, _inherits3.default)(CreateMessages, _React$Component);

  function CreateMessages() {
    (0, _classCallCheck3.default)(this, CreateMessages);

    var _this = (0, _possibleConstructorReturn3.default)(this, (CreateMessages.__proto__ || (0, _getPrototypeOf2.default)(CreateMessages)).call(this));

    _this.state = {
      messages: {
        message: ''
      }
    };
    return _this;
  }

  (0, _createClass3.default)(CreateMessages, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement('form', { onSubmit: function onSubmit(e) {
          e.preventDefault();
          if (_this2.props.createMessages) {
            _this2.props.createMessages(_this2.state.messages);
          }
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 56
        }
      }, _react2.default.createElement(Basic, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, 'Guest:', _react2.default.createElement(TextInput, { onChange: function onChange(e) {
          var messages = { message: e.target.value };
          _this2.setState({
            messages: (0, _assign2.default)(_this2.state.messages, messages)
          });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }), _react2.default.createElement(ButtonMessageSubmit, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, 'Submit')))));
    }
  }]);
  return CreateMessages;
}(_react2.default.Component);

exports.default = CreateMessages;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jonmgucciardi/Desktop/message-app/src/components/CreateMessages.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jonmgucciardi/Desktop/message-app/src/components/CreateMessages.js"); } } })();

/***/ }),

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(38);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(41);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(40);

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = '/Users/jonmgucciardi/Desktop/message-app/src/components/GetMessages.js';

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _glamorous = __webpack_require__(547);

var _glamorous2 = _interopRequireDefault(_glamorous);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var TextContainer = {
  padding: '1px',
  border: '1px solid lightblue',
  boxShadow: '5px 5px 0 0 lightblue, 10px 10px 0 0 lightyellow',
  backgroundColor: 'white',
  transition: 'boxShadow 0.3s, border 0.3s',
  borderstyle: 'solid',
  overflowY: 'auto',
  oveflowWrap: 'breakWord',
  flex: 0.8,
  position: 'absolute',
  width: '825px',
  height: '350px',
  top: 10,
  right: '0%',
  left: '4%'
};

var UserDivStyles = {
  padding: '1px',
  border: '1px solid lightblue',
  boxShadow: '5px 5px 0 0 lightblue, 10px 10px 0 0 lightyellow',
  backgroundColor: 'white',
  transition: 'boxShadow 0.3s, border 0.3s',
  overfloWrap: 'breakWord',
  wordWrap: 'breakWord',
  hyphens: 'auto'

};

var TextStyles = _glamorous2.default.text(TextContainer);
var MessageDiv = _glamorous2.default.div(UserDivStyles);

var GetMessages = function (_React$Component) {
  (0, _inherits3.default)(GetMessages, _React$Component);

  function GetMessages() {
    (0, _classCallCheck3.default)(this, GetMessages);
    return (0, _possibleConstructorReturn3.default)(this, (GetMessages.__proto__ || (0, _getPrototypeOf2.default)(GetMessages)).apply(this, arguments));
  }

  (0, _createClass3.default)(GetMessages, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.match) {
        var id = this.props.match.params.id;
        this.props.getMessages(id);
        this.props.deleteMessages(id);
        this.props.loadMessages();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      this.props.loadMessages();
      var userDivs = '';
      userDivs = this.props.messages.map(function (d, i) {
        return _react2.default.createElement(MessageDiv, { key: i, __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 57
          }
        }, d.message));
      });
      return _react2.default.createElement(TextStyles, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, userDivs);
    }
  }]);
  return GetMessages;
}(_react2.default.Component);

exports.default = GetMessages;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jonmgucciardi/Desktop/message-app/src/components/GetMessages.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jonmgucciardi/Desktop/message-app/src/components/GetMessages.js"); } } })();

/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(542);

var _CreateMessages = __webpack_require__(577);

var _CreateMessages2 = _interopRequireDefault(_CreateMessages);

var _actions = __webpack_require__(549);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jonmgucciardi/Desktop/message-app/src/containers/CreateMessagesContainer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jonmgucciardi/Desktop/message-app/src/containers/CreateMessagesContainer.js"); } } })();

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(542);

var _GetMessages = __webpack_require__(578);

var _GetMessages2 = _interopRequireDefault(_GetMessages);

var _actions = __webpack_require__(549);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getMessages: function getMessages(id) {
      var action = (0, _actions.getMessages)(id);
      dispatch(action);
    },
    deleteMessages: function deleteMessages(id) {
      var action = (0, _actions.deleteMessages)(id);
      dispatch(action);
    },
    loadMessages: function loadMessages() {
      var action = (0, _actions.loadMessages)();
      dispatch(action);
    }
  };
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_GetMessages2.default);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jonmgucciardi/Desktop/message-app/src/containers/GetMessagesContainer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jonmgucciardi/Desktop/message-app/src/containers/GetMessagesContainer.js"); } } })();

/***/ }),

/***/ 581:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(540);

function messages() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  if (action.type === 'MESSAGES_LOADED') {
    return action.value;
  }
  return state;
}
function users() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  if (action.type === 'USERS_LOADED') {
    return action.value;
  }
  return state;
}

var rootReducer = (0, _redux.combineReducers)({
  messages: messages,
  users: users
});
exports.default = rootReducer;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jonmgucciardi/Desktop/message-app/src/reducers/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jonmgucciardi/Desktop/message-app/src/reducers/index.js"); } } })();

/***/ }),

/***/ 582:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;

var _reducers = __webpack_require__(581);

var _reducers2 = _interopRequireDefault(_reducers);

var _redux = __webpack_require__(540);

var _reduxThunk = __webpack_require__(593);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxDevtoolsExtension = __webpack_require__(592);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var initialState = {};

var initStore = exports.initStore = function initStore() {
  return (0, _redux.createStore)(_reducers2.default, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jonmgucciardi/Desktop/message-app/src/store.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jonmgucciardi/Desktop/message-app/src/store.js"); } } })();

/***/ }),

/***/ 600:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(556);


/***/ })

},[600]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9tZXNzYWdlcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FjdGlvbnMvaW5kZXguanM/MjBkNzM3MyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9tZXNzYWdlcy5qcz8yMGQ3MzczIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ3JlYXRlTWVzc2FnZXMuanM/MjBkNzM3MyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dldE1lc3NhZ2VzLmpzPzIwZDczNzMiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9DcmVhdGVNZXNzYWdlc0NvbnRhaW5lci5qcz8yMGQ3MzczIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvR2V0TWVzc2FnZXNDb250YWluZXIuanM/MjBkNzM3MyIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz8yMGQ3MzczIiwid2VicGFjazovLy8uL3N0b3JlLmpzPzIwZDczNzMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbG9hZE1lc3NhZ2VFcnJvcihtZXNzYWdlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ01FU1NBR0VfTE9BRF9FUlJPUicsXG4gICAgbWVzc2FnZVxuICB9O1xufVxuXG5mdW5jdGlvbiBsb2FkVXNlckVycm9yKG1lc3NhZ2UpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnVVNFUl9MT0FEX0VSUk9SJyxcbiAgICBtZXNzYWdlXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVXNlcnMoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBmZXRjaChcIi9hcGkvdXNlcnNcIilcbiAgICAudGhlbiggcmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KS50aGVuKHZlaGljbGVzID0+IHtcbiAgICAgIGRpc3BhdGNoKHVzZXJzTG9hZGVkKHZlaGljbGVzKSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGRpc3BhdGNoKGxvYWRVc2VyRXJyb3IoZXJyKSk7XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkTWVzc2FnZXMoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBmZXRjaChcIi9hcGkvbWVzc2FnZXNcIilcbiAgICAudGhlbiggcmVzcG9uc2UgPT4ge1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICB9KS50aGVuKG1lc3NhZ2VzID0+IHtcbiAgICAgIGRpc3BhdGNoKG1lc3NhZ2VzTG9hZGVkKG1lc3NhZ2VzKSk7XG4gICAgfSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGRpc3BhdGNoKGxvYWRNZXNzYWdlRXJyb3IoZXJyKSk7XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZXJzTG9hZGVkKHVzZXJzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1VTRVJTX0xPQURFRCcsXG4gICAgdmFsdWU6IHVzZXJzXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1lc3NhZ2VzTG9hZGVkKG1lc3NhZ2UpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnTUVTU0FHRVNfTE9BREVEJyxcbiAgICB2YWx1ZTogbWVzc2FnZVxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVNZXNzYWdlRXJyb3IobWVzc2FnZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdNRVNTQUdFX0NSRUFURV9FUlJPUicsXG4gICAgbWVzc2FnZVxuICB9O1xufVxuXG5mdW5jdGlvbiBjcmVhdGVVc2VyRXJyb3IobWVzc2FnZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdVU0VSX0NSRUFURV9FUlJPUicsXG4gICAgbWVzc2FnZVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTWVzc2FnZXMobSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgZmV0Y2goXCIvYXBpL21lc3NhZ2VzXCIsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiBcImFwcGxpY2F0aW9uL2pzb25cIn0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShtKVxuICAgIH0pLnRoZW4oKCkgPT4gZGlzcGF0Y2gobG9hZE1lc3NhZ2VzKCkpKVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgZGlzcGF0Y2goY3JlYXRlTWVzc2FnZUVycm9yKGVycikpO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVXNlcnModSkge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgZmV0Y2goXCIvYXBpL3VzZXJzXCIsIHtcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiBcImFwcGxpY2F0aW9uL2pzb25cIn0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1KVxuICAgIH0pLnRoZW4oKCkgPT4gZGlzcGF0Y2gobG9hZFVzZXJzKCkpKVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgZGlzcGF0Y2goY3JlYXRlVXNlckVycm9yKGVycikpO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWVzc2FnZXMoaWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGZldGNoKGBhcGkvbWVzc2FnZXMvJHtpZH1gKVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKG1lc3NhZ2VzID0+IHtcbiAgICAgIGRpc3BhdGNoKGdldE1lc3NhZ2VzRG9uZShtZXNzYWdlcykpO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlcnMoaWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGZldGNoKGBhcGkvdXNlcnMvJHtpZH1gKVxuICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgIC50aGVuKHVzZXJzID0+IHtcbiAgICAgIGRpc3BhdGNoKGdldFVzZXJzRG9uZSh1c2VycykpO1xuICAgIH0pO1xuICB9O1xufVxuXG5cbmZ1bmN0aW9uIGdldFVzZXJzRG9uZSh2ZWhpY2xlcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdHRVRfVVNFUlNfRE9ORScsXG4gICAgdmFsdWU6IHZlaGljbGVzXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldE1lc3NhZ2VzRG9uZSh2ZWhpY2xlcykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdHRVRfTUVTU0FHRVNfRE9ORScsXG4gICAgdmFsdWU6IHZlaGljbGVzXG4gIH07XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZU1lc3NhZ2VFcnJvcihtZXNzYWdlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ01FU1NBR0VfREVMRVRFX0VSUk9SJyxcbiAgICBtZXNzYWdlXG4gIH07XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVVzZXJFcnJvcihtZXNzYWdlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1VTRVJfREVMRVRFX0VSUk9SJyxcbiAgICBtZXNzYWdlXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVNZXNzYWdlcyhpZCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgZmV0Y2goYGFwaS9tZXNzYWdlcy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6IFwiYXBwbGljYXRpb24vanNvblwifSxcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKG1lc3NhZ2VEZWxldGVkKCkpKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKGxvYWRNZXNzYWdlcygpKSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGRpc3BhdGNoKGRlbGV0ZU1lc3NhZ2VFcnJvcihlcnIpKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVVzZXJzKGlkKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBmZXRjaChgYXBpL3VzZXJzLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogXCJhcHBsaWNhdGlvbi9qc29uXCJ9LFxuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2godXNlckRlbGV0ZWQoKSkpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2gobG9hZFVzZXJzKCkpKVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgZGlzcGF0Y2goZGVsZXRlVXNlckVycm9yKGVycikpO1xuICAgIH0pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBtZXNzYWdlRGVsZXRlZChtZXNzYWdlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ01FU1NBR0VfREVMRVRFRCcsXG4gICAgdmFsdWU6IG1lc3NhZ2VcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlckRlbGV0ZWQodXNlcikge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdVU0VSX0RFTEVURUQnLFxuICAgIHZhbHVlOiB1c2VyXG4gIH07XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hY3Rpb25zL2luZGV4LmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgQ3JlYXRlTWVzc2FnZXNDb250YWluZXIgZnJvbSAnLi4vY29udGFpbmVycy9DcmVhdGVNZXNzYWdlc0NvbnRhaW5lcic7XG5pbXBvcnQgR2V0TWVzc2FnZXNDb250YWluZXIgZnJvbSAnLi4vY29udGFpbmVycy9HZXRNZXNzYWdlc0NvbnRhaW5lcic7XG5cbmltcG9ydCB7aW5pdFN0b3JlfSBmcm9tICcuLi9zdG9yZSc7XG5cblxuXG5mdW5jdGlvbiBtZXNzYWdlc1BhZ2UoKSB7XG4gIHJldHVybiAoXG5cbiAgICA8ZGl2PlxuICAgICAgPENyZWF0ZU1lc3NhZ2VzQ29udGFpbmVyIC8+XG4gICAgICA8IEdldE1lc3NhZ2VzQ29udGFpbmVyLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSwgbnVsbCwgbnVsbCkobWVzc2FnZXNQYWdlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL21lc3NhZ2VzLmpzP2VudHJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcbmltcG9ydCB7IGNzcyB9IGZyb20gJ2dsYW1vcic7XG5cbmNvbnN0IGJhc2ljU3R5bGVzID0ge1xuICB0ZXh0QWxpZ246ICdsZWZ0JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICBjb2xvcjogJ2Nvcm5mbG93ZXJibHVlJyxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkIGxpZ2h0Ymx1ZScsXG4gIGJvcmRlclJpZ2h0OiAnbm9uZScsXG4gIGJvcmRlckJvdHRvbTogJ25vbmUnLFxuICBib3hTaGFkb3c6ICc1cHggNXB4IDAgMCBsaWdodGJsdWUsIDEwcHggMTBweCAwIDAgbGlnaHR5ZWxsb3cnLFxuICB0cmFuc2l0aW9uOiAnYWxsIDAuMXMgbGluZWFyJyxcbiAgbWFyZ2luOiBgM3JlbSAwYCxcbiAgcGFkZGluZzogYDFyZW0gMC41cmVtYCxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIGJvdHRvbTogMFxufTtcblxuY29uc3QgVGV4dENvbnRhaW5lciA9IHtcbiAgcGFkZGluZzogJzFweCcsXG4gIGJvcmRlcjogJzFweCBzb2xpZCBsaWdodGJsdWUnLFxuICBib3hTaGFkb3c6ICc1cHggNXB4IDAgMCBsaWdodGJsdWUsIDEwcHggMTBweCAwIDAgbGlnaHR5ZWxsb3cnLFxuICB0cmFuc2l0aW9uOiAnYm94U2hhZG93IDAuM3MsIGJvcmRlciAwLjNzJyxcbiAgd2lkdGg6ICc3MDBweCcsXG4gIGhlaWdodDogJzEwMHB4Jyxcbn07XG5cbmNvbnN0IEJ1dHRvblN1Ym1pdCA9IHtcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIGJvdHRvbTogJzAlJyxcbiAgcmlnaHQ6ICcxMCUnLFxuICBsZWZ0OiAnMTclJyxcbn07XG5cbmNvbnN0IEJhc2ljID0gZ2xhbW9yb3VzLmRpdihiYXNpY1N0eWxlcyk7XG5jb25zdCBUZXh0SW5wdXQgPSBnbGFtb3JvdXMudGV4dEFyZWEoVGV4dENvbnRhaW5lcik7XG5jb25zdCBCdXR0b25NZXNzYWdlU3VibWl0ID0gZ2xhbW9yb3VzLmJ1dHRvbihCdXR0b25TdWJtaXQpO1xuXG5jbGFzcyBDcmVhdGVNZXNzYWdlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgIG1lc3NhZ2U6ICcnXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuXG4gIHJlbmRlcigpIHtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyBlID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgaWYgKHRoaXMucHJvcHMuY3JlYXRlTWVzc2FnZXMpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3JlYXRlTWVzc2FnZXModGhpcy5zdGF0ZS5tZXNzYWdlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9fT5cbiAgICAgICAgICA8QmFzaWM+XG4gICAgICAgICAgICBHdWVzdDpcbiAgICAgICAgICAgICA8VGV4dElucHV0IG9uQ2hhbmdlPXsgZSA9PiB7XG4gICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlcyA9IHttZXNzYWdlOiBlLnRhcmdldC52YWx1ZX07XG4gICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgbWVzc2FnZXM6IE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZS5tZXNzYWdlcyxtZXNzYWdlcylcbiAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICAgICA8QnV0dG9uTWVzc2FnZVN1Ym1pdD5cbiAgICAgICAgICAgICBTdWJtaXRcbiAgICAgICAgICAgICA8L0J1dHRvbk1lc3NhZ2VTdWJtaXQ+XG4gICAgICAgICAgPC9CYXNpYz5cblxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZU1lc3NhZ2VzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9DcmVhdGVNZXNzYWdlcy5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cblxuY29uc3QgVGV4dENvbnRhaW5lciA9IHtcbiAgcGFkZGluZzogJzFweCcsXG4gIGJvcmRlcjogJzFweCBzb2xpZCBsaWdodGJsdWUnLFxuICBib3hTaGFkb3c6ICc1cHggNXB4IDAgMCBsaWdodGJsdWUsIDEwcHggMTBweCAwIDAgbGlnaHR5ZWxsb3cnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gIHRyYW5zaXRpb246ICdib3hTaGFkb3cgMC4zcywgYm9yZGVyIDAuM3MnLFxuICBib3JkZXJzdHlsZTogJ3NvbGlkJyxcbiAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gIG92ZWZsb3dXcmFwOiAnYnJlYWtXb3JkJyxcbiAgZmxleDogMC44LFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgd2lkdGg6ICc4MjVweCcsXG4gIGhlaWdodDogJzM1MHB4JyxcbiAgdG9wOiAxMCxcbiAgcmlnaHQ6ICcwJScsXG4gIGxlZnQ6ICc0JScsXG59O1xuXG5jb25zdCBVc2VyRGl2U3R5bGVzID0ge1xuICBwYWRkaW5nOiAnMXB4JyxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkIGxpZ2h0Ymx1ZScsXG4gIGJveFNoYWRvdzogJzVweCA1cHggMCAwIGxpZ2h0Ymx1ZSwgMTBweCAxMHB4IDAgMCBsaWdodHllbGxvdycsXG4gIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgdHJhbnNpdGlvbjogJ2JveFNoYWRvdyAwLjNzLCBib3JkZXIgMC4zcycsXG4gIG92ZXJmbG9XcmFwOiAnYnJlYWtXb3JkJyxcbiAgd29yZFdyYXA6ICdicmVha1dvcmQnLFxuICBoeXBoZW5zOiAnYXV0bydcblxuXG59O1xuXG5jb25zdCBUZXh0U3R5bGVzID0gZ2xhbW9yb3VzLnRleHQoVGV4dENvbnRhaW5lcik7XG5jb25zdCBNZXNzYWdlRGl2ID0gZ2xhbW9yb3VzLmRpdihVc2VyRGl2U3R5bGVzKTtcblxuXG5jbGFzcyBHZXRNZXNzYWdlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWF0Y2gpIHtcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQ7XG4gICAgICB0aGlzLnByb3BzLmdldE1lc3NhZ2VzKGlkKTtcbiAgICAgIHRoaXMucHJvcHMuZGVsZXRlTWVzc2FnZXMoaWQpO1xuICAgICAgdGhpcy5wcm9wcy5sb2FkTWVzc2FnZXMoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5wcm9wcy5sb2FkTWVzc2FnZXMoKVxuICAgIGxldCB1c2VyRGl2cyA9ICcnO1xuICAgIHVzZXJEaXZzID0gdGhpcy5wcm9wcy5tZXNzYWdlcy5tYXAoKGQsaSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE1lc3NhZ2VEaXYga2V5ID0ge2l9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICB7ZC5tZXNzYWdlfVxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9NZXNzYWdlRGl2PlxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuXG4gIDxUZXh0U3R5bGVzPlxuICAgIHt1c2VyRGl2c31cbiAgPC9UZXh0U3R5bGVzPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2V0TWVzc2FnZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0dldE1lc3NhZ2VzLmpzIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBDcmVhdGVNZXNzYWdlcyBmcm9tICcuLi9jb21wb25lbnRzL0NyZWF0ZU1lc3NhZ2VzJztcbmltcG9ydCB7XG4gIGNyZWF0ZU1lc3NhZ2VzLFxuICBnZXRVc2Vyc1xufSBmcm9tICcuLi9hY3Rpb25zJztcblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiB7XG4gICAgY3JlYXRlTWVzc2FnZXM6IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICBkaXNwYXRjaChjcmVhdGVNZXNzYWdlcyhtZXNzYWdlKSk7XG4gICAgfSxcbiAgICBnZXRVc2VyczogaWQgPT4ge1xuICAgICAgY29uc3QgYWN0aW9uID0gZ2V0VXNlcnMoaWQpO1xuICAgICAgZGlzcGF0Y2goYWN0aW9uKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobnVsbCxtYXBEaXNwYXRjaFRvUHJvcHMpKENyZWF0ZU1lc3NhZ2VzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnRhaW5lcnMvQ3JlYXRlTWVzc2FnZXNDb250YWluZXIuanMiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IEdldE1lc3NhZ2VzIGZyb20gJy4uL2NvbXBvbmVudHMvR2V0TWVzc2FnZXMnO1xuaW1wb3J0IHtcbiAgZ2V0TWVzc2FnZXMsXG4gIGRlbGV0ZU1lc3NhZ2VzLFxuICBsb2FkTWVzc2FnZXNcbiB9IGZyb20gJy4uL2FjdGlvbnMnO1xuXG5mdW5jdGlvbiBtYXBTdGF0ZVRvUHJvcHMoc3RhdGUpIHtcbiAgcmV0dXJuIHtcbiAgICBtZXNzYWdlczogc3RhdGUubWVzc2FnZXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwRGlzcGF0Y2hUb1Byb3BzKGRpc3BhdGNoKSB7XG4gIHJldHVybiB7XG4gICAgZ2V0TWVzc2FnZXM6IGlkID0+IHtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IGdldE1lc3NhZ2VzKGlkKTtcbiAgICAgIGRpc3BhdGNoKGFjdGlvbik7XG4gICAgfSxcbiAgICBkZWxldGVNZXNzYWdlczogaWQgPT4ge1xuICAgICAgY29uc3QgYWN0aW9uID0gZGVsZXRlTWVzc2FnZXMoaWQpO1xuICAgICAgZGlzcGF0Y2goYWN0aW9uKTtcbiAgICB9LFxuICAgIGxvYWRNZXNzYWdlczogKCkgPT4ge1xuICAgICAgY29uc3QgYWN0aW9uID0gbG9hZE1lc3NhZ2VzKCk7XG4gICAgICBkaXNwYXRjaChhY3Rpb24pO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChtYXBTdGF0ZVRvUHJvcHMsIG1hcERpc3BhdGNoVG9Qcm9wcykoR2V0TWVzc2FnZXMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29udGFpbmVycy9HZXRNZXNzYWdlc0NvbnRhaW5lci5qcyIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuZnVuY3Rpb24gbWVzc2FnZXMoc3RhdGUgPSBbXSwgYWN0aW9uKSB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ01FU1NBR0VTX0xPQURFRCcpIHtcbiAgICByZXR1cm4gYWN0aW9uLnZhbHVlO1xuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cbmZ1bmN0aW9uIHVzZXJzKHN0YXRlID0gW10sIGFjdGlvbikge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09ICdVU0VSU19MT0FERUQnKSB7XG4gICAgcmV0dXJuIGFjdGlvbi52YWx1ZTtcbiAgfVxuICByZXR1cm4gc3RhdGU7XG59XG5cbmNvbnN0IHJvb3RSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgbWVzc2FnZXMsXG4gIHVzZXJzXG59KTtcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvaW5kZXguanMiLCJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMnO1xuaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5cbmV4cG9ydCBjb25zdCBpbml0U3RvcmUgPSAoKSA9PiB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rKSkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0b3JlLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQWNBO0FBMENBO0FBYUE7QUFhQTtBQVVBO0FBdUNBO0FBY0E7QUFDQTs7Ozs7QUFoS0E7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTs7QUFHQTtBQUVBO0FBSEE7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBRUE7QUFDQTs7O0FBRUE7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTs7QUFHQTtBQUVBO0FBSEE7OztBQUtBOztBQUdBO0FBRUE7QUFIQTs7O0FBS0E7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFGQTtBQUdBO0FBSkE7QUFNQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUZBO0FBR0E7QUFKQTtBQU1BO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTs7O0FBR0E7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTs7QUFHQTtBQUVBO0FBSEE7OztBQUtBOztBQUdBO0FBRUE7QUFIQTs7O0FBS0E7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBREE7QUFHQTtBQUpBO0FBS0E7QUFMQTtBQU9BO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQURBO0FBR0E7QUFKQTtBQUtBO0FBTEE7QUFPQTtBQUVBO0FBQ0E7OztBQUVBOztBQUdBO0FBRUE7QUFIQTs7O0FBS0E7O0FBR0E7QUFFQTtBQUhBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JMQTtBQUNBO0FBRkE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFHQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUFBOzs7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBWEE7QUFDQTtBQWFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTEE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7O0FBRUE7QUFBQTtBQURBO0FBSUE7Ozs7O0FBR0E7QUFFQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFFQTtBQUxBO0FBQUE7QUFNQTtBQU5BO0FBTUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQUE7QUFNQTtBQU5BO0FBTUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUE5QkE7QUFDQTtBQXlDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWRBO0FBQ0E7QUFnQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFSQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQU9BO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUExQkE7QUFDQTtBQWdDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6RUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBSUE7O0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFSQTs7O0FBVUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUtBOztBQUVBO0FBQUE7OztBQUlBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQWJBOzs7QUFlQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFFQTtBQUZBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        