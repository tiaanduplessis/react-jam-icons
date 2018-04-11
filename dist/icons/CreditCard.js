"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CreditCard = function CreditCard(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 42" }, props),
    _react2.default.createElement("path", {
      d: "M60 0H4C1.8 0 0 1.8 0 4v34c0 2.2 1.8 4 4 4h56c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm0 37c0 .5-.4 1-1 1H5c-.5 0-1-.4-1-1V18h56v19zM4 8V5c0-.5.4-1 1-1h54c.5 0 1 .4 1 1v3H4zm19.5 26h11c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-11c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5zm0-5h11c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-11c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5zM8 36h8c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2z",
      fill: "#333"
    })
  );
};

exports.default = CreditCard;