webpackHotUpdate(6,{

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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi40OTc5ZjgzNjU5MThhMTIzMzRiYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9HZXRNZXNzYWdlcy5qcz8wODlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEdldE1lc3NhZ2VzIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdmlzaWJsZTogdHJ1ZSxcblxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5tYXRjaCkge1xuICAgICAgY29uc3QgaWQgPSB0aGlzLnByb3BzLm1hdGNoLnBhcmFtcy5pZDtcbiAgICAgIHRoaXMucHJvcHMuZ2V0TWVzc2FnZXMoaWQpO1xuICAgICAgdGhpcy5wcm9wcy5kZWxldGVNZXNzYWdlcyhpZCk7XG4gICAgICB0aGlzLnByb3BzLmxvYWRNZXNzYWdlcygpO1xuICAgIH1cbiAgfVxuXG5cblxuICByZW5kZXIoKSB7XG5cbiAgICB0aGlzLnByb3BzLmxvYWRNZXNzYWdlcygpO1xuXG4gICAgbGV0IGJ1dHRvblRleHQgPSBcIkhpZGVcIjtcbiAgICBsZXQgdXNlckRpdnMgPSBcIlwiO1xuICAgIGlmICh0aGlzLnN0YXRlLnZpc2libGUpIHtcbiAgICAgIGJ1dHRvblRleHQgPSBcIkhpZGVcIjtcbiAgICAgIHVzZXJEaXZzID0gdGhpcy5wcm9wcy5tZXNzYWdlcy5tYXAoKGQsaSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXYga2V5PXtpfT5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPGxpPiB7ZC5tZXNzYWdlfSA8L2xpPlxuXG4gICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmRlbGV0ZU1lc3NhZ2VzKGAke2QuX2lkfWApfT5cbiAgICAgICAgICAgICAgICBSZW1vdmVcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJ1dHRvblRleHQgPSBcIlNob3dcIjtcbiAgICAgIHVzZXJEaXZzID0gXCJcIjtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgPGRpdiBjbGFzc05hbWU9XCJtZXNzYWdlQ29udGFpbmVyXCIgaWQ9XCJNQ1wiXG4gICAgICBzdHlsZT17e1xuICAgICAgICBib3JkZXJzdHlsZTogJ3NvbGlkJyxcbiAgICAgICAgb3ZlcmZsb3c6ICdhdXRvJyxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIHdpZHRoOiAnNTAwcHgnLFxuICAgICAgICBoZWlnaHQ6ICcyNTBweCcsXG4gICAgICAgIHRvcDogJzIwcHgnLFxuICAgICAgICByaWdodDogJzc1JScsXG4gICAgICAgIGxlZnQ6ICc1MCUnLFxuICAgICAgfX0+XG4gICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgdmlzaWJsZTogIXRoaXMuc3RhdGUudmlzaWJsZVxuICAgICAgfSk7XG4gICAgfVxuICAgIH0+XG4gICAgICB7YnV0dG9uVGV4dH1cbiAgICA8L2J1dHRvbj5cbiAgICB7dXNlckRpdnN9XG4gIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2V0TWVzc2FnZXM7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0dldE1lc3NhZ2VzLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7OztBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFoQkE7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVBBO0FBRkE7QUFXQTtBQVhBO0FBQUE7QUFZQTtBQUNBO0FBQUE7QUFGQTtBQUFBO0FBTUE7QUFOQTtBQVFBOzs7O0FBbEVBO0FBQ0E7QUF1RUE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==