import { IconProps } from "../model";

export default function AIRestrict({
  className,
  style,
  size = "16",
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
      style={{ ...style, width: size, height: size }}
      aria-label={ariaLabel}
      fillOpacity={fillOpacity}
      viewBox={viewBox}
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_457_10160)">
        <path
          d="M3.05024 3.05026L12.9497 12.9498M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeOpacity={strokeOpacity}
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10160">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
