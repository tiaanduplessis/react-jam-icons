"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IdCard = function IdCard(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 42" }, props),
    _react2.default.createElement("path", {
      d: "M59 0H5C2.2 0 0 2.2 0 5v32c0 2.8 2.2 5 5 5h54c2.8 0 5-2.2 5-5V5c0-2.8-2.2-5-5-5zm1 37c0 .6-.4 1-1 1H5c-.5 0-1-.4-1-1V5c0-.6.4-1 1-1h54c.5 0 1 .4 1 1v32zM21 10H10c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V12c0-1.1-.9-2-2-2zm33 0H29c-1.1 0-2 .9-2 2s.9 2 2 2h25c1.1 0 2-.9 2-2s-.9-2-2-2zm0 6H29c-1.1 0-2 .9-2 2s.9 2 2 2h25c1.1 0 2-.9 2-2s-.9-2-2-2zm-21 6h-4c-1.1 0-2 .9-2 2s.9 2 2 2h4c1.1 0 2-.9 2-2s-.9-2-2-2zm10 0h-4c-1.1 0-2 .9-2 2s.9 2 2 2h4c1.1 0 2-.9 2-2s-.9-2-2-2z",
      fill: "#333"
    })
  );
};

exports.default = IdCard;