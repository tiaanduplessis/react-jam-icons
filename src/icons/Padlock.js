import React from "react";

const Padlock = props => (
  <svg viewBox="0 0 48 64" {...props}>
    <path
      className="st0"
      d="M44 32h-2V18c0-9.9-8.1-18-18-18S6 8.1 6 18v14H4c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h40c2.2 0 4-1.8 4-4V36c0-2.2-1.8-4-4-4zM11 18c0-7.2 5.8-13 13-13s13 5.8 13 13v14H11V18zm32 41H5V37h38v22z"
    />
    <circle className="st0" cx={24} cy={48} r={5} />
  </svg>
);

export default Padlock;
