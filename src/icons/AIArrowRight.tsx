import { IconProps } from "../model";

export default function AIArrowRight({
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
      <g clipPath="url(#clip0_457_10235)">
        <path
          d="M1 8L15 8M15 8L9 1M15 8L9 15"
          strokeOpacity={strokeOpacity}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10235">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
