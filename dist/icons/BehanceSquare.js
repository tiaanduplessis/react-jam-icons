"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BehanceSquare = function BehanceSquare(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement(
      "g",
      { id: "behance-square" },
      _react2.default.createElement("path", {
        id: "Combined-Shape",
        className: "st0",
        d: "M0 4c0-2.2 1.8-4 4-4h56c2.2 0 4 1.8 4 4v56c0 2.2-1.8 4-4 4H4c-2.2 0-4-1.8-4-4V4zm27.4 26.7S32 30.4 32 25s-3.7-8-8.4-8H8v30h15.5s9.5.3 9.5-8.9c0 0 .4-7.4-5.6-7.4zM40 22h12v-4H40v4zm5.5 2C34 24 34 35.5 34 35.5S33.2 47 45.5 47c0 0 10.2.6 10.2-8h-5.3s.2 3.2-4.8 3.2c0 0-5.3.4-5.3-5.2h15.5c.1 0 1.8-13-10.3-13z"
      }),
      _react2.default.createElement("path", {
        id: "Fill-1",
        className: "st0",
        d: "M23.1 41.7h-8.3v-8h8.7s3.1 0 3.1 4.1c.1 3.4-2.2 3.8-3.5 3.9z"
      }),
      _react2.default.createElement("path", {
        id: "Fill-1_1_",
        className: "st0",
        d: "M14.8 22.3h8.7s2.1 0 2.1 3.1S24.4 29 23 29h-8.1v-6.7z"
      }),
      _react2.default.createElement("path", {
        id: "Fill-4",
        className: "st0",
        d: "M50.2 33h-9.8s.6-4.6 5.3-4.6c4.5 0 4.5 4.6 4.5 4.6z"
      })
    )
  );
};

exports.default = BehanceSquare;