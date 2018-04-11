"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Mountains = function Mountains(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ width: 62, height: 50 }, props),
    _react2.default.createElement(
      "g",
      { fill: "#343434" },
      _react2.default.createElement("path", { d: "M5.472 46h39.056L25 6.944 5.472 46zM22.761 2.478c1.237-2.473 3.243-2.472 4.478 0L51 50H4.01c-2.767 0-4.006-2.007-2.77-4.478L22.762 2.479z" }),
      _react2.default.createElement("path", { d: "M42.5 17.944l-3.649 7.299L49.336 46h7.192L42.5 17.944zm-8.126 7.308l5.889-11.779c1.235-2.471 3.239-2.468 4.47-.007l16.034 32.068C62 48 60.758 50 58.008 50H46.875L34.374 25.252z" }),
      _react2.default.createElement("path", { d: "M37.1 28.786l1.799-3.572-9.47-4.77c-.985-.496-2.537-.416-3.467.179l-1.029.658a1.09 1.09 0 0 1-1.439-.26l-3.892-5.218-3.206 2.392 5.514 7.391c.663.889 1.956 1.125 2.883.533l2.247-1.438c.465-.298 1.238-.339 1.743-.085l8.317 4.189zm13.109 2.42l1.57-3.679-5.663-2.417c-1.013-.432-2.617-.341-3.576.2l-4.063 2.291 1.965 3.484 3.219-1.815c.479-.27 1.275-.314 1.779-.099l4.769 2.035z" })
    )
  );
};

exports.default = Mountains;