
          window.__NEXT_REGISTER_PAGE('/messages', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 547:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = __webpack_require__(545);

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

/***/ 554:
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

var _nextReduxWrapper = __webpack_require__(566);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _CreateMessagesContainer = __webpack_require__(570);

var _CreateMessagesContainer2 = _interopRequireDefault(_CreateMessagesContainer);

var _GetMessagesContainer = __webpack_require__(571);

var _GetMessagesContainer2 = _interopRequireDefault(_GetMessagesContainer);

var _store = __webpack_require__(573);

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

/***/ 568:
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

var _glamorous = __webpack_require__(603);

var _glamorous2 = _interopRequireDefault(_glamorous);

var _glamor = __webpack_require__(598);

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
          lineNumber: 53
        }
      }, _react2.default.createElement('div', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 54
        }
      }, _react2.default.createElement('form', { onSubmit: function onSubmit(e) {
          e.preventDefault();
          if (_this2.props.createMessages) {
            _this2.props.createMessages(_this2.state.messages);
          }
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        }
      }, _react2.default.createElement(Basic, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'UserName:', _react2.default.createElement(TextInput, { onChange: function onChange(e) {
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

/***/ 569:
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
              lineNumber: 34
            }
          }, _react2.default.createElement("ul", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 35
            }
          }, _react2.default.createElement("li", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 36
            }
          }, " ", d.message, " "), _react2.default.createElement("button", { onClick: function onClick() {
              return _this2.props.deleteMessages("" + d._id);
            }, __source: {
              fileName: _jsxFileName,
              lineNumber: 38
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
          lineNumber: 51
        }
      }, _react2.default.createElement("button", { onClick: function onClick() {
          _this2.setState({
            visible: !_this2.state.visible
          });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        }
      }, buttonText), userDivs);
    }
  }]);
  return GetMessages;
}(_react2.default.Component);

exports.default = GetMessages;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jonmgucciardi/Desktop/message-app/src/components/GetMessages.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jonmgucciardi/Desktop/message-app/src/components/GetMessages.js"); } } })();

/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(542);

var _CreateMessages = __webpack_require__(568);

var _CreateMessages2 = _interopRequireDefault(_CreateMessages);

var _actions = __webpack_require__(547);

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

/***/ 571:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(542);

var _GetMessages = __webpack_require__(569);

var _GetMessages2 = _interopRequireDefault(_GetMessages);

var _actions = __webpack_require__(547);

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

/***/ 572:
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

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initStore = undefined;

var _reducers = __webpack_require__(572);

var _reducers2 = _interopRequireDefault(_reducers);

var _redux = __webpack_require__(540);

var _reduxThunk = __webpack_require__(584);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxDevtoolsExtension = __webpack_require__(583);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var initialState = {};

var initStore = exports.initStore = function initStore() {
  return (0, _redux.createStore)(_reducers2.default, initialState, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default)));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jonmgucciardi/Desktop/message-app/src/store.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jonmgucciardi/Desktop/message-app/src/store.js"); } } })();

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(554);


