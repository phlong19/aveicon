import { IconProps } from "../model.ts";

export default function AIAT({
  className,
  style,
  size = 16,
  fill = "none",
  fillOpacity = 1,
  stroke = "black",
  strokeWidth = 2,
  strokeOpacity = 1,
  ariaLabel,
  viewBox = "0 0 16 16",
}: IconProps) {
  return (
    <svg
      className={className}
      style={{ ...style, height: size, width: size }}
      aria-label={ariaLabel}
      fill={fill}
      fillOpacity={fillOpacity}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
    >
      <g clip-path="url(#clip0_457_10196)">
        <path
          d="M11 8C11 9 11.7309 10 13 10C14.1261 10 14.8567 9.28891 15 8C15.2559 5.69873 13 1 8 1C3 1 1 5.5 1 8C1 13.2267 5.56129 15 8 15C9.77112 15 10.6179 14.5332 11.5 14M11 8C11 6.1779 9.5 5 8 5C6.32844 5 5 6.33563 5 8C5 9.66437 6.31237 11 8 11C9.5 11 11 10 11 8Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10196">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
