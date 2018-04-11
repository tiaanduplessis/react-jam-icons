import React from "react";

const Smiley = props => (
  <svg viewBox="0 0 64 64" {...props}>
    <path
      className="st0"
      d="M32 0C14.3 0 0 14.3 0 32s14.3 32 32 32 32-14.3 32-32S49.7 0 32 0zm0 60C16.5 60 4 47.5 4 32S16.5 4 32 4s28 12.5 28 28-12.5 28-28 28z"
    />
    <circle className="st0" cx={43} cy={26} r={5} />
    <circle className="st0" cx={21} cy={26} r={5} />
    <path
      className="st0"
      d="M43.1 44c-.6 0-1.1.2-1.4.6-2.1 2-5.6 3.4-9.7 3.4s-7.5-1.4-9.7-3.3c-.3-.4-.9-.7-1.4-.7-1.1 0-2 .9-2 2 0 .5.2.9.4 1.2l.1.1c.1.1.2.2.4.3C22.7 50.3 27.1 52 32 52c5.1 0 9.6-1.8 12.5-4.5.4-.4.6-.9.6-1.4 0-1.2-.9-2.1-2-2.1z"
    />
  </svg>
);

export default Smiley;
