"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ArrowRight = function ArrowRight(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 63 62" }, props),
    _react2.default.createElement("path", {
      d: "M61.5 28.7L33.9 1.1c-1.2-1.2-3.1-1.2-4.2 0-1.2 1.2-1.2 3.1 0 4.2L52.3 28H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h49L29.7 56.3c-1.2 1.2-1.2 3.1 0 4.2 1.2 1.2 3.1 1.2 4.2 0l27.6-27.6c.6-.5.9-1.3.9-2.1s-.3-1.5-.9-2.1z",
      fill: "#333"
    })
  );
};

exports.default = ArrowRight;