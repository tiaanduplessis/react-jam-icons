"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MapMarkerF = function MapMarkerF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 45 64" }, props),
    _react2.default.createElement("path", {
      d: "M22 0C8.7 0 .4 9.1.4 22.3l20.4 40.6c.6.9 1.7.9 2.4 0 0 0 20.9-27.4 20.9-40.6S35.3 0 22 0zm0 35c-7.7 0-14-6.3-14-14S14.3 7 22 7s14 6.3 14 14-6.3 14-14 14z",
      fill: "#333"
    })
  );
};

exports.default = MapMarkerF;