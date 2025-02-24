import * as React from "react";

const SVGComponent = (props) => (
  <svg
    width={14}
    height={14}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.973 12.161v-10.4m0 10.4 3.467-3.466M6.973 12.16 3.507 8.695"
      stroke="currentColor" 
      strokeWidth={1.155}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SVGComponent;