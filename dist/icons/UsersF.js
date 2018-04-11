"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UsersF = function UsersF(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      d: "M60.5 27.1s-3.1-2.1-8.3-3.3C55.7 21.5 58 17.5 58 13c0-7.2-5.8-13-13-13S32 5.8 32 13c0 4.5 2.3 8.5 5.8 10.8-2.5.6-4.4 1.3-5.8 2-.7-6.6-6.2-11.8-13-11.8-7.2 0-13 5.8-13 13 0 4.5 2.3 8.5 5.8 10.8-5.2 1.2-8.3 3.3-8.3 3.3C1.6 42.2 0 44.8 0 47v13c0 2.2 1.8 4 4 4h30c2.2 0 4-1.8 4-4V50h22c2.2 0 4-1.8 4-4V33c0-2.2-1.5-4.9-3.5-5.9z",
      fill: "#343434"
    })
  );
};

exports.default = UsersF;