webpackHotUpdate(5,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS42ODBlNjM5YmQyM2YzNWIxMTRhYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HZXRNZXNzYWdlcy5qcz8wODlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cblxuY29uc3QgVGV4dENvbnRhaW5lciA9IHtcbiAgcGFkZGluZzogJzFweCcsXG4gIGJvcmRlcjogJzFweCBzb2xpZCBsaWdodGJsdWUnLFxuICBib3hTaGFkb3c6ICc1cHggNXB4IDAgMCBsaWdodGJsdWUsIDEwcHggMTBweCAwIDAgbGlnaHR5ZWxsb3cnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gIHRyYW5zaXRpb246ICdib3hTaGFkb3cgMC4zcywgYm9yZGVyIDAuM3MnLFxuICBib3JkZXJzdHlsZTogJ3NvbGlkJyxcbiAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gIG92ZWZsb3dXcmFwOiAnYnJlYWtXb3JkJyxcbiAgZmxleDogMC44LFxuICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgd2lkdGg6ICc4MjVweCcsXG4gIGhlaWdodDogJzM1MHB4JyxcbiAgdG9wOiAxMCxcbiAgcmlnaHQ6ICcwJScsXG4gIGxlZnQ6ICc0JScsXG59O1xuXG5jb25zdCBVc2VyRGl2U3R5bGVzID0ge1xuICBwYWRkaW5nOiAnMXB4JyxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkIGxpZ2h0Ymx1ZScsXG4gIGJveFNoYWRvdzogJzVweCA1cHggMCAwIGxpZ2h0Ymx1ZSwgMTBweCAxMHB4IDAgMCBsaWdodHllbGxvdycsXG4gIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgdHJhbnNpdGlvbjogJ2JveFNoYWRvdyAwLjNzLCBib3JkZXIgMC4zcycsXG4gIG92ZXJmbG9XcmFwOiAnYnJlYWtXb3JkJyxcbiAgd29yZFdyYXA6ICdicmVha1dvcmQnLFxuICBoeXBoZW5zOiAnYXV0bydcblxuXG59O1xuXG5jb25zdCBUZXh0U3R5bGVzID0gZ2xhbW9yb3VzLnRleHQoVGV4dENvbnRhaW5lcik7XG5jb25zdCBNZXNzYWdlRGl2ID0gZ2xhbW9yb3VzLmRpdihVc2VyRGl2U3R5bGVzKTtcblxuXG5jbGFzcyBHZXRNZXNzYWdlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWF0Y2gpIHtcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQ7XG4gICAgICB0aGlzLnByb3BzLmdldE1lc3NhZ2VzKGlkKTtcbiAgICAgIHRoaXMucHJvcHMuZGVsZXRlTWVzc2FnZXMoaWQpO1xuICAgICAgdGhpcy5wcm9wcy5sb2FkTWVzc2FnZXMoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5wcm9wcy5sb2FkTWVzc2FnZXMoKVxuICAgIGxldCB1c2VyRGl2cyA9ICcnO1xuICAgIHVzZXJEaXZzID0gdGhpcy5wcm9wcy5tZXNzYWdlcy5tYXAoKGQsaSkgPT4ge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPE1lc3NhZ2VEaXYga2V5ID0ge2l9PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICB7ZC5tZXNzYWdlfVxuXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9NZXNzYWdlRGl2PlxuICAgICAgKTtcbiAgICB9KTtcbiAgICByZXR1cm4gKFxuXG4gIDxUZXh0U3R5bGVzPlxuICAgIHt1c2VyRGl2c31cbiAgPC9UZXh0U3R5bGVzPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2V0TWVzc2FnZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0dldE1lc3NhZ2VzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBZEE7QUFDQTtBQWdCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQVJBO0FBQ0E7QUFXQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBT0E7QUFFQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQTFCQTtBQUNBO0FBZ0NBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=