
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

var rootReducer = (0, _redux.combineReducers)({
  messages: messages
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

/***/ 596:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/jonmgucciardi/Desktop/message-app/src/pages/messages.js?entry';

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(574);

var _link2 = _interopRequireDefault(_link);

var _nextReduxWrapper = __webpack_require__(573);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _CreateMessagesContainer = __webpack_require__(600);

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
      lineNumber: 13
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, 'Messages Page'), _react2.default.createElement(_link2.default, { href: '/', __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, 'Back to home')), _react2.default.createElement(_CreateMessagesContainer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), _react2.default.createElement(_GetMessagesContainer2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
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

/***/ 597:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(596);


/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(553);

var _stringify2 = _interopRequireDefault(_stringify);

exports.loadMessages = loadMessages;
exports.createMessages = createMessages;
exports.getMessages = getMessages;
exports.deleteMessages = deleteMessages;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function loadMessageError(message) {
  return {
    type: 'MESSAGE_LOAD_ERROR',
    message: message
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

function messagesLoaded(users) {
  return {
    type: 'MESSAGES_LOADED',
    value: users
  };
}

function createMessageError(message) {
  return {
    type: 'MESSAGE_CREATE_ERROR',
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

function getMessages(id) {
  return function (dispatch) {
    fetch('api/messages/' + id).then(function (res) {
      return res.json();
    }).then(function (messages) {
      dispatch(getMessagesDone(messages));
    });
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

function messageDeleted(message) {
  return {
    type: 'MESSAGE_DELETED',
    value: message
  };
}

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jonmgucciardi/Desktop/message-app/src/actions/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jonmgucciardi/Desktop/message-app/src/actions/index.js"); } } })();

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

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
          lineNumber: 15
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17
        }
      }, 'Create Message'), _react2.default.createElement('form', { onSubmit: function onSubmit(e) {
          e.preventDefault();
          if (_this2.props.createMessages) {
            _this2.props.createMessages(_this2.state.messages);
          }
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 24
        }
      }, 'Message: ', _react2.default.createElement('input', { onChange: function onChange(e) {
          var messages = { message: e.target.value };
          _this2.setState({
            messages: (0, _assign2.default)(_this2.state.messages, messages)
          });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 25
        }
      })), _react2.default.createElement('button', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }, 'Create'))));
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

var _reactRedux = __webpack_require__(584);

var _CreateMessages = __webpack_require__(599);

var _CreateMessages2 = _interopRequireDefault(_CreateMessages);

var _actions = __webpack_require__(598);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function mapDispatchToProps(dispatch) {
  return {
    createMessages: function createMessages(message) {
      dispatch((0, _actions.createMessages)(message));
    }
  };
}

exports.default = (0, _reactRedux.connect)(null, mapDispatchToProps)(_CreateMessages2.default);

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jonmgucciardi/Desktop/message-app/src/containers/CreateMessagesContainer.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jonmgucciardi/Desktop/message-app/src/containers/CreateMessagesContainer.js"); } } })();

/***/ }),

/***/ 601:
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

var _jsxFileName = "/Users/jonmgucciardi/Desktop/message-app/src/components/GetMessages.js";

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var GetMessages = function (_React$Component) {
  (0, _inherits3.default)(GetMessages, _React$Component);

  function GetMessages() {
    (0, _classCallCheck3.default)(this, GetMessages);

    var _this = (0, _possibleConstructorReturn3.default)(this, (GetMessages.__proto__ || (0, _getPrototypeOf2.default)(GetMessages)).call(this));

    _this.state = {
      visible: true

    };
    return _this;
  }

  (0, _createClass3.default)(GetMessages, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.match) {
        var id = this.props.match.params.id;
        this.props.getMessages(id);
        this.props.deleteMessages(id);
        this.props.loadMessages();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      this.props.loadMessages();

      var buttonText = "Hide";
      var userDivs = "";
      if (this.state.visible) {
        buttonText = "Hide";
        userDivs = this.props.messages.map(function (d, i) {
          return _react2.default.createElement("div", { key: i, __source: {
              fileName: _jsxFileName,
              lineNumber: 33
            }
          }, _react2.default.createElement("ul", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            }
          }, _react2.default.createElement("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          }, " ", d.message, " "), _react2.default.createElement("button", { onClick: function onClick() {
              return _this2.props.deleteMessages("" + d._id);
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            }
          }, "Remove")));
        });
      } else {
        buttonText = "Show";
        userDivs = "";
      }
      return _react2.default.createElement("div", { className: "messageContainer", id: "MC",
        style: {
          borderstyle: 'solid',
          overflow: 'auto',
          position: 'absolute',
          width: '500px',
          height: '250px',
          top: '20px',
          right: '75%',
          left: '50%'
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        }
      }, _react2.default.createElement("button", { onClick: function onClick() {
          _this2.setState({
            visible: !_this2.state.visible
          });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, buttonText), userDivs);
    }
  }]);
  return GetMessages;
}(_react2.default.Component);

