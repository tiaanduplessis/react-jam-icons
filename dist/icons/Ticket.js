"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ticket = function Ticket(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 38 64" }, props),
    _react2.default.createElement("path", {
      d: "M26.9 0c0 4.4-3.3 8-7.4 8C15.4 8 12 4.4 12 0H0v64h12c0-4.4 3.3-8 7.4-8 4.1 0 7.4 3.6 7.4 8H38V0H26.9zm3.3 60c-1.6-4.6-5.7-8-10.8-8-5 0-9.2 3.4-10.8 8H4V23h9v-3H4V4h4.7c1.6 4.6 5.7 8 10.8 8 5 0 9.2-3.4 10.8-8H34v16H21v3h13v37h-3.8zM15 20h4v3h-4z",
      fill: "#333"
    })
  );
};

exports.default = Ticket;