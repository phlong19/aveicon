import { IconProps } from "../model";

export default function AIWarning({
  className,
  style,
  size = "16",
  fill = "none",
  fillOpacity = 1,
  stroke = "black",
  strokeWidth = 2,
  strokeOpacity = 1,
  viewBox = "0 0 16 16",
  ariaLabel,
}: IconProps) {
  return (
    <svg
      className={className}
      style={{ ...style, width: size, height: size }}
      viewBox={viewBox}
      fill={fill}
      fillOpacity={fillOpacity}
      aria-label={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_457_10202)">
        <path
          d="M8 11V10.9766M8 5V8M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeOpacity={strokeOpacity}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10202">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
