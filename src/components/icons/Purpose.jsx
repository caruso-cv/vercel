import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 40 40"
    {...props}
  >
    <path
      fill="#478BEB"
      d="M10.5 12h-9A1.5 1.5 0 0 1 0 10.5v-9A1.5 1.5 0 0 1 1.5 0h9A1.5 1.5 0 0 1 12 1.5v9a1.5 1.5 0 0 1-1.5 1.5"
    />
    <mask
      id="b"
      width={12}
      height={12}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        stroke="#000"
        d="M10.5 11.5h-9a1 1 0 0 1-1-1v-9a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1Z"
      />
    </mask>
    <g
      filter="url(#a)"
      mask="url(#b)"
      style={{
        mixBlendMode: "overlay",
      }}
    >
      <circle cx={-3} cy={-3} r={11} fill="#B3B3B3" />
    </g>
    <path
      fill="#478BEB"
      d="M24.5 12h-9a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 15.5 0h9A1.5 1.5 0 0 1 26 1.5v9a1.5 1.5 0 0 1-1.5 1.5"
      opacity={0.8}
    />
    <path
      fill="#478BEB"
      d="M24.5 26h-9a1.5 1.5 0 0 1-1.5-1.5v-9a1.5 1.5 0 0 1 1.5-1.5h9a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5m14-14h-9a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 29.5 0h9A1.5 1.5 0 0 1 40 1.5v9a1.5 1.5 0 0 1-1.5 1.5"
      opacity={0.6}
    />
    <path
      fill="#478BEB"
      d="M10.5 26h-9A1.5 1.5 0 0 1 0 24.5v-9A1.5 1.5 0 0 1 1.5 14h9a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5"
      opacity={0.8}
    />
    <path
      fill="#478BEB"
      d="M10.5 40h-9A1.5 1.5 0 0 1 0 38.5v-9A1.5 1.5 0 0 1 1.5 28h9a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5"
      opacity={0.6}
    />
    <path
      fill="#478BEB"
      d="M37 24h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1M23 39h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1"
      opacity={0.4}
    />
    <path
      fill="#478BEB"
      d="M37 39h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1"
      opacity={0.2}
    />
    <mask
      id="d"
      width={40}
      height={40}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        fill="#42A9F3"
        fillRule="evenodd"
        d="M10.5 12h-9A1.5 1.5 0 0 1 0 10.5v-9A1.5 1.5 0 0 1 1.5 0h9A1.5 1.5 0 0 1 12 1.5v9a1.5 1.5 0 0 1-1.5 1.5m14 0h-9a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 15.5 0h9A1.5 1.5 0 0 1 26 1.5v9a1.5 1.5 0 0 1-1.5 1.5m-9 14h9a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5h-9a1.5 1.5 0 0 0-1.5 1.5v9a1.5 1.5 0 0 0 1.5 1.5m23-14h-9a1.5 1.5 0 0 1-1.5-1.5v-9A1.5 1.5 0 0 1 29.5 0h9A1.5 1.5 0 0 1 40 1.5v9a1.5 1.5 0 0 1-1.5 1.5m-37 14h9a1.5 1.5 0 0 0 1.5-1.5v-9a1.5 1.5 0 0 0-1.5-1.5h-9A1.5 1.5 0 0 0 0 15.5v9A1.5 1.5 0 0 0 1.5 26m9 14h-9A1.5 1.5 0 0 1 0 38.5v-9A1.5 1.5 0 0 1 1.5 28h9a1.5 1.5 0 0 1 1.5 1.5v9a1.5 1.5 0 0 1-1.5 1.5M31 24h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1m-8 15h-6a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1m8 0h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1"
        clipRule="evenodd"
      />
    </mask>
    <g
      filter="url(#c)"
      mask="url(#d)"
      opacity={0.8}
      style={{
        mixBlendMode: "plus-lighter",
      }}
    >
      <ellipse cx={28} cy={-22.5} fill="#149CB7" rx={32} ry={32.5} />
    </g>
    <defs>
      <filter
        id="a"
        width={44}
        height={44}
        x={-25}
        y={-25}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_3162_4391"
          stdDeviation={5.5}
        />
      </filter>
      <filter
        id="c"
        width={84}
        height={85}
        x={-14}
        y={-65}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_3162_4391"
          stdDeviation={5}
        />
      </filter>
    </defs>
  </svg>
)
export default SvgComponent
