import { IconProps } from "../model";

export default function AIArrowLeft({
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
      fillOpacity={fillOpacity}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={ariaLabel}
    >
      <g clipPath="url(#clip0_457_10236)">
        <path
          d="M15 8L1 8M1 8L7 15M1 8L7 1"
          strokeOpacity={strokeOpacity}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10236">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
