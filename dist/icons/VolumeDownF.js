"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VolumeDownF = function VolumeDownF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 46 64" }, props),
    _react2.default.createElement("path", {
      d: "M27.7 1.6L10.4 20.3H2c-1.1 0-2 .9-2 2v20.4c0 1.1.9 2 2 2h8.6l17.2 18.6c1.1 1.2 2 .9 2-.8V2.4c0-1.7-.9-2-2.1-.8zM35 21v6c2.8 0 5 2.2 5 5s-2.2 5-5 5v6c6.1 0 11-4.9 11-11s-4.9-11-11-11z",
      fill: "#333"
    })
  );
};

exports.default = VolumeDownF;