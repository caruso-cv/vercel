import * as React from "react"
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 44 40"
    {...props}
  >
    <path
      fill="#478BEB"
      d="M.734 10H37.4c.264 0 .506-.12.638-.315l5.866-8.75a.55.55 0 0 0-.003-.624.77.77 0 0 0-.635-.311H6.6a.77.77 0 0 0-.638.315L.096 9.065a.55.55 0 0 0 .003.624.77.77 0 0 0 .635.311"
    />
    <mask
      id="b"
      width={44}
      height={10}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        stroke="#000"
        d="M37.4 9.5H.734c-.119 0-.194-.054-.222-.093A.06.06 0 0 1 .5 9.375c0-.006.001-.016.012-.032L6.376.594A.282.282 0 0 1 6.6.5h36.666c.119 0 .195.054.222.093q.014.024.012.032a.06.06 0 0 1-.012.032l-5.864 8.748c-.028.04-.105.095-.224.095Z"
      />
    </mask>
    <g
      filter="url(#a)"
      mask="url(#b)"
      style={{
        mixBlendMode: "overlay",
      }}
    >
      <path fill="#B3B3B3" d="m-11-7.047 52.239-8.95L44.109.76-8.129 9.709z" />
    </g>
    <path
      fill="#478BEB"
      fillOpacity={0.7}
      d="M43.266 10H6.6a.77.77 0 0 0-.638.315l-5.866 8.75a.55.55 0 0 0 .003.624.77.77 0 0 0 .635.311H37.4c.264 0 .506-.12.638-.315l5.866-8.75a.55.55 0 0 0-.003-.624.77.77 0 0 0-.635-.311"
    />
    <path
      fill="#478BEB"
      fillOpacity={0.4}
      d="M43.266 20H6.6a.77.77 0 0 0-.638.315l-5.866 8.75a.55.55 0 0 0 .003.624.77.77 0 0 0 .635.311H37.4c.264 0 .506-.12.638-.315l5.866-8.75a.55.55 0 0 0-.003-.624.77.77 0 0 0-.635-.311"
    />
    <path
      fill="#478BEB"
      fillOpacity={0.2}
      d="M43.266 30H6.6a.77.77 0 0 0-.638.315l-5.866 8.75a.55.55 0 0 0 .003.624.77.77 0 0 0 .635.311H37.4c.264 0 .506-.12.638-.315l5.866-8.75a.55.55 0 0 0-.003-.624.77.77 0 0 0-.635-.311"
    />
    <mask
      id="d"
      width={44}
      height={40}
      x={0}
      y={0}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "alpha",
      }}
    >
      <path
        fill="#0B0D10"
        fillRule="evenodd"
        d="M6.6 10H.734a.77.77 0 0 1-.635-.311.55.55 0 0 1-.003-.624L5.962.315A.77.77 0 0 1 6.6 0h36.666c.263 0 .503.119.635.311a.55.55 0 0 1 .003.624l-5.866 8.75A.77.77 0 0 1 37.4 10h5.866c.263 0 .503.119.635.311a.55.55 0 0 1 .003.624l-5.866 8.75A.77.77 0 0 1 37.4 20h5.866c.263 0 .503.119.635.311a.55.55 0 0 1 .003.624l-5.866 8.75A.77.77 0 0 1 37.4 30h5.866c.263 0 .503.119.635.311a.55.55 0 0 1 .003.624l-5.866 8.75A.77.77 0 0 1 37.4 40H.734a.77.77 0 0 1-.635-.311.55.55 0 0 1-.003-.624l5.866-8.75A.77.77 0 0 1 6.6 30H.734a.77.77 0 0 1-.635-.311.55.55 0 0 1-.003-.624l5.866-8.75A.77.77 0 0 1 6.6 20H.734a.77.77 0 0 1-.635-.311.55.55 0 0 1-.003-.624l5.866-8.75A.77.77 0 0 1 6.6 10"
        clipRule="evenodd"
      />
    </mask>
    <g
      filter="url(#c)"
      mask="url(#d)"
      opacity={0.6}
      style={{
        mixBlendMode: "plus-lighter",
      }}
    >
      <ellipse cx={43.5} cy={-28.5} fill="#149CB7" rx={37.5} ry={38.5} />
    </g>
    <defs>
      <filter
        id="a"
        width={69.109}
        height={39.711}
        x={-18}
        y={-23}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_3162_4321"
          stdDeviation={3.5}
        />
      </filter>
      <filter
        id="c"
        width={103}
        height={105}
        x={-8}
        y={-81}
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          result="effect1_foregroundBlur_3162_4321"
          stdDeviation={7}
        />
      </filter>
    </defs>
  </svg>
)
export default SvgComponent
