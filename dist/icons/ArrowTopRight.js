"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowTopRight = function ArrowTopRight(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 63 63" }, props),
    _react2.default.createElement("path", {
      d: "M60 0H18c-1.7 0-3 1.3-3 3s1.3 3 3 3h35L1.1 57.9c-1.2 1.2-1.2 3.1 0 4.2s3.1 1.2 4.2 0L57 10.5V45c0 1.7 1.3 3 3 3s3-1.3 3-3V3c0-1.7-1.3-3-3-3z",
      fill: "#333"
    })
  );
};

exports.default = ArrowTopRight;