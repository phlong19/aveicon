import { IconProps } from "../model.ts";

export default function AIMusic2({
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
      <g clipPath="url(#clip0_457_10183)">
        <path
          d="M5 13V3L15 1V13M5 13C5 14.1046 4.10457 15 3 15C1.89543 15 1 14.1046 1 13C1 11.8954 1.89543 11 3 11C4.10457 11 5 11.8954 5 13ZM15 13C15 14.1046 14.1046 15 13 15C11.8954 15 11 14.1046 11 13C11 11.8954 11.8954 11 13 11C14.1046 11 15 11.8954 15 13ZM5 8L15 6"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10183">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
