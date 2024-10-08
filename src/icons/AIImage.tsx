import { IconProps } from "../model.ts";

export default function AIImage({
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
      <g clip-path="url(#clip0_457_10176)">
        <path
          d="M5 4.51953V4.5M1 10.9805V13C1 14.1046 1.89543 15 3 15H13C14.1046 15 15 14.1046 15 13V10.9805M1 10.9805V3C1 1.89543 1.89543 1 3 1H13C14.1046 1 15 1.89543 15 3V10.9805M1 10.9805L5 8L7 10L11 5L15 10.9805"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10176">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
