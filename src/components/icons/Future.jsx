import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <rect width={40} height={40} fill="#478BEB" opacity={0.2} rx={5} />
    <path
      fill="#478BEB"
      fillRule="evenodd"
      d="M20 35c8.284 0 15-6.716 15-15S28.284 5 20 5 5 11.716 5 20s6.716 15 15 15m3.372-11.07a1 1 0 0 0 .557-.558l4.432-11.084a.5.5 0 0 0-.65-.65l-11.083 4.433a1 1 0 0 0-.557.557l-4.433 11.084a.5.5 0 0 0 .65.65z"
      clipRule="evenodd"
    />
    <mask
      id="b2"
      width={30}
      height={30}
      x={5}
      y={5}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <circle cx={20} cy={20} r={14.5} stroke="#000" />
    </mask>
    <g
      filter="url(#a2)"
      mask="url(#b2)"
      style={{
        mixBlendMode: "overlay",
      }}
    >
      <ellipse cx={33.5} cy={5} fill="#B3B3B3" rx={14.5} ry={15} />
    </g>
    <path fill="#478BEB" d="M20 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    <mask
      id="d2"
      width={30}
      height={30}
      x={5}
      y={5}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        fill="#0B0D10"
        fillRule="evenodd"
        d="M20 35c8.284 0 15-6.716 15-15S28.284 5 20 5 5 11.716 5 20s6.716 15 15 15m3.372-11.07a1 1 0 0 0 .557-.558l4.432-11.084a.5.5 0 0 0-.65-.65l-11.083 4.433a1 1 0 0 0-.557.557l-4.433 11.084a.5.5 0 0 0 .65.65z"
        clipRule="evenodd"
      />
    </mask>
    <g
      filter="url(#c2)"
      mask="url(#d2)"
      opacity={0.6}
      style={{
        mixBlendMode: "plus-lighter",
      }}
    >
      <ellipse cx={40} cy={3.5} fill="#149CB7" rx={22} ry={22.5} />
    </g>
    <defs>
      <filter
        id="a2"
        width={69}
        height={70}
        x={-1}
        y={-30}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_3162_4425"
          stdDeviation={10}
        />
      </filter>
      <filter
        id="c2"
        width={72}
        height={73}
        x={4}
        y={-33}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_3162_4425"
          stdDeviation={7}
        />
      </filter>
    </defs>
  </svg>
)
export default SvgComponent
