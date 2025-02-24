import * as React from "react";

const BoltIcon = ({ className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 34.48 34.4"
    fill="none"
    className={className}
    {...props}
  >
    <defs>
      <clipPath id="a">
        <path fill="none" d="M0 .05h34.48v32.58H0z" />
      </clipPath>
    </defs>
    <g clipPath="url(#a)">
      <path
        fill="currentColor"
        d="m13.44 31.77 12.5-16.6h-10.6l4-11.9c.1-.4-.4-.7-.6-.3-1.5 2.3.2-.4-10 15.1a1 1 0 0 0 .8 1.6h8l-4.7 11.7c-.2.4.3.7.6.4"
      />
    </g>
  </svg>
);

export default BoltIcon;