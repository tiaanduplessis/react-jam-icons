import React from "react";

const Calendar = props => (
  <svg viewBox="0 0 64 52" {...props}>
    <path
      className="st0"
      d="M60 8h-7V2c0-1.1-.9-2-2-2s-2 .9-2 2v6h-9V2c0-1.1-.9-2-2-2s-2 .9-2 2v6h-9V2c0-1.1-.9-2-2-2s-2 .9-2 2v6h-9V2c0-1.1-.9-2-2-2s-2 .9-2 2v6H4c-2.2 0-4 1.8-4 4v36c0 2.2 1.8 4 4 4h56c2.2 0 4-1.8 4-4V12c0-2.2-1.8-4-4-4zm0 40H4V12h6c0 1.1.9 2 2 2s2-.9 2-2h9c0 1.1.9 2 2 2s2-.9 2-2h9c0 1.1.9 2 2 2s2-.9 2-2h9c0 1.1.9 2 2 2s2-.9 2-2h7v36z"
    />
    <circle className="st0" cx={26} cy={21} r={2} />
    <circle className="st0" cx={14} cy={21} r={2} />
    <circle className="st0" cx={26} cy={31} r={2} />
    <circle className="st0" cx={26} cy={41} r={2} />
    <circle className="st0" cx={14} cy={31} r={2} />
    <circle className="st0" cx={14} cy={41} r={2} />
    <circle className="st0" cx={50} cy={31} r={2} />
    <circle className="st0" cx={50} cy={41} r={2} />
    <circle className="st0" cx={38} cy={41} r={2} />
    <circle className="st0" cx={50} cy={21} r={2} />
    <circle className="st0" cx={38} cy={31} r={2} />
    <circle className="st0" cx={38} cy={21} r={2} />
  </svg>
);

export default Calendar;
