'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/jonmgucciardi/Desktop/message-app/src/pages/messages.js?entry';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _CreateMessagesContainer = require('../containers/CreateMessagesContainer');

var _CreateMessagesContainer2 = _interopRequireDefault(_CreateMessagesContainer);

var _GetMessagesContainer = require('../containers/GetMessagesContainer');

var _GetMessagesContainer2 = _interopRequireDefault(_GetMessagesContainer);

var _store = require('../store');

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