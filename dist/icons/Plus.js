"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Plus = function Plus(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      d: "M61 29H35V3c0-1.7-1.3-3-3-3s-3 1.3-3 3v26H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h26v26c0 1.7 1.3 3 3 3s3-1.3 3-3V35h26c1.7 0 3-1.3 3-3s-1.3-3-3-3z",
      fill: "#333"
    })
  );
};

exports.default = Plus;