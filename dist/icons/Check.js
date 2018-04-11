"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Check = function Check(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 60 42" }, props),
    _react2.default.createElement("path", {
      d: "M59.1 1.5C57.9.3 56 .3 54.9 1.5L21.6 34.7 5.4 18.5c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2l18.4 18.4c.6.6 1.4.9 2.1.9.8 0 1.5-.3 2.1-.9L59.1 5.7c1.2-1.1 1.2-3 0-4.2z",
      fill: "#333"
    })
  );
};

exports.default = Check;