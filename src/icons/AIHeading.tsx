import { IconProps } from "../model.ts";

export default function AIHeading({
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
      <g clipPath="url(#clip0_457_10152)">
        <path
          d="M13 1L13 15M3 8L13 8M3 1L3 15M15 15H11M5 15H1M15 1H11M5 1H1"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10152">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
