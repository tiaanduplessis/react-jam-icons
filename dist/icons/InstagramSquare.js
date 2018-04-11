"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InstagramSquare = function InstagramSquare(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      className: "st0",
      d: "M61 0H3C1.3 0 0 1.3 0 3v58c0 1.7 1.3 3 3 3h58c1.7 0 3-1.3 3-3V3c0-1.7-1.3-3-3-3zm-9 40.1C52 46.7 46.7 52 40.1 52H23.9c-6.5 0-11.7-5.2-11.9-11.6V23.6c.2-6.5 5.5-11.6 11.9-11.6h16.2C46.7 12 52 17.3 52 23.9v16.2zM40.1 16H23.9c-4.4 0-7.9 3.5-7.9 7.9v16.2c0 4.4 3.5 7.9 7.9 7.9h16.2c4.4 0 7.9-3.5 7.9-7.9V23.9c0-4.3-3.6-7.9-7.9-7.9zm-7.6 27C26.7 43 22 38.3 22 32.5S26.7 22 32.5 22 43 26.7 43 32.5 38.3 43 32.5 43zm10-19c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5z"
    }),
    _react2.default.createElement("circle", { className: "st0", cx: 32.5, cy: 32.5, r: 6.4 })
  );
};

exports.default = InstagramSquare;