"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Camera = function Camera(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 50" }, props),
    _react2.default.createElement(
      "g",
      { id: "camera" },
      _react2.default.createElement("path", {
        id: "Combined-Shape",
        className: "st0",
        d: "M47.8 10.7V8.2c0-2.3-2-4.2-4.4-4.2H20.7c-2.4 0-4.4 1.9-4.4 4.2v2.5h-7c-2.9 0-5.2 2.3-5.2 5V41c0 2.8 2.3 5 5.2 5h45.5c2.9 0 5.2-2.3 5.2-5V15.8c0-2.8-2.3-5-5.2-5h-7m7.3-3.9c4.9 0 8.9 3.9 8.9 8.6v25.9c0 4.8-4 8.6-8.9 8.6H8.9C4 50 0 46.1 0 41.4V15.5c0-4.8 4-8.6 8.9-8.6h3.6C12.9 3 16.3 0 20.4 0h23.1c4.1 0 7.5 3 8 6.9h3.6z"
      }),
      _react2.default.createElement("path", {
        id: "Oval-40",
        className: "st0",
        d: "M32 39c6.6 0 12-5.4 12-12s-5.4-12-12-12-12 5.4-12 12 5.4 12 12 12zm0 4c-8.8 0-16-7.2-16-16s7.2-16 16-16 16 7.2 16 16-7.2 16-16 16z"
      }),
      _react2.default.createElement("circle", { id: "Oval-41", cx: 53, cy: 18, r: 3, fill: "#333" })
    )
  );
};

exports.default = Camera;