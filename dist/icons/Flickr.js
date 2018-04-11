"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flickr = function Flickr(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 29" }, props),
    _react2.default.createElement("path", {
      d: "M64 14.5c0 8-6.5 14.5-14.5 14.5S35 22.5 35 14.5 41.5 0 49.5 0 64 6.5 64 14.5zM14.5 0C6.5 0 0 6.5 0 14.5S6.5 29 14.5 29 29 22.5 29 14.5 22.5 0 14.5 0z",
      fill: "#343434"
    })
  );
};

exports.default = Flickr;