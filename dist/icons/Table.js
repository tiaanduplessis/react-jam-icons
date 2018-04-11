"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = function Table(props) {
  return _react2.default.createElement(
    "svg",
    _extends({ viewBox: "0 0 64 64" }, props),
    _react2.default.createElement("path", {
      d: "M57.2 0H6.8C3 0 0 3 0 6.8V61c0 1.6 1.3 3 3 3h58c1.6 0 3-1.3 3-3V6.8C64 3 61 0 57.2 0zM15 60H4v-9h11v9zm0-13H4v-9h11v9zm0-13H4v-9h11v9zm0-13H4v-9h11v9zm15 39H19v-9h11v9zm0-13H19v-9h11v9zm0-13H19v-9h11v9zm0-13H19v-9h11v9zm15 39H34v-9h11v9zm0-13H34v-9h11v9zm0-13H34v-9h11v9zm0-13H34v-9h11v9zm15 39H49v-9h11v9zm0-13H49v-9h11v9zm0-13H49v-9h11v9zm0-13H49v-9h11v9z",
      fill: "#333"
    })
  );
};

exports.default = Table;