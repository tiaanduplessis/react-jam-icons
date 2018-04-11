"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TreeAlt = function TreeAlt(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 49 64" }, props),
    _react2.default.createElement("path", {
      d: "M40.5 14.3C39.9 6.3 33.2 0 25 0 17.7 0 11.6 4.9 9.8 11.8 4.1 13.4 0 18.5 0 24.5c0 7.3 6.2 13.2 13.7 13.2 1.7 0 3.4-.3 5-.9V61c0 1.6 1.3 2.9 2.9 2.9h5.6c1.6 0 2.9-1.3 2.9-2.9V36.6c1-.5 2-1.1 2.9-1.9 1.5.8 3.2 1.2 5 1.2 6.1 0 11-4.9 11-10.9 0-5.2-3.6-9.6-8.5-10.7zm-2.4 17.6c-1.5 0-2.9-.5-4.1-1.3l-1.5-1.1-1.2 1.3c-1 1.2-2.3 2-3.7 2.5l-1.4.5V60h-3.5V33.6l-1.1-.6c-.3-.1-.6-.3-1-.5l-1-.6-1 .6c-1.5.8-3.1 1.3-4.9 1.3-5.4 0-9.7-4.2-9.7-9.2 0-4.4 3.3-8.3 7.9-9.1l1.4-.3.2-1.4C14.4 8.2 19.2 4 25 4c6.4 0 11.6 5.2 11.6 11.6v.4l-.1 2 2 .1c3.7.2 6.5 3.2 6.5 6.9 0 3.8-3.1 6.9-6.9 6.9z",
      fill: "#343434"
    })
  );
};

exports.default = TreeAlt;