import { IconProps } from "../model.ts";

export default function AIShare({
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
      <g clip-path="url(#clip0_457_10195)">
        <path
          d="M5.9277 6.86744L10.3977 4.85635M10.3808 11.1731L5.50515 8.98838M15 12.5C15 13.8807 13.8807 15 12.5 15C11.1193 15 10 13.8807 10 12.5C10 11.1193 11.1193 10 12.5 10C13.8807 10 15 11.1193 15 12.5ZM15 3.5C15 4.88071 13.8807 6 12.5 6C11.1193 6 10 4.88071 10 3.5C10 2.11929 11.1193 1 12.5 1C13.8807 1 15 2.11929 15 3.5ZM6 7.5C6 8.88071 4.88071 10 3.5 10C2.11929 10 1 8.88071 1 7.5C1 6.11929 2.11929 5 3.5 5C4.88071 5 6 6.11929 6 7.5Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10195">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
