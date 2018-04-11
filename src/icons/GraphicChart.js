import React from "react";

const GraphicChart = props => (
  <svg viewBox="0 0 64 64" {...props}>
    <path
      d="M6 58V0H0v64h64v-6zm26-5h29L46.5 40l-3.6 3.3L32.5 19l-8.2 19.3L21 32 10 53h8z"
      fill="#333"
    />
  </svg>
);

export default GraphicChart;
