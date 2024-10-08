import { IconProps } from "../model.ts";

export default function AITag({
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
      <g clip-path="url(#clip0_457_10212)">
        <path
          d="M5.00002 5.04688L5.00007 5M1 4.20001L1.00001 6.45807C1.00001 6.96109 1.00001 7.2126 1.05818 7.4485C1.10976 7.65762 1.19477 7.85704 1.30994 8.03904C1.43985 8.24436 1.62132 8.41851 1.98424 8.76682L6.73822 13.3293C7.53149 14.0906 7.92812 14.4713 8.38064 14.6111C8.7788 14.7342 9.20545 14.7298 9.601 14.5986C10.0505 14.4495 10.4393 14.0607 11.2167 13.2833L13.2833 11.2167C14.0608 10.4393 14.4495 10.0505 14.5986 9.60098C14.7298 9.20543 14.7342 8.77878 14.6112 8.38062C14.4713 7.9281 14.0906 7.53147 13.3293 6.7382L8.76687 1.98424C8.41856 1.62131 8.24441 1.43985 8.03909 1.30993C7.85708 1.19476 7.65766 1.10975 7.44854 1.05818C7.21264 1 6.96112 1 6.4581 1L4.2 1C3.07989 1 2.51984 1 2.09201 1.21799C1.71569 1.40974 1.40973 1.7157 1.21798 2.09202C0.999996 2.51985 0.999997 3.0799 1 4.20001Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10212">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
