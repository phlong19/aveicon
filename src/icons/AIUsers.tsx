import { IconProps } from "../model.ts";

export default function AIUsers({
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
      <g clip-path="url(#clip0_457_10102)">
        <path
          d="M1 15V11C1 9.89543 1.89543 9 3 9H6C7.10457 9 8 9.89543 8 11V15M11 11H13C14.1046 11 15 11.8954 15 13V15M4.5 1C5.80503 1 7 2 7 3.5C7 5 5.80503 6 4.5 6C3.19497 6 2 5 2 3.5C2 2 3.19497 1 4.5 1ZM12 3C10.9865 3 10 3.79796 10 5C10 6.20204 10.9865 7 12 7C13.0135 7 14 6.20204 14 5C14 3.79796 13.0135 3 12 3Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10102">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
