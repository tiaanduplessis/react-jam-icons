"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Pause = function Pause(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 48 64" }, props),
    _react2.default.createElement("path", {
      d: "M12 0H4C1.8 0 0 1.8 0 4v56c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm-2 58H6V6h4v52zM44 0h-8c-2.2 0-4 1.8-4 4v56c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4V4c0-2.2-1.8-4-4-4zm-2 58h-4V6h4v52z",
      fill: "#343434"
    })
  );
};

exports.default = Pause;