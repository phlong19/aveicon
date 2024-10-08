import { IconProps } from "../model.ts";

export default function AISoundOff({
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
      <g clip-path="url(#clip0_457_10182)">
        <path
          d="M10 6L12.5 8.5M12.5 8.5L15 11M12.5 8.5L10 11M12.5 8.5L15 6M1 5V11H3L7 15V1L3 5H1Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10182">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
