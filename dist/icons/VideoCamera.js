"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoCamera = function VideoCamera(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 65 36" }, props),
    _react2.default.createElement("path", {
      d: "M64 .9L51 7.5V3c0-1.1-.9-2-2-2H2C.9 1 0 1.9 0 3v30c0 1.1.9 2 2 2h47c1.1 0 2-.9 2-2v-4.4l13 6.6V.9zM47 31H4V5h43v26zm13-2.3l-9-4.5V11.9l9-4.5v21.3z",
      fill: "#343434"
    })
  );
};

exports.default = VideoCamera;