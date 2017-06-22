'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/jonmgucciardi/Desktop/message-app/src/pages/index.js?entry';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _nextReduxWrapper = require('next-redux-wrapper');

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = require('../store');

var _glamor = require('glamor');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function indexPage() {
  _glamor.css.global('html, body', {
    padding: '3rem 1rem',
    margin: 0,
    background: 'papayawhip',
    minHeight: '100%',
    fontFamily: 'Helvetica, Arial, sans-serif',
    fontSize: '24px'
  });

  return _react2.default.createElement('div', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, _react2.default.createElement('h1', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, 'Portfolio'), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement(_link2.default, { href: '/about', __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    }
  }, 'About'))), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, _react2.default.createElement('a', { href: 'https://github.com/Jmgucciardi', target: '_blank', onClick: function onClick(event) {
      event.preventDefault();
      window.open('https://github.com/Jmgucciardi');
    }, __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, 'GitHub')), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement(_link2.default, { href: '/pets', __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    }
  }, 'Pets'))), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement(_link2.default, { href: '/vehicles', __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, 'Vehicles'))), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement(_link2.default, { href: '/users', __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    }
  }, 'Users'))), _react2.default.createElement('p', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement(_link2.default, { href: '/messages', __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    }
  }, _react2.default.createElement('a', {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    }
  }, 'Messages'))));
}

exports.default = (0, _nextReduxWrapper2.default)(_store.initStore, null, null)(indexPage);