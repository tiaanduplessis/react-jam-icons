import React from "react";

const Disc = props => (
  <svg viewBox="0 0 64 64" {...props}>
    <path
      className="st0"
      d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zm0 60C16.5 60 4 47.5 4 32S16.5 4 32 4s28 12.5 28 28-12.5 28-28 28z"
    />
    <circle className="st0" cx={32} cy={32} r={4} />
    <path
      className="st0"
      d="M32 21c-6.1 0-11 4.9-11 11s4.9 11 11 11 11-4.9 11-11-4.9-11-11-11zm0 18c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"
    />
  </svg>
);

export default Disc;
