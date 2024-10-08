import { IconProps } from "../model.ts";

export default function AIPin({
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
      <g clip-path="url(#clip0_457_10110)">
        <path
          d="M1 15L5.88789 10.1121M7.04468 5.24278L8.82022 0.992188L15.0078 7.17981L10.7573 8.95534L8.98171 13.2059L2.79409 7.01831L7.04468 5.24278Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10110">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
