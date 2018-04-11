"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Magnet = function Magnet(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 56 64" }, props),
    _react2.default.createElement("path", {
      d: "M28 0C12.5 0 0 12.5 0 28v32c0 2.2 1.8 4 4 4h11c2.2 0 4-1.8 4-4V29c0-5 4-9 9-9s9 4 9 9v31c0 2.2 1.8 4 4 4h11c2.2 0 4-1.8 4-4V28C56 12.5 43.5 0 28 0zM15 60H4V48h11v12zm13-44c-7.2 0-13 5.8-13 13v15H4V28C4 14.7 14.7 4 28 4s24 10.7 24 24v16H41V29c0-7.2-5.8-13-13-13zm24 44H41V48h11v12z",
      fill: "#343434"
    })
  );
};

exports.default = Magnet;