import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 60 40"
    {...props}
  >
    <path
      fill="#478BEB"
      fillRule="evenodd"
      d="m38.383 34.386 2.586 2.586a2 2 0 0 0 2.828 0l15.556-15.556a2 2 0 0 0 0-2.829L43.797 3.031a2 2 0 0 0-2.828 0l-2.586 2.586 12.97 12.97a2 2 0 0 1 0 2.829z"
      clipRule="evenodd"
      opacity={0.2}
    />
    <path
      fill="#478BEB"
      fillRule="evenodd"
      d="m30.383 34.386 2.586 2.586a2 2 0 0 0 2.828 0l15.556-15.556a2 2 0 0 0 0-2.829L35.797 3.031a2 2 0 0 0-2.828 0l-2.586 2.586 12.97 12.97a2 2 0 0 1 0 2.829z"
      clipRule="evenodd"
      opacity={0.4}
    />
    <rect
      width={26}
      height={26}
      x={26.383}
      y={1.617}
      fill="#478BEB"
      opacity={0.7}
      rx={2}
      transform="rotate(45 26.383 1.617)"
    />
    <rect
      width={26}
      height={26}
      x={18.383}
      y={1.617}
      fill="#478BEB"
      rx={2}
      transform="rotate(45 18.383 1.617)"
    />
    <mask
      id="b3"
      width={36}
      height={36}
      x={0}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <rect
        width={25}
        height={25}
        x={18.383}
        y={2.324}
        stroke="#000"
        rx={1.5}
        transform="rotate(45 18.383 2.324)"
      />
    </mask>
    <g
      filter="url(#a3)"
      mask="url(#b3)"
      style={{
        mixBlendMode: "overlay",
      }}
    >
      <ellipse cx={18.5} cy={2} fill="#B3B3B3" rx={14.5} ry={15} />
    </g>
    <mask
      id="d3"
      width={60}
      height={36}
      x={0}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        fill="#42A9F3"
        fillRule="evenodd"
        d="m32.97 36.972-2.585-2.586-2.586 2.586a2 2 0 0 1-2.829 0l-2.585-2.586-2.586 2.586a2 2 0 0 1-2.829 0L1.414 21.416a2 2 0 0 1 0-2.829L16.97 3.031a2 2 0 0 1 2.829 0l2.585 2.586L24.97 3.03a2 2 0 0 1 2.829 0l2.585 2.586L32.97 3.03a2 2 0 0 1 2.829 0l2.586 2.586L40.97 3.03a2 2 0 0 1 2.829 0l15.556 15.556a2 2 0 0 1 0 2.829L43.799 36.972a2 2 0 0 1-2.829 0l-2.585-2.586-2.586 2.586a2 2 0 0 1-2.829 0"
        clipRule="evenodd"
      />
    </mask>
    <g
      filter="url(#c3)"
      mask="url(#d3)"
      opacity={0.6}
      style={{
        mixBlendMode: "plus-lighter",
      }}
    >
      <ellipse cx={10} cy={-8.5} fill="#149CB7" rx={32} ry={22.5} />
    </g>
    <defs>
      <filter
        id="a3"
        width={69}
        height={70}
        x={-16}
        y={-33}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_3162_4365"
          stdDeviation={10}
        />
      </filter>
      <filter
        id="c3"
        width={92}
        height={73}
        x={-36}
        y={-45}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_3162_4365"
          stdDeviation={7}
        />
      </filter>
    </defs>
  </svg>
)
export default SvgComponent
