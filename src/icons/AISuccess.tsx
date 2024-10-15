import { IconProps } from "../model.ts";

export default function AISuccess({
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
      <g clipPath="url(#clip0_457_10203)">
        <path
          d="M11 6L7.8643 9.18724C7.33121 9.72908 7.06467 10 6.73346 10C6.40225 10 6.13571 9.72908 5.60263 9.18724L5 8.57471M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10203">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
