import { IconProps } from "../model.ts";

export default function AIPieChart({
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
      <g clipPath="url(#clip0_457_10220)">
        <path
          d="M6.5 15C9.53757 15 12 12.5376 12 9.5H6.5V4C3.46243 4 1 6.46243 1 9.5C1 12.5376 3.46243 15 6.5 15Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
        <path
          d="M15 6C15 3.23858 12.7614 1 10 1V6H15Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10220">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
