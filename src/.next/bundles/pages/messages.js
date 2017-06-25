
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

var _glamor = __webpack_require__(559);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9tZXNzYWdlcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzPzVjNmM5ZDgiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUuanM/NWM2YzlkOCIsIndlYnBhY2s6Ly8vLi9hY3Rpb25zL2luZGV4LmpzPzVjNmM5ZDgiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbWVzc2FnZXMuanM/NWM2YzlkOCIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NyZWF0ZU1lc3NhZ2VzLmpzPzVjNmM5ZDgiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HZXRNZXNzYWdlcy5qcz81YzZjOWQ4Iiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvQ3JlYXRlTWVzc2FnZXNDb250YWluZXIuanM/NWM2YzlkOCIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0dldE1lc3NhZ2VzQ29udGFpbmVyLmpzPzVjNmM5ZDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuXG5mdW5jdGlvbiBtZXNzYWdlcyhzdGF0ZSA9IFtdLCBhY3Rpb24pIHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnTUVTU0FHRVNfTE9BREVEJykge1xuICAgIHJldHVybiBhY3Rpb24udmFsdWU7XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuZnVuY3Rpb24gdXNlcnMoc3RhdGUgPSBbXSwgYWN0aW9uKSB7XG4gIGlmIChhY3Rpb24udHlwZSA9PT0gJ1VTRVJTX0xPQURFRCcpIHtcbiAgICByZXR1cm4gYWN0aW9uLnZhbHVlO1xuICB9XG4gIHJldHVybiBzdGF0ZTtcbn1cblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICBtZXNzYWdlcyxcbiAgdXNlcnNcbn0pO1xuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZWR1Y2Vycy9pbmRleC5qcyIsIlxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi9yZWR1Y2Vycyc7XG5pbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmsgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHtjb21wb3NlV2l0aERldlRvb2xzfSBmcm9tICdyZWR1eC1kZXZ0b29scy1leHRlbnNpb24nO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7fTtcblxuZXhwb3J0IGNvbnN0IGluaXRTdG9yZSA9ICgpID0+IHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSwgY29tcG9zZVdpdGhEZXZUb29scyhhcHBseU1pZGRsZXdhcmUodGh1bmspKSk7XG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3RvcmUuanMiLCJmdW5jdGlvbiBsb2FkTWVzc2FnZUVycm9yKG1lc3NhZ2UpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnTUVTU0FHRV9MT0FEX0VSUk9SJyxcbiAgICBtZXNzYWdlXG4gIH07XG59XG5cbmZ1bmN0aW9uIGxvYWRVc2VyRXJyb3IobWVzc2FnZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdVU0VSX0xPQURfRVJST1InLFxuICAgIG1lc3NhZ2VcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRVc2VycygpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGZldGNoKFwiL2FwaS91c2Vyc1wiKVxuICAgIC50aGVuKCByZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pLnRoZW4odmVoaWNsZXMgPT4ge1xuICAgICAgZGlzcGF0Y2godXNlcnNMb2FkZWQodmVoaWNsZXMpKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgZGlzcGF0Y2gobG9hZFVzZXJFcnJvcihlcnIpKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRNZXNzYWdlcygpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGZldGNoKFwiL2FwaS9tZXNzYWdlc1wiKVxuICAgIC50aGVuKCByZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pLnRoZW4obWVzc2FnZXMgPT4ge1xuICAgICAgZGlzcGF0Y2gobWVzc2FnZXNMb2FkZWQobWVzc2FnZXMpKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgZGlzcGF0Y2gobG9hZE1lc3NhZ2VFcnJvcihlcnIpKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlcnNMb2FkZWQodXNlcnMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnVVNFUlNfTE9BREVEJyxcbiAgICB2YWx1ZTogdXNlcnNcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWVzc2FnZXNMb2FkZWQobWVzc2FnZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdNRVNTQUdFU19MT0FERUQnLFxuICAgIHZhbHVlOiBtZXNzYWdlXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1lc3NhZ2VFcnJvcihtZXNzYWdlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ01FU1NBR0VfQ1JFQVRFX0VSUk9SJyxcbiAgICBtZXNzYWdlXG4gIH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVVzZXJFcnJvcihtZXNzYWdlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1VTRVJfQ1JFQVRFX0VSUk9SJyxcbiAgICBtZXNzYWdlXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNZXNzYWdlcyhtKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBmZXRjaChcIi9hcGkvbWVzc2FnZXNcIiwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6IFwiYXBwbGljYXRpb24vanNvblwifSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG0pXG4gICAgfSkudGhlbigoKSA9PiBkaXNwYXRjaChsb2FkTWVzc2FnZXMoKSkpXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBkaXNwYXRjaChjcmVhdGVNZXNzYWdlRXJyb3IoZXJyKSk7XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVc2Vycyh1KSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBmZXRjaChcIi9hcGkvdXNlcnNcIiwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7J0NvbnRlbnQtVHlwZSc6IFwiYXBwbGljYXRpb24vanNvblwifSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHUpXG4gICAgfSkudGhlbigoKSA9PiBkaXNwYXRjaChsb2FkVXNlcnMoKSkpXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBkaXNwYXRjaChjcmVhdGVVc2VyRXJyb3IoZXJyKSk7XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNZXNzYWdlcyhpZCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgZmV0Y2goYGFwaS9tZXNzYWdlcy8ke2lkfWApXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4obWVzc2FnZXMgPT4ge1xuICAgICAgZGlzcGF0Y2goZ2V0TWVzc2FnZXNEb25lKG1lc3NhZ2VzKSk7XG4gICAgfSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VycyhpZCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgZmV0Y2goYGFwaS91c2Vycy8ke2lkfWApXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgLnRoZW4odXNlcnMgPT4ge1xuICAgICAgZGlzcGF0Y2goZ2V0VXNlcnNEb25lKHVzZXJzKSk7XG4gICAgfSk7XG4gIH07XG59XG5cblxuZnVuY3Rpb24gZ2V0VXNlcnNEb25lKHZlaGljbGVzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0dFVF9VU0VSU19ET05FJyxcbiAgICB2YWx1ZTogdmVoaWNsZXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0TWVzc2FnZXNEb25lKHZlaGljbGVzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0dFVF9NRVNTQUdFU19ET05FJyxcbiAgICB2YWx1ZTogdmVoaWNsZXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlTWVzc2FnZUVycm9yKG1lc3NhZ2UpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnTUVTU0FHRV9ERUxFVEVfRVJST1InLFxuICAgIG1lc3NhZ2VcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVXNlckVycm9yKG1lc3NhZ2UpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnVVNFUl9ERUxFVEVfRVJST1InLFxuICAgIG1lc3NhZ2VcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZU1lc3NhZ2VzKGlkKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBmZXRjaChgYXBpL21lc3NhZ2VzLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogXCJhcHBsaWNhdGlvbi9qc29uXCJ9LFxuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2gobWVzc2FnZURlbGV0ZWQoKSkpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2gobG9hZE1lc3NhZ2VzKCkpKVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgZGlzcGF0Y2goZGVsZXRlTWVzc2FnZUVycm9yKGVycikpO1xuICAgIH0pO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlVXNlcnMoaWQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGZldGNoKGBhcGkvdXNlcnMvJHtpZH1gLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgaGVhZGVyczogeydDb250ZW50LVR5cGUnOiBcImFwcGxpY2F0aW9uL2pzb25cIn0sXG4gICAgfSlcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaCh1c2VyRGVsZXRlZCgpKSlcbiAgICAudGhlbigoKSA9PiBkaXNwYXRjaChsb2FkVXNlcnMoKSkpXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBkaXNwYXRjaChkZWxldGVVc2VyRXJyb3IoZXJyKSk7XG4gICAgfSk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1lc3NhZ2VEZWxldGVkKG1lc3NhZ2UpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnTUVTU0FHRV9ERUxFVEVEJyxcbiAgICB2YWx1ZTogbWVzc2FnZVxuICB9O1xufVxuXG5mdW5jdGlvbiB1c2VyRGVsZXRlZCh1c2VyKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ1VTRVJfREVMRVRFRCcsXG4gICAgdmFsdWU6IHVzZXJcbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FjdGlvbnMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCBDcmVhdGVNZXNzYWdlc0NvbnRhaW5lciBmcm9tICcuLi9jb250YWluZXJzL0NyZWF0ZU1lc3NhZ2VzQ29udGFpbmVyJztcbmltcG9ydCBHZXRNZXNzYWdlc0NvbnRhaW5lciBmcm9tICcuLi9jb250YWluZXJzL0dldE1lc3NhZ2VzQ29udGFpbmVyJztcblxuaW1wb3J0IHtpbml0U3RvcmV9IGZyb20gJy4uL3N0b3JlJztcblxuXG5cbmZ1bmN0aW9uIG1lc3NhZ2VzUGFnZSgpIHtcbiAgcmV0dXJuIChcblxuICAgIDxkaXY+XG4gICAgICA8Q3JlYXRlTWVzc2FnZXNDb250YWluZXIgLz5cbiAgICAgIDwgR2V0TWVzc2FnZXNDb250YWluZXIvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoaW5pdFN0b3JlLCBudWxsLCBudWxsKShtZXNzYWdlc1BhZ2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvbWVzc2FnZXMuanM/ZW50cnkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcblxuY29uc3QgYmFzaWNTdHlsZXMgPSB7XG4gIHRleHRBbGlnbjogJ2xlZnQnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gIGNvbG9yOiAnY29ybmZsb3dlcmJsdWUnLFxuICBib3JkZXI6ICcxcHggc29saWQgbGlnaHRibHVlJyxcbiAgYm9yZGVyUmlnaHQ6ICdub25lJyxcbiAgYm9yZGVyQm90dG9tOiAnbm9uZScsXG4gIGJveFNoYWRvdzogJzVweCA1cHggMCAwIGxpZ2h0Ymx1ZSwgMTBweCAxMHB4IDAgMCBsaWdodHllbGxvdycsXG4gIHRyYW5zaXRpb246ICdhbGwgMC4xcyBsaW5lYXInLFxuICBtYXJnaW46IGAzcmVtIDBgLFxuICBwYWRkaW5nOiBgMXJlbSAwLjVyZW1gLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgYm90dG9tOiAwXG59O1xuXG5jb25zdCBUZXh0Q29udGFpbmVyID0ge1xuICBwYWRkaW5nOiAnMXB4JyxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkIGxpZ2h0Ymx1ZScsXG4gIGJveFNoYWRvdzogJzVweCA1cHggMCAwIGxpZ2h0Ymx1ZSwgMTBweCAxMHB4IDAgMCBsaWdodHllbGxvdycsXG4gIHRyYW5zaXRpb246ICdib3hTaGFkb3cgMC4zcywgYm9yZGVyIDAuM3MnLFxuICB3aWR0aDogJzcwMHB4JyxcbiAgaGVpZ2h0OiAnMTAwcHgnLFxufTtcblxuY29uc3QgQnV0dG9uU3VibWl0ID0ge1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgYm90dG9tOiAnMCUnLFxuICByaWdodDogJzEwJScsXG4gIGxlZnQ6ICcxNyUnLFxufTtcblxuY29uc3QgQmFzaWMgPSBnbGFtb3JvdXMuZGl2KGJhc2ljU3R5bGVzKTtcbmNvbnN0IFRleHRJbnB1dCA9IGdsYW1vcm91cy50ZXh0QXJlYShUZXh0Q29udGFpbmVyKTtcbmNvbnN0IEJ1dHRvbk1lc3NhZ2VTdWJtaXQgPSBnbGFtb3JvdXMuYnV0dG9uKEJ1dHRvblN1Ym1pdCk7XG5cbmNsYXNzIENyZWF0ZU1lc3NhZ2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgbWVzc2FnZTogJydcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17IGUgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jcmVhdGVNZXNzYWdlcykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcmVhdGVNZXNzYWdlcyh0aGlzLnN0YXRlLm1lc3NhZ2VzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19PlxuICAgICAgICAgIDxCYXNpYz5cbiAgICAgICAgICAgIEd1ZXN0OlxuICAgICAgICAgICAgIDxUZXh0SW5wdXQgb25DaGFuZ2U9eyBlID0+IHtcbiAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VzID0ge21lc3NhZ2U6IGUudGFyZ2V0LnZhbHVlfTtcbiAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICBtZXNzYWdlczogT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLm1lc3NhZ2VzLG1lc3NhZ2VzKVxuICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgfX0vPlxuICAgICAgICAgICAgIDxCdXR0b25NZXNzYWdlU3VibWl0PlxuICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgIDwvQnV0dG9uTWVzc2FnZVN1Ym1pdD5cbiAgICAgICAgICA8L0Jhc2ljPlxuXG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlTWVzc2FnZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0NyZWF0ZU1lc3NhZ2VzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBnbGFtb3JvdXMgZnJvbSAnZ2xhbW9yb3VzJztcblxuXG5jb25zdCBUZXh0Q29udGFpbmVyID0ge1xuICBwYWRkaW5nOiAnMXB4JyxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkIGxpZ2h0Ymx1ZScsXG4gIGJveFNoYWRvdzogJzVweCA1cHggMCAwIGxpZ2h0Ymx1ZSwgMTBweCAxMHB4IDAgMCBsaWdodHllbGxvdycsXG4gIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgdHJhbnNpdGlvbjogJ2JveFNoYWRvdyAwLjNzLCBib3JkZXIgMC4zcycsXG4gIGJvcmRlcnN0eWxlOiAnc29saWQnLFxuICBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgb3ZlZmxvd1dyYXA6ICdicmVha1dvcmQnLFxuICBmbGV4OiAwLjgsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB3aWR0aDogJzgyNXB4JyxcbiAgaGVpZ2h0OiAnMzUwcHgnLFxuICB0b3A6IDEwLFxuICByaWdodDogJzAlJyxcbiAgbGVmdDogJzQlJyxcbn07XG5cbmNvbnN0IFVzZXJEaXZTdHlsZXMgPSB7XG4gIHBhZGRpbmc6ICcxcHgnLFxuICBib3JkZXI6ICcxcHggc29saWQgbGlnaHRibHVlJyxcbiAgYm94U2hhZG93OiAnNXB4IDVweCAwIDAgbGlnaHRibHVlLCAxMHB4IDEwcHggMCAwIGxpZ2h0eWVsbG93JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICB0cmFuc2l0aW9uOiAnYm94U2hhZG93IDAuM3MsIGJvcmRlciAwLjNzJyxcbiAgb3ZlcmZsb1dyYXA6ICdicmVha1dvcmQnLFxuICB3b3JkV3JhcDogJ2JyZWFrV29yZCcsXG4gIGh5cGhlbnM6ICdhdXRvJ1xuXG5cbn07XG5cbmNvbnN0IFRleHRTdHlsZXMgPSBnbGFtb3JvdXMudGV4dChUZXh0Q29udGFpbmVyKTtcbmNvbnN0IE1lc3NhZ2VEaXYgPSBnbGFtb3JvdXMuZGl2KFVzZXJEaXZTdHlsZXMpO1xuXG5cbmNsYXNzIEdldE1lc3NhZ2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXRjaCkge1xuICAgICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZDtcbiAgICAgIHRoaXMucHJvcHMuZ2V0TWVzc2FnZXMoaWQpO1xuICAgICAgdGhpcy5wcm9wcy5kZWxldGVNZXNzYWdlcyhpZCk7XG4gICAgICB0aGlzLnByb3BzLmxvYWRNZXNzYWdlcygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLnByb3BzLmxvYWRNZXNzYWdlcygpXG4gICAgbGV0IHVzZXJEaXZzID0gJyc7XG4gICAgdXNlckRpdnMgPSB0aGlzLnByb3BzLm1lc3NhZ2VzLm1hcCgoZCxpKSA9PiB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8TWVzc2FnZURpdiBrZXkgPSB7aX0+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgIHtkLm1lc3NhZ2V9XG5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L01lc3NhZ2VEaXY+XG4gICAgICApO1xuICAgIH0pO1xuICAgIHJldHVybiAoXG5cbiAgPFRleHRTdHlsZXM+XG4gICAge3VzZXJEaXZzfVxuICA8L1RleHRTdHlsZXM+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHZXRNZXNzYWdlcztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbXBvbmVudHMvR2V0TWVzc2FnZXMuanMiLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IENyZWF0ZU1lc3NhZ2VzIGZyb20gJy4uL2NvbXBvbmVudHMvQ3JlYXRlTWVzc2FnZXMnO1xuaW1wb3J0IHtcbiAgY3JlYXRlTWVzc2FnZXMsXG4gIGdldFVzZXJzXG59IGZyb20gJy4uL2FjdGlvbnMnO1xuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICBjcmVhdGVNZXNzYWdlczogZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgIGRpc3BhdGNoKGNyZWF0ZU1lc3NhZ2VzKG1lc3NhZ2UpKTtcbiAgICB9LFxuICAgIGdldFVzZXJzOiBpZCA9PiB7XG4gICAgICBjb25zdCBhY3Rpb24gPSBnZXRVc2VycyhpZCk7XG4gICAgICBkaXNwYXRjaChhY3Rpb24pO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLG1hcERpc3BhdGNoVG9Qcm9wcykoQ3JlYXRlTWVzc2FnZXMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29udGFpbmVycy9DcmVhdGVNZXNzYWdlc0NvbnRhaW5lci5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgR2V0TWVzc2FnZXMgZnJvbSAnLi4vY29tcG9uZW50cy9HZXRNZXNzYWdlcyc7XG5pbXBvcnQge1xuICBnZXRNZXNzYWdlcyxcbiAgZGVsZXRlTWVzc2FnZXMsXG4gIGxvYWRNZXNzYWdlc1xuIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIG1lc3NhZ2VzOiBzdGF0ZS5tZXNzYWdlc1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICBnZXRNZXNzYWdlczogaWQgPT4ge1xuICAgICAgY29uc3QgYWN0aW9uID0gZ2V0TWVzc2FnZXMoaWQpO1xuICAgICAgZGlzcGF0Y2goYWN0aW9uKTtcbiAgICB9LFxuICAgIGRlbGV0ZU1lc3NhZ2VzOiBpZCA9PiB7XG4gICAgICBjb25zdCBhY3Rpb24gPSBkZWxldGVNZXNzYWdlcyhpZCk7XG4gICAgICBkaXNwYXRjaChhY3Rpb24pO1xuICAgIH0sXG4gICAgbG9hZE1lc3NhZ2VzOiAoKSA9PiB7XG4gICAgICBjb25zdCBhY3Rpb24gPSBsb2FkTWVzc2FnZXMoKTtcbiAgICAgIGRpc3BhdGNoKGFjdGlvbik7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShHZXRNZXNzYWdlcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb250YWluZXJzL0dldE1lc3NhZ2VzQ29udGFpbmVyLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBRUE7QUFGQTtBQUNBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ25CQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNLQTtBQWNBO0FBMENBO0FBYUE7QUFhQTtBQVVBO0FBdUNBO0FBY0E7QUFDQTs7Ozs7QUFoS0E7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTs7QUFHQTtBQUVBO0FBSEE7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBRkE7QUFJQTtBQUpBO0FBT0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBRUE7QUFDQTs7O0FBRUE7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTs7QUFHQTtBQUVBO0FBSEE7OztBQUtBOztBQUdBO0FBRUE7QUFIQTs7O0FBS0E7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFGQTtBQUdBO0FBSkE7QUFNQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUZBO0FBR0E7QUFKQTtBQU1BO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTs7O0FBR0E7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTs7QUFHQTtBQUVBO0FBSEE7OztBQUtBOztBQUdBO0FBRUE7QUFIQTs7O0FBS0E7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBREE7QUFHQTtBQUpBO0FBS0E7QUFMQTtBQU9BO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQURBO0FBR0E7QUFKQTtBQUtBO0FBTEE7QUFPQTtBQUVBO0FBQ0E7OztBQUVBOztBQUdBO0FBRUE7QUFIQTs7O0FBS0E7O0FBR0E7QUFFQTtBQUhBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JMQTtBQUNBO0FBRkE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFHQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUFBOzs7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBWEE7QUFDQTtBQWFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTEE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7O0FBRUE7QUFBQTtBQURBO0FBSUE7Ozs7O0FBR0E7QUFFQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFFQTtBQUxBO0FBQUE7QUFNQTtBQU5BO0FBTUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQUE7QUFNQTtBQU5BO0FBTUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUE5QkE7QUFDQTtBQXlDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQWRBO0FBQ0E7QUFnQkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFSQTtBQUNBO0FBV0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQU9BO0FBRUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7QUExQkE7QUFDQTtBQWdDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6RUE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBSUE7O0FBRUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFSQTs7O0FBVUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUtBOztBQUVBO0FBQUE7OztBQUlBOztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQWJBOzs7QUFlQTtBQUNBOzs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=
            return { page: comp.default }
          })
        