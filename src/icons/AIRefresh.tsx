import { IconProps } from "../model.ts";

export default function AIRefresh({
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
      <g clip-path="url(#clip0_457_10225)">
        <path
          d="M1 10.5C2 12.5 4 15 8 15C12 15 14 12.5 15 10.5M15 10.5L11.5 10.5M15 10.5V14.5M15 5.5C14 3.5 12 1 8 1C4 1 2 3.5 1 5.5M1 5.5H4.5M1 5.5L1 1.5"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10225">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