exports.default = GetMessages;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jonmgucciardi/Desktop/message-app/src/components/GetMessages.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jonmgucciardi/Desktop/message-app/src/components/GetMessages.js"); } } })();

/***/ }),

/***/ 602:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(584);

var _GetMessages = __webpack_require__(601);

var _GetMessages2 = _interopRequireDefault(_GetMessages);

var _actions = __webpack_require__(598);

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

/***/ })

},[597]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9tZXNzYWdlcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3JlZHVjZXJzL2luZGV4LmpzPzQ5MTU3OTEiLCJ3ZWJwYWNrOi8vLy4vc3RvcmUuanM/NDkxNTc5MSIsIndlYnBhY2s6Ly8vLi9wYWdlcy9tZXNzYWdlcy5qcz80OTE1NzkxIiwid2VicGFjazovLy8uL2FjdGlvbnMvaW5kZXguanM/NDkxNTc5MSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NyZWF0ZU1lc3NhZ2VzLmpzPzQ5MTU3OTEiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9DcmVhdGVNZXNzYWdlc0NvbnRhaW5lci5qcz80OTE1NzkxIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvR2V0TWVzc2FnZXMuanM/NDkxNTc5MSIsIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0dldE1lc3NhZ2VzQ29udGFpbmVyLmpzPzQ5MTU3OTEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuXG5mdW5jdGlvbiBtZXNzYWdlcyhzdGF0ZSA9IFtdLCBhY3Rpb24pIHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnTUVTU0FHRVNfTE9BREVEJykge1xuICAgIHJldHVybiBhY3Rpb24udmFsdWU7XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIG1lc3NhZ2VzXG59KTtcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvaW5kZXguanMiLCJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMnO1xuaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5cbmV4cG9ydCBjb25zdCBpbml0U3RvcmUgPSAoKSA9PiB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rKSkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0b3JlLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQgQ3JlYXRlTWVzc2FnZXNDb250YWluZXIgZnJvbSAnLi4vY29udGFpbmVycy9DcmVhdGVNZXNzYWdlc0NvbnRhaW5lcic7XG5pbXBvcnQgR2V0TWVzc2FnZXNDb250YWluZXIgZnJvbSAnLi4vY29udGFpbmVycy9HZXRNZXNzYWdlc0NvbnRhaW5lcic7XG5cbmltcG9ydCB7aW5pdFN0b3JlfSBmcm9tICcuLi9zdG9yZSc7XG5cblxuZnVuY3Rpb24gbWVzc2FnZXNQYWdlKCkge1xuICByZXR1cm4gKFxuXG4gICAgPGRpdj5cbiAgICAgIDxoMT5cbiAgICAgICAgTWVzc2FnZXMgUGFnZVxuICAgICAgPC9oMT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxhPkJhY2sgdG8gaG9tZTwvYT5cbiAgICAgIDwvTGluaz5cbiAgICAgIDxDcmVhdGVNZXNzYWdlc0NvbnRhaW5lciAvPlxuICAgICAgPCBHZXRNZXNzYWdlc0NvbnRhaW5lci8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChpbml0U3RvcmUsIG51bGwsIG51bGwpKG1lc3NhZ2VzUGFnZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcy9tZXNzYWdlcy5qcz9lbnRyeSIsImZ1bmN0aW9uIGxvYWRNZXNzYWdlRXJyb3IobWVzc2FnZSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6ICdNRVNTQUdFX0xPQURfRVJST1InLFxuICAgIG1lc3NhZ2VcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRNZXNzYWdlcygpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGZldGNoKFwiL2FwaS9tZXNzYWdlc1wiKVxuICAgIC50aGVuKCByZXNwb25zZSA9PiB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgIH0pLnRoZW4obWVzc2FnZXMgPT4ge1xuICAgICAgZGlzcGF0Y2gobWVzc2FnZXNMb2FkZWQobWVzc2FnZXMpKTtcbiAgICB9KVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgZGlzcGF0Y2gobG9hZE1lc3NhZ2VFcnJvcihlcnIpKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWVzc2FnZXNMb2FkZWQodXNlcnMpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnTUVTU0FHRVNfTE9BREVEJyxcbiAgICB2YWx1ZTogdXNlcnNcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVzc2FnZUVycm9yKG1lc3NhZ2UpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnTUVTU0FHRV9DUkVBVEVfRVJST1InLFxuICAgIG1lc3NhZ2VcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lc3NhZ2VzKG0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGZldGNoKFwiL2FwaS9tZXNzYWdlc1wiLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogXCJhcHBsaWNhdGlvbi9qc29uXCJ9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobSlcbiAgICB9KS50aGVuKCgpID0+IGRpc3BhdGNoKGxvYWRNZXNzYWdlcygpKSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGRpc3BhdGNoKGNyZWF0ZU1lc3NhZ2VFcnJvcihlcnIpKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lc3NhZ2VzKGlkKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBmZXRjaChgYXBpL21lc3NhZ2VzLyR7aWR9YClcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbihtZXNzYWdlcyA9PiB7XG4gICAgICBkaXNwYXRjaChnZXRNZXNzYWdlc0RvbmUobWVzc2FnZXMpKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0TWVzc2FnZXNEb25lKHZlaGljbGVzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0dFVF9NRVNTQUdFU19ET05FJyxcbiAgICB2YWx1ZTogdmVoaWNsZXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlTWVzc2FnZUVycm9yKG1lc3NhZ2UpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnTUVTU0FHRV9ERUxFVEVfRVJST1InLFxuICAgIG1lc3NhZ2VcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZU1lc3NhZ2VzKGlkKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBmZXRjaChgYXBpL21lc3NhZ2VzLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogXCJhcHBsaWNhdGlvbi9qc29uXCJ9LFxuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2gobWVzc2FnZURlbGV0ZWQoKSkpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2gobG9hZE1lc3NhZ2VzKCkpKVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgZGlzcGF0Y2goZGVsZXRlTWVzc2FnZUVycm9yKGVycikpO1xuICAgIH0pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBtZXNzYWdlRGVsZXRlZChtZXNzYWdlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ01FU1NBR0VfREVMRVRFRCcsXG4gICAgdmFsdWU6IG1lc3NhZ2VcbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FjdGlvbnMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jbGFzcyBDcmVhdGVNZXNzYWdlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgIG1lc3NhZ2U6ICcnXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+Q3JlYXRlIE1lc3NhZ2U8L2gxPlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17IGUgPT4ge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBpZiAodGhpcy5wcm9wcy5jcmVhdGVNZXNzYWdlcykge1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcmVhdGVNZXNzYWdlcyh0aGlzLnN0YXRlLm1lc3NhZ2VzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH19PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICBNZXNzYWdlOiA8aW5wdXQgb25DaGFuZ2U9eyBlID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZXMgPSB7bWVzc2FnZTogZS50YXJnZXQudmFsdWV9O1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBtZXNzYWdlczogT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLm1lc3NhZ2VzLG1lc3NhZ2VzKVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8YnV0dG9uPlxuICAgICAgICAgIENyZWF0ZVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENyZWF0ZU1lc3NhZ2VzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9DcmVhdGVNZXNzYWdlcy5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgQ3JlYXRlTWVzc2FnZXMgZnJvbSAnLi4vY29tcG9uZW50cy9DcmVhdGVNZXNzYWdlcyc7XG5pbXBvcnQge1xuICBjcmVhdGVNZXNzYWdlcyxcbn0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4ge1xuICAgIGNyZWF0ZU1lc3NhZ2VzOiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgZGlzcGF0Y2goY3JlYXRlTWVzc2FnZXMobWVzc2FnZSkpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLG1hcERpc3BhdGNoVG9Qcm9wcykoQ3JlYXRlTWVzc2FnZXMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29udGFpbmVycy9DcmVhdGVNZXNzYWdlc0NvbnRhaW5lci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEdldE1lc3NhZ2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlzaWJsZTogdHJ1ZSxcblxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXRjaCkge1xuICAgICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZDtcbiAgICAgIHRoaXMucHJvcHMuZ2V0TWVzc2FnZXMoaWQpO1xuICAgICAgdGhpcy5wcm9wcy5kZWxldGVNZXNzYWdlcyhpZCk7XG4gICAgICB0aGlzLnByb3BzLmxvYWRNZXNzYWdlcygpO1xuICAgIH1cbiAgfVxuXG5cblxuICByZW5kZXIoKSB7XG5cbiAgICB0aGlzLnByb3BzLmxvYWRNZXNzYWdlcygpO1xuXG4gICAgbGV0IGJ1dHRvblRleHQgPSBcIkhpZGVcIjtcbiAgICBsZXQgdXNlckRpdnMgPSBcIlwiO1xuICAgIGlmICh0aGlzLnN0YXRlLnZpc2libGUpIHtcbiAgICAgIGJ1dHRvblRleHQgPSBcIkhpZGVcIjtcbiAgICAgIHVzZXJEaXZzID0gdGhpcy5wcm9wcy5tZXNzYWdlcy5tYXAoKGQsaSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPiB7ZC5tZXNzYWdlfSA8L2xpPlxuXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlbGV0ZU1lc3NhZ2VzKGAke2QuX2lkfWApfT5cbiAgICAgICAgICAgICAgICBSZW1vdmVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvblRleHQgPSBcIlNob3dcIjtcbiAgICAgIHVzZXJEaXZzID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlQ29udGFpbmVyXCIgaWQ9XCJNQ1wiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBib3JkZXJzdHlsZTogJ3NvbGlkJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHdpZHRoOiAnNTAwcHgnLFxuICAgICAgICBoZWlnaHQ6ICcyNTBweCcsXG4gICAgICAgIHRvcDogJzIwcHgnLFxuICAgICAgICByaWdodDogJzc1JScsXG4gICAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgfX0+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmlzaWJsZTogIXRoaXMuc3RhdGUudmlzaWJsZVxuICAgICAgfSk7XG4gICAgfVxuICAgIH0+XG4gICAgICB7YnV0dG9uVGV4dH1cbiAgICA8L2J1dHRvbj5cbiAgICB7dXNlckRpdnN9XG4gIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2V0TWVzc2FnZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0dldE1lc3NhZ2VzLmpzIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBHZXRNZXNzYWdlcyBmcm9tICcuLi9jb21wb25lbnRzL0dldE1lc3NhZ2VzJztcbmltcG9ydCB7XG4gIGdldE1lc3NhZ2VzLFxuICBkZWxldGVNZXNzYWdlcyxcbiAgbG9hZE1lc3NhZ2VzXG4gfSBmcm9tICcuLi9hY3Rpb25zJztcblxuZnVuY3Rpb24gbWFwU3RhdGVUb1Byb3BzKHN0YXRlKSB7XG4gIHJldHVybiB7XG4gICAgbWVzc2FnZXM6IHN0YXRlLm1lc3NhZ2VzXG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4ge1xuICAgIGdldE1lc3NhZ2VzOiBpZCA9PiB7XG4gICAgICBjb25zdCBhY3Rpb24gPSBnZXRNZXNzYWdlcyhpZCk7XG4gICAgICBkaXNwYXRjaChhY3Rpb24pO1xuICAgIH0sXG4gICAgZGVsZXRlTWVzc2FnZXM6IGlkID0+IHtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IGRlbGV0ZU1lc3NhZ2VzKGlkKTtcbiAgICAgIGRpc3BhdGNoKGFjdGlvbik7XG4gICAgfSxcbiAgICBsb2FkTWVzc2FnZXM6ICgpID0+IHtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IGxvYWRNZXNzYWdlcygpO1xuICAgICAgZGlzcGF0Y2goYWN0aW9uKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QobWFwU3RhdGVUb1Byb3BzLCBtYXBEaXNwYXRjaFRvUHJvcHMpKEdldE1lc3NhZ2VzKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2NvbnRhaW5lcnMvR2V0TWVzc2FnZXNDb250YWluZXIuanMiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaQTtBQUNBOzs7QUFBQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFDQTtBQUNBOzs7OztBQUVBO0FBR0E7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUdBO0FBSEE7QUFBQTs7O0FBS0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBNEJBO0FBYUE7QUF3QkE7QUFDQTs7Ozs7QUF6RUE7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFKQTtBQU9BO0FBRUE7QUFDQTs7O0FBRUE7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTs7QUFHQTtBQUVBO0FBSEE7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUZBO0FBR0E7QUFKQTtBQU1BO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBRUE7QUFDQTs7O0FBRUE7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTs7QUFHQTtBQUVBO0FBSEE7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFEQTtBQUdBO0FBSkE7QUFLQTtBQUxBO0FBT0E7QUFFQTtBQUNBOzs7QUFFQTs7QUFHQTtBQUVBO0FBSEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7QUFFQTtBQUFBO0FBREE7QUFJQTs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFDQTtBQUVBO0FBTEE7QUFBQTtBQU1BO0FBTkE7QUFNQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSEE7QUFBQTtBQU9BO0FBUEE7QUFPQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7OztBQTdCQTtBQUNBO0FBc0NBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFHQTs7QUFFQTtBQUNBO0FBR0E7QUFKQTs7O0FBTUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFHQTs7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBaEJBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFQQTtBQUZBO0FBV0E7QUFYQTtBQUFBO0FBWUE7QUFDQTtBQUFBO0FBRkE7QUFBQTtBQU1BO0FBTkE7QUFRQTs7OztBQWxFQTtBQUNBO0FBdUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzNFQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFLQTs7QUFFQTtBQUFBOzs7QUFJQTs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFiQTs7O0FBZUE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        