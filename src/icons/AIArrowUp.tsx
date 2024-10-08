import { IconProps } from "../model.ts";

export default function AIArrowUp({
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
      viewBox={viewBox}
      fill={fill}
      fillOpacity={fillOpacity}
      aria-label={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_457_10234)">
        <path
          d="M8 15V1M8 1L1 7M8 1L15 7"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeOpacity={strokeOpacity}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10234">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
