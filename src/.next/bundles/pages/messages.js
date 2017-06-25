
          window.__NEXT_REGISTER_PAGE('/messages', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 575:
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

/***/ 576:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;

var _reducers = __webpack_require__(575);

var _reducers2 = _interopRequireDefault(_reducers);

var _redux = __webpack_require__(540);

var _reduxThunk = __webpack_require__(588);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxDevtoolsExtension = __webpack_require__(587);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var initialState = {};

var initStore = exports.initStore = function initStore() {
  return (0, _redux.createStore)(_reducers2.default, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jonmgucciardi/Desktop/message-app/src/store.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jonmgucciardi/Desktop/message-app/src/store.js"); } } })();

/***/ }),

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(553);

var _stringify2 = _interopRequireDefault(_stringify);

exports.loadUsers = loadUsers;
exports.loadMessages = loadMessages;
exports.createMessages = createMessages;
exports.createUsers = createUsers;
exports.getMessages = getMessages;
exports.getUsers = getUsers;
exports.deleteMessages = deleteMessages;
exports.deleteUsers = deleteUsers;

__webpack_require__(610);

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

/***/ 598:
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

var _nextReduxWrapper = __webpack_require__(573);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _CreateMessagesContainer = __webpack_require__(601);

var _CreateMessagesContainer2 = _interopRequireDefault(_CreateMessagesContainer);

var _GetMessagesContainer = __webpack_require__(602);

var _GetMessagesContainer2 = _interopRequireDefault(_GetMessagesContainer);

var _store = __webpack_require__(576);

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

/***/ 599:
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

var _glamorous = __webpack_require__(596);

var _glamorous2 = _interopRequireDefault(_glamorous);

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
  fontSize: '75%',
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
  left: '10%'
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

/***/ 600:
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

var _glamorous = __webpack_require__(596);

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

/***/ 601:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(584);

var _CreateMessages = __webpack_require__(599);

var _CreateMessages2 = _interopRequireDefault(_CreateMessages);

var _actions = __webpack_require__(597);

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

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(584);

var _GetMessages = __webpack_require__(600);

var _GetMessages2 = _interopRequireDefault(_GetMessages);

var _actions = __webpack_require__(597);

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

/***/ 603:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(598);


/***/ })

},[603]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9tZXNzYWdlcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzPzgxNjZhNjAiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUuanM/ODE2NmE2MCIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2luZGV4LmpzPzgxNjZhNjAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbWVzc2FnZXMuanM/ODE2NmE2MCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NyZWF0ZU1lc3NhZ2VzLmpzPzgxNjZhNjAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HZXRNZXNzYWdlcy5qcz84MTY2YTYwIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQ3JlYXRlTWVzc2FnZXNDb250YWluZXIuanM/ODE2NmE2MCIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0dldE1lc3NhZ2VzQ29udGFpbmVyLmpzPzgxNjZhNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuXG5mdW5jdGlvbiBtZXNzYWdlcyhzdGF0ZSA9IFtdLCBhY3Rpb24pIHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnTUVTU0FHRVNfTE9BREVEJykge1xuICAgIHJldHVybiBhY3Rpb24udmFsdWU7XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuZnVuY3Rpb24gdXNlcnMoc3RhdGUgPSBbXSwgYWN0aW9uKSB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ1VTRVJTX0xPQURFRCcpIHtcbiAgICByZXR1cm4gYWN0aW9uLnZhbHVlO1xuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBtZXNzYWdlcyxcbiAgdXNlcnNcbn0pO1xuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9pbmRleC5qcyIsIlxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycyc7XG5pbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHtjb21wb3NlV2l0aERldlRvb2xzfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcblxuZXhwb3J0IGNvbnN0IGluaXRTdG9yZSA9ICgpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUodGh1bmspKSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RvcmUuanMiLCJpbXBvcnQgJ3doYXR3Zy1mZXRjaCc7XG5cbmZ1bmN0aW9uIGxvYWRNZXNzYWdlRXJyb3IobWVzc2FnZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdNRVNTQUdFX0xPQURfRVJST1InLFxuICAgIG1lc3NhZ2VcbiAgfTtcbn1cblxuZnVuY3Rpb24gbG9hZFVzZXJFcnJvcihtZXNzYWdlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1VTRVJfTE9BRF9FUlJPUicsXG4gICAgbWVzc2FnZVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFVzZXJzKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgZmV0Y2goXCIvYXBpL3VzZXJzXCIpXG4gICAgLnRoZW4oIHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSkudGhlbih2ZWhpY2xlcyA9PiB7XG4gICAgICBkaXNwYXRjaCh1c2Vyc0xvYWRlZCh2ZWhpY2xlcykpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBkaXNwYXRjaChsb2FkVXNlckVycm9yKGVycikpO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZE1lc3NhZ2VzKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgZmV0Y2goXCIvYXBpL21lc3NhZ2VzXCIpXG4gICAgLnRoZW4oIHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSkudGhlbihtZXNzYWdlcyA9PiB7XG4gICAgICBkaXNwYXRjaChtZXNzYWdlc0xvYWRlZChtZXNzYWdlcykpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBkaXNwYXRjaChsb2FkTWVzc2FnZUVycm9yKGVycikpO1xuICAgIH0pO1xuICB9O1xufVxuXG5mdW5jdGlvbiB1c2Vyc0xvYWRlZCh1c2Vycykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdVU0VSU19MT0FERUQnLFxuICAgIHZhbHVlOiB1c2Vyc1xuICB9O1xufVxuXG5mdW5jdGlvbiBtZXNzYWdlc0xvYWRlZChtZXNzYWdlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ01FU1NBR0VTX0xPQURFRCcsXG4gICAgdmFsdWU6IG1lc3NhZ2VcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVzc2FnZUVycm9yKG1lc3NhZ2UpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnTUVTU0FHRV9DUkVBVEVfRVJST1InLFxuICAgIG1lc3NhZ2VcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlVXNlckVycm9yKG1lc3NhZ2UpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnVVNFUl9DUkVBVEVfRVJST1InLFxuICAgIG1lc3NhZ2VcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lc3NhZ2VzKG0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGZldGNoKFwiL2FwaS9tZXNzYWdlc1wiLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogXCJhcHBsaWNhdGlvbi9qc29uXCJ9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobSlcbiAgICB9KS50aGVuKCgpID0+IGRpc3BhdGNoKGxvYWRNZXNzYWdlcygpKSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGRpc3BhdGNoKGNyZWF0ZU1lc3NhZ2VFcnJvcihlcnIpKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVVzZXJzKHUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGZldGNoKFwiL2FwaS91c2Vyc1wiLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogXCJhcHBsaWNhdGlvbi9qc29uXCJ9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkodSlcbiAgICB9KS50aGVuKCgpID0+IGRpc3BhdGNoKGxvYWRVc2VycygpKSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGRpc3BhdGNoKGNyZWF0ZVVzZXJFcnJvcihlcnIpKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lc3NhZ2VzKGlkKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBmZXRjaChgYXBpL21lc3NhZ2VzLyR7aWR9YClcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbihtZXNzYWdlcyA9PiB7XG4gICAgICBkaXNwYXRjaChnZXRNZXNzYWdlc0RvbmUobWVzc2FnZXMpKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFVzZXJzKGlkKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBmZXRjaChgYXBpL3VzZXJzLyR7aWR9YClcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbih1c2VycyA9PiB7XG4gICAgICBkaXNwYXRjaChnZXRVc2Vyc0RvbmUodXNlcnMpKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuXG5mdW5jdGlvbiBnZXRVc2Vyc0RvbmUodmVoaWNsZXMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnR0VUX1VTRVJTX0RPTkUnLFxuICAgIHZhbHVlOiB2ZWhpY2xlc1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRNZXNzYWdlc0RvbmUodmVoaWNsZXMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnR0VUX01FU1NBR0VTX0RPTkUnLFxuICAgIHZhbHVlOiB2ZWhpY2xlc1xuICB9O1xufVxuXG5mdW5jdGlvbiBkZWxldGVNZXNzYWdlRXJyb3IobWVzc2FnZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdNRVNTQUdFX0RFTEVURV9FUlJPUicsXG4gICAgbWVzc2FnZVxuICB9O1xufVxuXG5mdW5jdGlvbiBkZWxldGVVc2VyRXJyb3IobWVzc2FnZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdVU0VSX0RFTEVURV9FUlJPUicsXG4gICAgbWVzc2FnZVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlTWVzc2FnZXMoaWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGZldGNoKGBhcGkvbWVzc2FnZXMvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiBcImFwcGxpY2F0aW9uL2pzb25cIn0sXG4gICAgfSlcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaChtZXNzYWdlRGVsZXRlZCgpKSlcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaChsb2FkTWVzc2FnZXMoKSkpXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBkaXNwYXRjaChkZWxldGVNZXNzYWdlRXJyb3IoZXJyKSk7XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVVc2VycyhpZCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgZmV0Y2goYGFwaS91c2Vycy8ke2lkfWAsIHtcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6IFwiYXBwbGljYXRpb24vanNvblwifSxcbiAgICB9KVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKHVzZXJEZWxldGVkKCkpKVxuICAgIC50aGVuKCgpID0+IGRpc3BhdGNoKGxvYWRVc2VycygpKSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGRpc3BhdGNoKGRlbGV0ZVVzZXJFcnJvcihlcnIpKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWVzc2FnZURlbGV0ZWQobWVzc2FnZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdNRVNTQUdFX0RFTEVURUQnLFxuICAgIHZhbHVlOiBtZXNzYWdlXG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZXJEZWxldGVkKHVzZXIpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnVVNFUl9ERUxFVEVEJyxcbiAgICB2YWx1ZTogdXNlclxuICB9O1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYWN0aW9ucy9pbmRleC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IHdpdGhSZWR1eCBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IENyZWF0ZU1lc3NhZ2VzQ29udGFpbmVyIGZyb20gJy4uL2NvbnRhaW5lcnMvQ3JlYXRlTWVzc2FnZXNDb250YWluZXInO1xuaW1wb3J0IEdldE1lc3NhZ2VzQ29udGFpbmVyIGZyb20gJy4uL2NvbnRhaW5lcnMvR2V0TWVzc2FnZXNDb250YWluZXInO1xuXG5pbXBvcnQge2luaXRTdG9yZX0gZnJvbSAnLi4vc3RvcmUnO1xuXG5cblxuZnVuY3Rpb24gbWVzc2FnZXNQYWdlKCkge1xuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxDcmVhdGVNZXNzYWdlc0NvbnRhaW5lciAvPlxuICAgICAgPEdldE1lc3NhZ2VzQ29udGFpbmVyLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFJlZHV4KGluaXRTdG9yZSwgbnVsbCwgbnVsbCkobWVzc2FnZXNQYWdlKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL21lc3NhZ2VzLmpzP2VudHJ5IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuY29uc3QgYmFzaWNTdHlsZXMgPSB7XG4gIHRleHRBbGlnbjogJ2xlZnQnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gIGNvbG9yOiAnY29ybmZsb3dlcmJsdWUnLFxuICBib3JkZXI6ICcxcHggc29saWQgbGlnaHRibHVlJyxcbiAgYm9yZGVyUmlnaHQ6ICdub25lJyxcbiAgYm9yZGVyQm90dG9tOiAnbm9uZScsXG4gIGJveFNoYWRvdzogJzVweCA1cHggMCAwIGxpZ2h0Ymx1ZSwgMTBweCAxMHB4IDAgMCBsaWdodHllbGxvdycsXG4gIHRyYW5zaXRpb246ICdhbGwgMC4xcyBsaW5lYXInLFxuICBtYXJnaW46IGAzcmVtIDBgLFxuICBwYWRkaW5nOiBgMXJlbSAwLjVyZW1gLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgYm90dG9tOiAwXG59O1xuXG5jb25zdCBUZXh0Q29udGFpbmVyID0ge1xuICBmb250U2l6ZTogJzc1JScsXG4gIHBhZGRpbmc6ICcxcHgnLFxuICBib3JkZXI6ICcxcHggc29saWQgbGlnaHRibHVlJyxcbiAgYm94U2hhZG93OiAnNXB4IDVweCAwIDAgbGlnaHRibHVlLCAxMHB4IDEwcHggMCAwIGxpZ2h0eWVsbG93JyxcbiAgdHJhbnNpdGlvbjogJ2JveFNoYWRvdyAwLjNzLCBib3JkZXIgMC4zcycsXG4gIHdpZHRoOiAnNzAwcHgnLFxuICBoZWlnaHQ6ICcxMDBweCcsXG59O1xuXG5jb25zdCBCdXR0b25TdWJtaXQgPSB7XG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICBib3R0b206ICcwJScsXG4gIHJpZ2h0OiAnMTAlJyxcbiAgbGVmdDogJzEwJScsXG59O1xuXG5jb25zdCBCYXNpYyA9IGdsYW1vcm91cy5kaXYoYmFzaWNTdHlsZXMpO1xuY29uc3QgVGV4dElucHV0ID0gZ2xhbW9yb3VzLnRleHRBcmVhKFRleHRDb250YWluZXIpO1xuY29uc3QgQnV0dG9uTWVzc2FnZVN1Ym1pdCA9IGdsYW1vcm91cy5idXR0b24oQnV0dG9uU3VibWl0KTtcblxuY2xhc3MgQ3JlYXRlTWVzc2FnZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtZXNzYWdlczoge1xuICAgICAgICBtZXNzYWdlOiAnJ1xuICAgICAgfSxcbiAgICB9O1xuICB9XG5cblxuICByZW5kZXIoKSB7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXsgZSA9PiB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGlmICh0aGlzLnByb3BzLmNyZWF0ZU1lc3NhZ2VzKSB7XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyZWF0ZU1lc3NhZ2VzKHRoaXMuc3RhdGUubWVzc2FnZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfX0+XG4gICAgICAgICAgPEJhc2ljPlxuICAgICAgICAgICAgR3Vlc3Q6XG4gICAgICAgICAgICAgPFRleHRJbnB1dCBvbkNoYW5nZT17IGUgPT4ge1xuICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZXMgPSB7bWVzc2FnZTogZS50YXJnZXQudmFsdWV9O1xuICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiBPYmplY3QuYXNzaWduKHRoaXMuc3RhdGUubWVzc2FnZXMsbWVzc2FnZXMpXG4gICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICB9fS8+XG4gICAgICAgICAgICAgPEJ1dHRvbk1lc3NhZ2VTdWJtaXQ+XG4gICAgICAgICAgICAgU3VibWl0XG4gICAgICAgICAgICAgPC9CdXR0b25NZXNzYWdlU3VibWl0PlxuICAgICAgICAgIDwvQmFzaWM+XG5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDcmVhdGVNZXNzYWdlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvQ3JlYXRlTWVzc2FnZXMuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuXG5cbmNvbnN0IFRleHRDb250YWluZXIgPSB7XG4gIHBhZGRpbmc6ICcxcHgnLFxuICBib3JkZXI6ICcxcHggc29saWQgbGlnaHRibHVlJyxcbiAgYm94U2hhZG93OiAnNXB4IDVweCAwIDAgbGlnaHRibHVlLCAxMHB4IDEwcHggMCAwIGxpZ2h0eWVsbG93JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICB0cmFuc2l0aW9uOiAnYm94U2hhZG93IDAuM3MsIGJvcmRlciAwLjNzJyxcbiAgYm9yZGVyc3R5bGU6ICdzb2xpZCcsXG4gIG92ZXJmbG93WTogJ2F1dG8nLFxuICBvdmVmbG93V3JhcDogJ2JyZWFrV29yZCcsXG4gIGZsZXg6IDAuOCxcbiAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gIHdpZHRoOiAnODI1cHgnLFxuICBoZWlnaHQ6ICczNTBweCcsXG4gIHRvcDogMTAsXG4gIHJpZ2h0OiAnMCUnLFxuICBsZWZ0OiAnNCUnLFxufTtcblxuY29uc3QgVXNlckRpdlN0eWxlcyA9IHtcbiAgcGFkZGluZzogJzFweCcsXG4gIGJvcmRlcjogJzFweCBzb2xpZCBsaWdodGJsdWUnLFxuICBib3hTaGFkb3c6ICc1cHggNXB4IDAgMCBsaWdodGJsdWUsIDEwcHggMTBweCAwIDAgbGlnaHR5ZWxsb3cnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gIHRyYW5zaXRpb246ICdib3hTaGFkb3cgMC4zcywgYm9yZGVyIDAuM3MnLFxuICBvdmVyZmxvV3JhcDogJ2JyZWFrV29yZCcsXG4gIHdvcmRXcmFwOiAnYnJlYWtXb3JkJyxcbiAgaHlwaGVuczogJ2F1dG8nXG5cblxufTtcblxuY29uc3QgVGV4dFN0eWxlcyA9IGdsYW1vcm91cy50ZXh0KFRleHRDb250YWluZXIpO1xuY29uc3QgTWVzc2FnZURpdiA9IGdsYW1vcm91cy5kaXYoVXNlckRpdlN0eWxlcyk7XG5cblxuY2xhc3MgR2V0TWVzc2FnZXMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmICh0aGlzLnByb3BzLm1hdGNoKSB7XG4gICAgICBjb25zdCBpZCA9IHRoaXMucHJvcHMubWF0Y2gucGFyYW1zLmlkO1xuICAgICAgdGhpcy5wcm9wcy5nZXRNZXNzYWdlcyhpZCk7XG4gICAgICB0aGlzLnByb3BzLmRlbGV0ZU1lc3NhZ2VzKGlkKTtcbiAgICAgIHRoaXMucHJvcHMubG9hZE1lc3NhZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMucHJvcHMubG9hZE1lc3NhZ2VzKClcbiAgICBsZXQgdXNlckRpdnMgPSAnJztcbiAgICB1c2VyRGl2cyA9IHRoaXMucHJvcHMubWVzc2FnZXMubWFwKChkLGkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxNZXNzYWdlRGl2IGtleSA9IHtpfT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAge2QubWVzc2FnZX1cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvTWVzc2FnZURpdj5cbiAgICAgICk7XG4gICAgfSk7XG4gICAgcmV0dXJuIChcblxuICA8VGV4dFN0eWxlcz5cbiAgICB7dXNlckRpdnN9XG4gIDwvVGV4dFN0eWxlcz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdldE1lc3NhZ2VzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9HZXRNZXNzYWdlcy5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgQ3JlYXRlTWVzc2FnZXMgZnJvbSAnLi4vY29tcG9uZW50cy9DcmVhdGVNZXNzYWdlcyc7XG5pbXBvcnQge1xuICBjcmVhdGVNZXNzYWdlcyxcbiAgZ2V0VXNlcnNcbn0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4ge1xuICAgIGNyZWF0ZU1lc3NhZ2VzOiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgZGlzcGF0Y2goY3JlYXRlTWVzc2FnZXMobWVzc2FnZSkpO1xuICAgIH0sXG4gICAgZ2V0VXNlcnM6IGlkID0+IHtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IGdldFVzZXJzKGlkKTtcbiAgICAgIGRpc3BhdGNoKGFjdGlvbik7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG51bGwsbWFwRGlzcGF0Y2hUb1Byb3BzKShDcmVhdGVNZXNzYWdlcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb250YWluZXJzL0NyZWF0ZU1lc3NhZ2VzQ29udGFpbmVyLmpzIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBHZXRNZXNzYWdlcyBmcm9tICcuLi9jb21wb25lbnRzL0dldE1lc3NhZ2VzJztcbmltcG9ydCB7XG4gIGdldE1lc3NhZ2VzLFxuICBkZWxldGVNZXNzYWdlcyxcbiAgbG9hZE1lc3NhZ2VzXG4gfSBmcm9tICcuLi9hY3Rpb25zJztcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZXM6IHN0YXRlLm1lc3NhZ2VzXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4ge1xuICAgIGdldE1lc3NhZ2VzOiBpZCA9PiB7XG4gICAgICBjb25zdCBhY3Rpb24gPSBnZXRNZXNzYWdlcyhpZCk7XG4gICAgICBkaXNwYXRjaChhY3Rpb24pO1xuICAgIH0sXG4gICAgZGVsZXRlTWVzc2FnZXM6IGlkID0+IHtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IGRlbGV0ZU1lc3NhZ2VzKGlkKTtcbiAgICAgIGRpc3BhdGNoKGFjdGlvbik7XG4gICAgfSxcbiAgICBsb2FkTWVzc2FnZXM6ICgpID0+IHtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IGxvYWRNZXNzYWdlcygpO1xuICAgICAgZGlzcGF0Y2goYWN0aW9uKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdldE1lc3NhZ2VzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnRhaW5lcnMvR2V0TWVzc2FnZXNDb250YWluZXIuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFFQTtBQUZBO0FBQ0E7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ09BO0FBY0E7QUEwQ0E7QUFhQTtBQWFBO0FBVUE7QUF1Q0E7QUFjQTtBQUNBO0FBbEtBO0FBQ0E7Ozs7O0FBQ0E7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTs7QUFHQTtBQUVBO0FBSEE7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBRUE7QUFDQTs7O0FBRUE7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTs7QUFHQTtBQUVBO0FBSEE7OztBQUtBOztBQUdBO0FBRUE7QUFIQTs7O0FBS0E7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFGQTtBQUdBO0FBSkE7QUFNQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUZBO0FBR0E7QUFKQTtBQU1BO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTs7O0FBR0E7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTs7QUFHQTtBQUVBO0FBSEE7OztBQUtBOztBQUdBO0FBRUE7QUFIQTs7O0FBS0E7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBREE7QUFHQTtBQUpBO0FBS0E7QUFMQTtBQU9BO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQURBO0FBR0E7QUFKQTtBQUtBO0FBTEE7QUFPQTtBQUVBO0FBQ0E7OztBQUVBOztBQUdBO0FBRUE7QUFIQTs7O0FBS0E7O0FBR0E7QUFFQTtBQUhBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZMQTtBQUNBO0FBRkE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFHQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUFBOzs7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFYQTtBQUNBO0FBYUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU5BO0FBQ0E7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBOztBQUVBO0FBQUE7QUFEQTtBQUlBOzs7OztBQUdBO0FBRUE7QUFDQTtBQUFBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBRUE7QUFMQTtBQUFBO0FBTUE7QUFOQTtBQU1BOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUFBO0FBTUE7QUFOQTtBQU1BOztBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBOUJBO0FBQ0E7QUF5Q0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7O0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFkQTtBQUNBO0FBZ0JBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBUkE7QUFDQTtBQVdBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFPQTtBQUVBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7O0FBMUJBO0FBQ0E7QUFnQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekVBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUlBOztBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBUkE7OztBQVVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFLQTs7QUFFQTtBQUFBOzs7QUFJQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFiQTs7O0FBZUE7QUFDQTs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        