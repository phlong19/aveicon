import { IconProps } from "../model.ts";

export default function AIRss({
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
      <g clip-path="url(#clip0_457_10179)">
        <path
          d="M14.9672 15.0004C14.4744 7.51289 8.48751 1.52603 1 1.0332M1 6.04977C5.72442 6.51884 9.48156 10.276 9.95062 15.0004M4 13.5004C4 14.3288 3.32843 15.0004 2.5 15.0004C1.67157 15.0004 1 14.3288 1 13.5004C1 12.672 1.67157 12.0004 2.5 12.0004C3.32843 12.0004 4 12.672 4 13.5004Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10179">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
