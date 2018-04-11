"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TreeAltF = function TreeAltF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 48 64" }, props),
    _react2.default.createElement("path", {
      d: "M39 15v-.5C39 6.5 32.5 0 24.5 0c-7.2 0-13.2 5.3-14.3 12.2C4.4 13.3 0 18.1 0 24c0 6.6 5.6 12 12.5 12 2.3 0 4.4-.6 6.2-1.6l1.2.7v28c0 .5.4 1 1 1h6c.5 0 1-.4 1-1V35.4c1.9-.6 3.6-1.8 4.9-3.3 1.6 1.1 3.5 1.8 5.6 1.8 5.2 0 9.5-4.3 9.5-9.5.1-5-3.9-9.1-8.9-9.4z",
      fill: "#333"
    })
  );
};

exports.default = TreeAltF;