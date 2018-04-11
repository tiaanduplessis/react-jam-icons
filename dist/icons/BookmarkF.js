"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BookmarkF = function BookmarkF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 54 64" }, props),
    _react2.default.createElement("path", {
      d: "M53 13.6V4c0-2.2-1.8-4-4-4H5C2.8 0 1 1.8 1 4v9.6c0 .1-.1.3-.1.5v42.8c0 7.6 4.3 9.3 9.5 3.9L27 43.6l16.2 16.8c5.4 5.6 9.8 3.8 9.8-4V14.1c.1-.2 0-.4 0-.5z",
      fill: "#333"
    })
  );
};

exports.default = BookmarkF;