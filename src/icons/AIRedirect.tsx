import { IconProps } from "../model.ts";

export default function AIRedirect({
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
      <g clip-path="url(#clip0_457_10226)">
        <path
          d="M5 11L15 1M15 1H10M15 1V6M12 10V13C12 14.1046 11.1046 15 10 15H3C1.89543 15 1 14.1046 1 13V6C1 4.89543 1.89543 4 3 4H6"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10226">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
