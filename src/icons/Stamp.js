import React from "react";

const Stamp = props => (
  <svg viewBox="0 0 64 64" {...props}>
    <path
      d="M62 45H47v-2.5c0-3-2.5-5.5-5.5-5.5H38V24c1.5-6 4-11.7 4-14 0-5.6-4.5-10-10-10S22 4.4 22 10c0 2.3 2.6 8 4 14v13h-3.5c-3 0-5.5 2.5-5.5 5.5V45H2c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h3v5h54v-5h3c1.1 0 2-.9 2-2V47c0-1.1-.9-2-2-2zM32 4c3.3 0 6 2.7 6 6 0 .2-.2 1-.6 2.3-.3.8-1.5 4.5-1.7 5.2-.7 2-1.2 3.8-1.6 5.4h-4.3c-.4-1.6-.9-3.4-1.6-5.5-.2-.7-1.4-4.3-1.7-5.2-.3-1.2-.5-2-.5-2.2 0-3.3 2.7-6 6-6zm-2 23h4v10h-4V27zm-9 15.5c0-.8.7-1.5 1.5-1.5h19c.8 0 1.5.7 1.5 1.5V44H21v-1.5zM56 61H8v-2h48v2zm4-6H4v-6h56v6z"
      fill="#343434"
    />
  </svg>
);

export default Stamp;
