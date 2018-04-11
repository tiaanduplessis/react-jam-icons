"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Magic = function Magic(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 63 63" }, props),
    _react2.default.createElement("path", {
      d: "M43.2 16c-.8-.8-2-.8-2.8 0L.7 55.6c-.8.8-.8 2 0 2.8L4.3 62c.8.8 2 .8 2.8 0l39.6-39.6c.8-.8.8-2 0-2.8L43.2 16zM5.7 59.2l-2.1-2.1 29-29 2.1 2.1-29 29zm31.1-31.1L34.7 26l7.1-7.1 2.1 2.1-7.1 7.1zm9.872-14.142l8.485-8.485 1.414 1.414-8.485 8.485zM26.873 6.889l1.414-1.414 8.485 8.485-1.414 1.414zM41.1 29.1h2v12h-2zm0-29h2v12h-2zm9.5 19.5h12v2h-12zm-29 0h12v2h-12zm25.77 7.795l1.414-1.414 8.485 8.485-1.414 1.414z",
      fill: "#333"
    })
  );
};

exports.default = Magic;