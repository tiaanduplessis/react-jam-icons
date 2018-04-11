"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UList = function UList(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 38" }, props),
    _react2.default.createElement("path", {
      className: "st0",
      d: "M15 6h46c1.7 0 3-1.3 3-3s-1.3-3-3-3H15c-1.7 0-3 1.3-3 3s1.3 3 3 3z"
    }),
    _react2.default.createElement("circle", { className: "st0", cx: 3, cy: 3, r: 3 }),
    _react2.default.createElement("circle", { className: "st0", cx: 3, cy: 19, r: 3 }),
    _react2.default.createElement("circle", { className: "st0", cx: 3, cy: 35, r: 3 }),
    _react2.default.createElement("path", {
      className: "st0",
      d: "M61 16H15c-1.7 0-3 1.3-3 3s1.3 3 3 3h46c1.7 0 3-1.3 3-3s-1.3-3-3-3zm0 16H15c-1.7 0-3 1.3-3 3s1.3 3 3 3h46c1.7 0 3-1.3 3-3s-1.3-3-3-3z"
    })
  );
};

exports.default = UList;