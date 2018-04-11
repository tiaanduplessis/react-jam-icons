"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TwitterSquare = function TwitterSquare(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      d: "M60 0H4C1.8 0 0 1.8 0 4v56c0 2.2 1.8 4 4 4h56c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zM48.7 23.5v1.1C48.7 35.9 40 49 24.2 49c-4.9 0-9.4-1.4-13.2-3.9.7.1 1.4.1 2.1.1 4 0 7.8-1.4 10.7-3.7-3.8-.1-6.9-2.6-8-6 .5.1 1.1.2 1.6.2.8 0 1.5-.1 2.3-.3-3.9-.8-6.9-4.3-6.9-8.4 1.2.6 2.5 1 3.9 1.1-2.3-1.5-3.8-4.2-3.8-7.1 0-1.6.4-3.1 1.2-4.3 4.3 5.2 10.6 8.6 17.8 9-.1-.6-.2-1.3-.2-2 0-4.7 3.9-8.6 8.6-8.6 2.5 0 4.7 1 6.3 2.7 2-.4 3.8-1.1 5.5-2.1-.7 2-2 3.7-3.8 4.8 1.7-.2 3.4-.7 4.9-1.4-1.4 1.6-2.8 3.2-4.5 4.4z",
      fill: "#343434"
    })
  );
};

exports.default = TwitterSquare;