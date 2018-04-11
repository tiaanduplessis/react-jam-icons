"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlignJustify = function AlignJustify(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 48" }, props),
    _react2.default.createElement("path", {
      d: "M3 6h58c1.7 0 3-1.3 3-3s-1.3-3-3-3H3C1.3 0 0 1.3 0 3s1.3 3 3 3zm58 22H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h58c1.7 0 3-1.3 3-3s-1.3-3-3-3zm0-14H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h58c1.7 0 3-1.3 3-3s-1.3-3-3-3zm0 28H3c-1.7 0-3 1.3-3 3s1.3 3 3 3h58c1.7 0 3-1.3 3-3s-1.3-3-3-3z",
      fill: "#333"
    })
  );
};

exports.default = AlignJustify;