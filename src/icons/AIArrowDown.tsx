import { IconProps } from "../model";

export default function AIArrowDown({
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
      style={{ ...style, width: size, height: size }}
      viewBox={viewBox}
      aria-label={ariaLabel}
      fill={fill}
      fillOpacity={fillOpacity}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_457_10237)">
        <path
          d="M8 0.999999L8 15M8 15L15 9M8 15L1 9"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeOpacity={strokeOpacity}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10237">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
