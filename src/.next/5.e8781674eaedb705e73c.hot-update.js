webpackHotUpdate(5,{

/***/ 579:
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
  color: 'limegreen'
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
      var _this2 = this;

      this.props.loadMessages();
      var userDivs = '';

      userDivs = this.props.messages.map(function (d, i) {
        return _react2.default.createElement(MessageDiv, { key: i, __source: {
            fileName: _jsxFileName,
            lineNumber: 53
          }
        }, _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 54
          }
        }, 'UserName: ', d.message, _react2.default.createElement('button', { onClick: function onClick() {
            return _this2.props.deleteMessages('' + d._id);
          }, __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          }
        }, 'Remove')));
      });

      return _react2.default.createElement(TextStyles, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5lODc4MTY3NGVhZWRiNzA1ZTczYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HZXRNZXNzYWdlcy5qcz9kNTY3ZDExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgZ2xhbW9yb3VzIGZyb20gJ2dsYW1vcm91cyc7XG5cblxuY29uc3QgVGV4dENvbnRhaW5lciA9IHtcbiAgcGFkZGluZzogJzFweCcsXG4gIGJvcmRlcjogJzFweCBzb2xpZCBsaWdodGJsdWUnLFxuICBib3hTaGFkb3c6ICc1cHggNXB4IDAgMCBsaWdodGJsdWUsIDEwcHggMTBweCAwIDAgbGlnaHR5ZWxsb3cnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXG4gIHRyYW5zaXRpb246ICdib3hTaGFkb3cgMC4zcywgYm9yZGVyIDAuM3MnLFxuICBib3JkZXJzdHlsZTogJ3NvbGlkJyxcbiAgb3ZlcmZsb3dZOiAnYXV0bycsXG4gIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICB3aWR0aDogJzgyNXB4JyxcbiAgaGVpZ2h0OiAnMzUwcHgnLFxuICB0b3A6IDEwLFxuICByaWdodDogJzAlJyxcbiAgbGVmdDogJzQlJyxcbn07XG5cbmNvbnN0IFVzZXJEaXZTdHlsZXMgPSB7XG4gIHBhZGRpbmc6ICcxcHgnLFxuICBib3JkZXI6ICcxcHggc29saWQgbGlnaHRibHVlJyxcbiAgYm94U2hhZG93OiAnNXB4IDVweCAwIDAgbGlnaHRibHVlLCAxMHB4IDEwcHggMCAwIGxpZ2h0eWVsbG93JyxcbiAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICB0cmFuc2l0aW9uOiAnYm94U2hhZG93IDAuM3MsIGJvcmRlciAwLjNzJyxcbiAgY29sb3I6ICdsaW1lZ3JlZW4nLFxufTtcblxuY29uc3QgVGV4dFN0eWxlcyA9IGdsYW1vcm91cy50ZXh0KFRleHRDb250YWluZXIpO1xuY29uc3QgTWVzc2FnZURpdiA9IGdsYW1vcm91cy5kaXYoVXNlckRpdlN0eWxlcyk7XG5cblxuXG5jbGFzcyBHZXRNZXNzYWdlcyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMubWF0Y2gpIHtcbiAgICAgIGNvbnN0IGlkID0gdGhpcy5wcm9wcy5tYXRjaC5wYXJhbXMuaWQ7XG4gICAgICB0aGlzLnByb3BzLmdldE1lc3NhZ2VzKGlkKTtcbiAgICAgIHRoaXMucHJvcHMuZGVsZXRlTWVzc2FnZXMoaWQpO1xuICAgICAgdGhpcy5wcm9wcy5sb2FkTWVzc2FnZXMoKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgdGhpcy5wcm9wcy5sb2FkTWVzc2FnZXMoKVxuICAgIGxldCB1c2VyRGl2cyA9ICcnO1xuXG5cbiAgICB1c2VyRGl2cyA9IHRoaXMucHJvcHMubWVzc2FnZXMubWFwKChkLGkpID0+IHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxNZXNzYWdlRGl2IGtleSA9IHtpfT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICBVc2VyTmFtZToge2QubWVzc2FnZX1cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuZGVsZXRlTWVzc2FnZXMoYCR7ZC5faWR9YCl9PlxuICAgICAgICAgICAgICAgIFJlbW92ZVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L01lc3NhZ2VEaXY+XG5cbiAgICAgICk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gKFxuICA8VGV4dFN0eWxlcz5cbiAgICAgIHt1c2VyRGl2c31cbiAgPC9UZXh0U3R5bGVzPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2V0TWVzc2FnZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0dldE1lc3NhZ2VzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7O0FBQUE7QUFDQTs7Ozs7OztBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFaQTtBQUNBO0FBY0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFMQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBR0E7Ozs7Ozs7Ozs7QUFHQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFRQTtBQUVBO0FBQ0E7QUFBQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7OztBQWhDQTtBQUNBO0FBc0NBO0FBQ0E7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=