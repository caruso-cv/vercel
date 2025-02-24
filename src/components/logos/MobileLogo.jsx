import * as React from "react";

const SVGComponent = ({ className, ...props }) => {
  return (
    <svg
      // let Tailwind classes control the width/height instead of fixed values
      className={className}
      // set up the default viewbox
      viewBox="0 0 46 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M43.133 5.741 45.095.593H38.29L36.33 5.74h6.804ZM23.554 18.049l.534-1.551-5.953-9.504H3.695v.19c.932.576 1.4 1.167 1.4 1.773v.931c0 .203-1.555 4.96-4.666 14.274h8.397l4.576-13.23 8.237 13.23h8.397l2.09-6.113h-8.572ZM36.33 5.742H25.326v.189c.932.576 1.4 1.167 1.4 1.773v.931c0 .057-.123.468-.364 1.23-.152.472-.322.988-.506 1.546h8.534l1.508-4.417.426-1.252h.004Z"
        fill="currentColor"
      />
      <path
        d="m40.812 18.049 2.278-6.638h-8.713l-2.28 6.638h8.715Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SVGComponent;