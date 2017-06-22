
          window.__NEXT_REGISTER_PAGE('/', function() {
            var comp = module.exports =
webpackJsonp([5],{

/***/ 551:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _jsxFileName = '/Users/jonmgucciardi/Desktop/message-app/src/pages/index.js?entry';

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(573);

var _link2 = _interopRequireDefault(_link);

var _nextReduxWrapper = __webpack_require__(572);

var _nextReduxWrapper2 = _interopRequireDefault(_nextReduxWrapper);

var _store = __webpack_require__(574);

var _glamor = __webpack_require__(558);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jonmgucciardi/Desktop/message-app/src/pages/index.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jonmgucciardi/Desktop/message-app/src/pages/index.js"); } } })();
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
    })(module.exports.default || module.exports, "/")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 574:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/jonmgucciardi/Desktop/message-app/src/store.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/jonmgucciardi/Desktop/message-app/src/store.js"); } } })();

/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(551);


/***/ })

},[592]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzPzQ2Y2JhOTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgd2l0aFJlZHV4IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcic7XG5pbXBvcnQge2luaXRTdG9yZX0gZnJvbSAnLi4vc3RvcmUnO1xuaW1wb3J0IHsgY3NzIH0gZnJvbSAnZ2xhbW9yJztcblxuZnVuY3Rpb24gaW5kZXhQYWdlKCkge1xuICBjc3MuZ2xvYmFsKCdodG1sLCBib2R5Jywge1xuICAgIHBhZGRpbmc6ICczcmVtIDFyZW0nLFxuICAgIG1hcmdpbjogMCxcbiAgICBiYWNrZ3JvdW5kOiAncGFwYXlhd2hpcCcsXG4gICAgbWluSGVpZ2h0OiAnMTAwJScsXG4gICAgZm9udEZhbWlseTogJ0hlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYnLFxuICAgIGZvbnRTaXplOiAnMjRweCdcbiAgfSxcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDE+UG9ydGZvbGlvPC9oMT5cbiAgICAgIDxwPjxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgIDxhPkFib3V0PC9hPlxuICAgICAgPC9MaW5rPjwvcD5cbiAgICAgIDxwPlxuICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9KbWd1Y2NpYXJkaVwiIHRhcmdldD1cIl9ibGFua1wiIG9uQ2xpY2s9e2V2ZW50ID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8vZ2l0aHViLmNvbS9KbWd1Y2NpYXJkaScpO319PkdpdEh1YjwvYT5cblxuICAgICAgPC9wPlxuICAgICAgICA8cD48TGluayBocmVmPVwiL3BldHNcIj5cbiAgICAgICAgICA8YT5QZXRzPC9hPlxuICAgICAgICA8L0xpbms+PC9wPlxuICAgICAgICAgIDxwPjxMaW5rIGhyZWY9XCIvdmVoaWNsZXNcIj5cbiAgICAgICAgICA8YT5WZWhpY2xlczwvYT5cbiAgICAgICAgPC9MaW5rPjwvcD5cbiAgICAgICAgPHA+PExpbmsgaHJlZj1cIi91c2Vyc1wiPlxuICAgICAgICA8YT5Vc2VyczwvYT5cbiAgICAgIDwvTGluaz48L3A+XG4gICAgICA8cD48TGluayBocmVmPVwiL21lc3NhZ2VzXCI+XG4gICAgICA8YT5NZXNzYWdlczwvYT5cbiAgICA8L0xpbms+PC9wPlxuXG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhSZWR1eChpbml0U3RvcmUsIG51bGwsIG51bGwpKGluZGV4UGFnZSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9wYWdlcz9lbnRyeSJdLCJtYXBwaW5ncyI6IjtBOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTtBQUFBO0FBQ0E7Ozs7O0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQVRBO0FBQ0E7QUFTQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQ0E7QUFEQTtBQUFBO0FBR0E7QUFBQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBS0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTs7O0FBT0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        