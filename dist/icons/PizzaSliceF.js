"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PizzaSliceF = function PizzaSliceF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 58 63" }, props),
    _react2.default.createElement("path", {
      d: "M3.4 12.9l24.2 48.5c.7 1.5 1.9 1.5 2.7 0l24-48.1C46.6 9.3 37.8 7 28.5 7c-9 0-17.5 2.1-25.1 5.9zM18 28c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm15 2c2.8 0 5 2.2 5 5s-2.2 5-5 5-5-2.2-5-5 2.2-5 5-5zM28.5 0C18.4 0 8.8 2.4.3 6.6l1.8 3.6C10 6.2 19 4 28.5 4c9.8 0 19.1 2.4 27.2 6.6L57.5 7c-8.7-4.5-18.6-7-29-7z",
      fill: "#333"
    })
  );
};

exports.default = PizzaSliceF;