/***/ })

},[591]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9tZXNzYWdlcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FjdGlvbnMvaW5kZXguanM/ZGVjYjk3ZCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9tZXNzYWdlcy5qcz9kZWNiOTdkIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvQ3JlYXRlTWVzc2FnZXMuanM/NWZhNzAwZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0dldE1lc3NhZ2VzLmpzPzVmYTcwMGUiLCJ3ZWJwYWNrOi8vLy4vY29udGFpbmVycy9DcmVhdGVNZXNzYWdlc0NvbnRhaW5lci5qcz81ZmE3MDBlIiwid2VicGFjazovLy8uL2NvbnRhaW5lcnMvR2V0TWVzc2FnZXNDb250YWluZXIuanM/NWZhNzAwZSIsIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz81ZmE3MDBlIiwid2VicGFjazovLy8uL3N0b3JlLmpzPzVmYTcwMGUiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbG9hZE1lc3NhZ2VFcnJvcihtZXNzYWdlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ01FU1NBR0VfTE9BRF9FUlJPUicsXG4gICAgbWVzc2FnZVxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZE1lc3NhZ2VzKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpc3BhdGNoKSB7XG4gICAgZmV0Y2goXCIvYXBpL21lc3NhZ2VzXCIpXG4gICAgLnRoZW4oIHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgfSkudGhlbihtZXNzYWdlcyA9PiB7XG4gICAgICBkaXNwYXRjaChtZXNzYWdlc0xvYWRlZChtZXNzYWdlcykpO1xuICAgIH0pXG4gICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICBkaXNwYXRjaChsb2FkTWVzc2FnZUVycm9yKGVycikpO1xuICAgIH0pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBtZXNzYWdlc0xvYWRlZChtZXNzYWdlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ01FU1NBR0VTX0xPQURFRCcsXG4gICAgdmFsdWU6IG1lc3NhZ2VcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTWVzc2FnZUVycm9yKG1lc3NhZ2UpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnTUVTU0FHRV9DUkVBVEVfRVJST1InLFxuICAgIG1lc3NhZ2VcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1lc3NhZ2VzKG0pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChkaXNwYXRjaCkge1xuICAgIGZldGNoKFwiL2FwaS9tZXNzYWdlc1wiLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogXCJhcHBsaWNhdGlvbi9qc29uXCJ9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobSlcbiAgICB9KS50aGVuKCgpID0+IGRpc3BhdGNoKGxvYWRNZXNzYWdlcygpKSlcbiAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgIGRpc3BhdGNoKGNyZWF0ZU1lc3NhZ2VFcnJvcihlcnIpKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE1lc3NhZ2VzKGlkKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBmZXRjaChgYXBpL21lc3NhZ2VzLyR7aWR9YClcbiAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAudGhlbihtZXNzYWdlcyA9PiB7XG4gICAgICBkaXNwYXRjaChnZXRNZXNzYWdlc0RvbmUobWVzc2FnZXMpKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0TWVzc2FnZXNEb25lKHZlaGljbGVzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ0dFVF9NRVNTQUdFU19ET05FJyxcbiAgICB2YWx1ZTogdmVoaWNsZXNcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlTWVzc2FnZUVycm9yKG1lc3NhZ2UpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiAnTUVTU0FHRV9ERUxFVEVfRVJST1InLFxuICAgIG1lc3NhZ2VcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZU1lc3NhZ2VzKGlkKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZGlzcGF0Y2gpIHtcbiAgICBmZXRjaChgYXBpL21lc3NhZ2VzLyR7aWR9YCwge1xuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcbiAgICAgIGhlYWRlcnM6IHsnQ29udGVudC1UeXBlJzogXCJhcHBsaWNhdGlvbi9qc29uXCJ9LFxuICAgIH0pXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2gobWVzc2FnZURlbGV0ZWQoKSkpXG4gICAgLnRoZW4oKCkgPT4gZGlzcGF0Y2gobG9hZE1lc3NhZ2VzKCkpKVxuICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgZGlzcGF0Y2goZGVsZXRlTWVzc2FnZUVycm9yKGVycikpO1xuICAgIH0pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBtZXNzYWdlRGVsZXRlZChtZXNzYWdlKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogJ01FU1NBR0VfREVMRVRFRCcsXG4gICAgdmFsdWU6IG1lc3NhZ2VcbiAgfTtcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2FjdGlvbnMvaW5kZXguanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCB3aXRoUmVkdXggZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCBDcmVhdGVNZXNzYWdlc0NvbnRhaW5lciBmcm9tICcuLi9jb250YWluZXJzL0NyZWF0ZU1lc3NhZ2VzQ29udGFpbmVyJztcbmltcG9ydCBHZXRNZXNzYWdlc0NvbnRhaW5lciBmcm9tICcuLi9jb250YWluZXJzL0dldE1lc3NhZ2VzQ29udGFpbmVyJztcblxuaW1wb3J0IHtpbml0U3RvcmV9IGZyb20gJy4uL3N0b3JlJztcblxuXG5cbmZ1bmN0aW9uIG1lc3NhZ2VzUGFnZSgpIHtcbiAgcmV0dXJuIChcblxuICAgIDxkaXY+XG4gICAgICA8Q3JlYXRlTWVzc2FnZXNDb250YWluZXIgLz5cbiAgICAgIDwgR2V0TWVzc2FnZXNDb250YWluZXIvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoUmVkdXgoaW5pdFN0b3JlLCBudWxsLCBudWxsKShtZXNzYWdlc1BhZ2UpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcGFnZXMvbWVzc2FnZXMuanM/ZW50cnkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGdsYW1vcm91cyBmcm9tICdnbGFtb3JvdXMnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcblxuY29uc3QgYmFzaWNTdHlsZXMgPSB7XG4gIHRleHRBbGlnbjogJ2xlZnQnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gIGNvbG9yOiAnY29ybmZsb3dlcmJsdWUnLFxuICBib3JkZXI6ICcxcHggc29saWQgbGlnaHRibHVlJyxcbiAgYm9yZGVyUmlnaHQ6ICdub25lJyxcbiAgYm9yZGVyQm90dG9tOiAnbm9uZScsXG4gIGJveFNoYWRvdzogJzVweCA1cHggMCAwIGxpZ2h0Ymx1ZSwgMTBweCAxMHB4IDAgMCBsaWdodHllbGxvdycsXG4gIHRyYW5zaXRpb246ICdhbGwgMC4xcyBsaW5lYXInLFxuICBtYXJnaW46IGAzcmVtIDBgLFxuICBwYWRkaW5nOiBgMXJlbSAwLjVyZW1gLFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgYm90dG9tOiAwXG59O1xuXG5jb25zdCBUZXh0Q29udGFpbmVyID0ge1xuICBwYWRkaW5nOiAnMXB4JyxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkIGxpZ2h0Ymx1ZScsXG4gIGJveFNoYWRvdzogJzVweCA1cHggMCAwIGxpZ2h0Ymx1ZSwgMTBweCAxMHB4IDAgMCBsaWdodHllbGxvdycsXG4gIHRyYW5zaXRpb246ICdib3hTaGFkb3cgMC4zcywgYm9yZGVyIDAuM3MnLFxuICB3aWR0aDogJzcwMHB4JyxcbiAgaGVpZ2h0OiAnMTAwcHgnLFxufTtcblxuY29uc3QgQnV0dG9uU3VibWl0ID0ge1xuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgYm90dG9tOiAnMCUnLFxuICByaWdodDogJzEwJScsXG4gIGxlZnQ6ICcxNyUnLFxufTtcblxuY29uc3QgQmFzaWMgPSBnbGFtb3JvdXMuZGl2KGJhc2ljU3R5bGVzKTtcbmNvbnN0IFRleHRJbnB1dCA9IGdsYW1vcm91cy50ZXh0QXJlYShUZXh0Q29udGFpbmVyKTtcbmNvbnN0IEJ1dHRvbk1lc3NhZ2VTdWJtaXQgPSBnbGFtb3JvdXMuYnV0dG9uKEJ1dHRvblN1Ym1pdCk7XG5cbmNsYXNzIENyZWF0ZU1lc3NhZ2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbWVzc2FnZXM6IHtcbiAgICAgICAgbWVzc2FnZTogJydcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyBlID0+IHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgaWYgKHRoaXMucHJvcHMuY3JlYXRlTWVzc2FnZXMpIHtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3JlYXRlTWVzc2FnZXModGhpcy5zdGF0ZS5tZXNzYWdlcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9fT5cbiAgICAgICAgICA8QmFzaWM+XG5cbiAgICAgICAgICAgIFVzZXJOYW1lOlxuICAgICAgICAgICAgIDxUZXh0SW5wdXQgb25DaGFuZ2U9eyBlID0+IHtcbiAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VzID0ge21lc3NhZ2U6IGUudGFyZ2V0LnZhbHVlfTtcbiAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICBtZXNzYWdlczogT2JqZWN0LmFzc2lnbih0aGlzLnN0YXRlLm1lc3NhZ2VzLG1lc3NhZ2VzKVxuICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgfX0vPlxuICAgICAgICAgICAgIDxCdXR0b25NZXNzYWdlU3VibWl0PlxuICAgICAgICAgICAgIFN1Ym1pdFxuICAgICAgICAgICAgIDwvQnV0dG9uTWVzc2FnZVN1Ym1pdD5cbiAgICAgICAgICA8L0Jhc2ljPlxuXG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ3JlYXRlTWVzc2FnZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0NyZWF0ZU1lc3NhZ2VzLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5jbGFzcyBHZXRNZXNzYWdlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHZpc2libGU6IHRydWUsXG5cbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWF0Y2gpIHtcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQ7XG4gICAgICB0aGlzLnByb3BzLmdldE1lc3NhZ2VzKGlkKTtcbiAgICAgIHRoaXMucHJvcHMuZGVsZXRlTWVzc2FnZXMoaWQpO1xuICAgICAgdGhpcy5wcm9wcy5sb2FkTWVzc2FnZXMoKTtcbiAgICB9XG4gIH1cblxuXG5cbiAgcmVuZGVyKCkge1xuXG4gICAgdGhpcy5wcm9wcy5sb2FkTWVzc2FnZXMoKTtcblxuICAgIGxldCBidXR0b25UZXh0ID0gXCJIaWRlXCI7XG4gICAgbGV0IHVzZXJEaXZzID0gXCJcIjtcbiAgICBpZiAodGhpcy5zdGF0ZS52aXNpYmxlKSB7XG4gICAgICBidXR0b25UZXh0ID0gXCJIaWRlXCI7XG4gICAgICB1c2VyRGl2cyA9IHRoaXMucHJvcHMubWVzc2FnZXMubWFwKChkLGkpID0+IHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGtleT17aX0+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDxsaT4ge2QubWVzc2FnZX0gPC9saT5cblxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5kZWxldGVNZXNzYWdlcyhgJHtkLl9pZH1gKX0+XG4gICAgICAgICAgICAgICAgUmVtb3ZlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBidXR0b25UZXh0ID0gXCJTaG93XCI7XG4gICAgICB1c2VyRGl2cyA9IFwiXCI7XG4gICAgfVxuICAgIHJldHVybiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibWVzc2FnZUNvbnRhaW5lclwiIGlkPVwiTUNcIlxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYm9yZGVyc3R5bGU6ICdzb2xpZCcsXG4gICAgICAgIG92ZXJmbG93OiAnYXV0bycsXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICB3aWR0aDogJzUwMHB4JyxcbiAgICAgICAgaGVpZ2h0OiAnMjUwcHgnLFxuICAgICAgICB0b3A6ICcyMHB4JyxcbiAgICAgICAgcmlnaHQ6ICc3NSUnLFxuICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgIH19PlxuICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIHZpc2libGU6ICF0aGlzLnN0YXRlLnZpc2libGVcbiAgICAgIH0pO1xuICAgIH1cbiAgICB9PlxuICAgICAge2J1dHRvblRleHR9XG4gICAgPC9idXR0b24+XG4gICAge3VzZXJEaXZzfVxuICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdldE1lc3NhZ2VzO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9HZXRNZXNzYWdlcy5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgQ3JlYXRlTWVzc2FnZXMgZnJvbSAnLi4vY29tcG9uZW50cy9DcmVhdGVNZXNzYWdlcyc7XG5pbXBvcnQge1xuICBjcmVhdGVNZXNzYWdlcyxcbn0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmZ1bmN0aW9uIG1hcERpc3BhdGNoVG9Qcm9wcyhkaXNwYXRjaCkge1xuICByZXR1cm4ge1xuICAgIGNyZWF0ZU1lc3NhZ2VzOiBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgZGlzcGF0Y2goY3JlYXRlTWVzc2FnZXMobWVzc2FnZSkpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChudWxsLG1hcERpc3BhdGNoVG9Qcm9wcykoQ3JlYXRlTWVzc2FnZXMpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29udGFpbmVycy9DcmVhdGVNZXNzYWdlc0NvbnRhaW5lci5qcyIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgR2V0TWVzc2FnZXMgZnJvbSAnLi4vY29tcG9uZW50cy9HZXRNZXNzYWdlcyc7XG5pbXBvcnQge1xuICBnZXRNZXNzYWdlcyxcbiAgZGVsZXRlTWVzc2FnZXMsXG4gIGxvYWRNZXNzYWdlc1xuIH0gZnJvbSAnLi4vYWN0aW9ucyc7XG5cbmZ1bmN0aW9uIG1hcFN0YXRlVG9Qcm9wcyhzdGF0ZSkge1xuICByZXR1cm4ge1xuICAgIG1lc3NhZ2VzOiBzdGF0ZS5tZXNzYWdlc1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBEaXNwYXRjaFRvUHJvcHMoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuIHtcbiAgICBnZXRNZXNzYWdlczogaWQgPT4ge1xuICAgICAgY29uc3QgYWN0aW9uID0gZ2V0TWVzc2FnZXMoaWQpO1xuICAgICAgZGlzcGF0Y2goYWN0aW9uKTtcbiAgICB9LFxuICAgIGRlbGV0ZU1lc3NhZ2VzOiBpZCA9PiB7XG4gICAgICBjb25zdCBhY3Rpb24gPSBkZWxldGVNZXNzYWdlcyhpZCk7XG4gICAgICBkaXNwYXRjaChhY3Rpb24pO1xuICAgIH0sXG4gICAgbG9hZE1lc3NhZ2VzOiAoKSA9PiB7XG4gICAgICBjb25zdCBhY3Rpb24gPSBsb2FkTWVzc2FnZXMoKTtcbiAgICAgIGRpc3BhdGNoKGFjdGlvbik7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KG1hcFN0YXRlVG9Qcm9wcywgbWFwRGlzcGF0Y2hUb1Byb3BzKShHZXRNZXNzYWdlcyk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb250YWluZXJzL0dldE1lc3NhZ2VzQ29udGFpbmVyLmpzIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuXG5mdW5jdGlvbiBtZXNzYWdlcyhzdGF0ZSA9IFtdLCBhY3Rpb24pIHtcbiAgaWYgKGFjdGlvbi50eXBlID09PSAnTUVTU0FHRVNfTE9BREVEJykge1xuICAgIHJldHVybiBhY3Rpb24udmFsdWU7XG4gIH1cbiAgcmV0dXJuIHN0YXRlO1xufVxuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIG1lc3NhZ2VzXG59KTtcbmV4cG9ydCBkZWZhdWx0IHJvb3RSZWR1Y2VyO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVkdWNlcnMvaW5kZXguanMiLCJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMnO1xuaW1wb3J0IHtjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlLH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCB7Y29tcG9zZVdpdGhEZXZUb29sc30gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge307XG5cbmV4cG9ydCBjb25zdCBpbml0U3RvcmUgPSAoKSA9PiB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShyZWR1Y2VyLCBpbml0aWFsU3RhdGUsIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKHRodW5rKSkpO1xufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3N0b3JlLmpzIl0sIm1hcHBpbmdzIjoiO0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPQTtBQTRCQTtBQWFBO0FBd0JBO0FBQ0E7Ozs7O0FBekVBOztBQUdBO0FBRUE7QUFIQTs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUlBO0FBSkE7QUFPQTtBQUVBO0FBQ0E7OztBQUVBOztBQUdBO0FBRUE7QUFIQTs7O0FBS0E7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFGQTtBQUdBO0FBSkE7QUFNQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUVBO0FBQ0E7OztBQUVBOztBQUdBO0FBRUE7QUFIQTs7O0FBS0E7O0FBR0E7QUFFQTtBQUhBOzs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBREE7QUFHQTtBQUpBO0FBS0E7QUFMQTtBQU9BO0FBRUE7QUFDQTs7O0FBRUE7O0FBR0E7QUFFQTtBQUhBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGQTtBQUNBO0FBRkE7QUFDQTs7O0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQ0E7QUFDQTs7Ozs7QUFHQTtBQUdBOztBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBR0E7QUFIQTtBQUFBOzs7QUFLQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBWEE7QUFDQTtBQWFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBTEE7QUFDQTtBQU9BO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFIQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7O0FBRUE7QUFBQTtBQURBO0FBSUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7O0FBQUE7QUFDQTtBQURBO0FBQUE7O0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFFQTtBQUxBO0FBQUE7QUFNQTtBQU5BO0FBTUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUhBO0FBQUE7QUFNQTtBQU5BO0FBTUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUE5QkE7QUFDQTtBQXlDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFHQTs7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUlBO0FBRUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBaEJBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBOztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFQQTtBQUZBO0FBV0E7QUFYQTtBQUFBO0FBWUE7QUFDQTtBQUFBO0FBRkE7QUFBQTtBQU1BO0FBTkE7QUFRQTs7OztBQWxFQTtBQUNBO0FBdUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzVFQTtBQUNBO0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7QUFHQTs7QUFFQTtBQUNBO0FBR0E7QUFKQTs7O0FBTUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTtBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7QUFBQTs7O0FBSUE7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBYkE7OztBQWVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2hDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7OztBIiwic291cmNlUm9vdCI6IiJ9
            return { page: comp.default }
          })
        