"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Linkedin = function Linkedin(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 61" }, props),
    _react2.default.createElement("path", {
      d: "M0 20h14v41H0zm59.7 3.7C56.8 20.6 53 19 48.2 19c-1.8 0-3.3.2-4.8.6-1.4.4-2.6 1-3.6 1.8s-1.8 1.5-2.4 2.2c-.6.6-1.1 1.4-1.6 2.2V20H22v14.3c0 6.8 0 15.8-.1 26.8h13.8v-23c0-1.4.2-2.5.5-3.4.6-1.4 1.5-2.6 2.7-3.5 1.2-1 2.7-1.4 4.4-1.4 2.4 0 4.2.8 5.3 2.5 1.1 1.6 1.7 3.9 1.7 6.8v22H64V37.5c0-6.1-1.4-10.7-4.3-13.8zM6.9 14c2.2 0 3.9-.7 5.2-2 1.3-1.3 1.9-3 1.9-5s-.7-3.7-1.9-5c-1.3-1.3-2.9-2-5-2-2.2 0-3.9.7-5.2 2C.6 3.3 0 5 0 7s.6 3.7 1.9 5c1.3 1.3 2.9 2 5 2z",
      fill: "#343434"
    })
  );
};

exports.default = Linkedin;