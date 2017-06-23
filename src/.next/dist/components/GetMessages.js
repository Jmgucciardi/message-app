"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require("babel-runtime/core-js/object/get-prototype-of");

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _jsxFileName = "/Users/jonmgucciardi/Desktop/message-app/src/components/GetMessages.js";

var _react = require("react");

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