import { IconProps } from "../model";

export default function AISound({
  className,
  style,
  size = "16",
  fill = "none",
  fillOpacity = 1,
  stroke = "black",
  strokeWidth = 2,
  strokeOpacity = 1,
  viewBox = "0 0 16 16",
  ariaLabel,
}: IconProps) {
  return (
    <svg
      className={className}
      style={{ ...style, width: size, height: size }}
      viewBox={viewBox}
      fill={fill}
      fillOpacity={fillOpacity}
      aria-label={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_457_10173)">
        <path
          d="M11 1C13.5 2.5 15 5 15 8C15 11 13.5 13.5 11 15M10 5C12 6.5 12 9.5 10 11M1 5V11H3L7 15V1L3 5H1Z"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeOpacity={strokeOpacity}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10173">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
