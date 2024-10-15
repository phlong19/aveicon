import { IconProps } from "../model.ts";

export default function AIPencil({
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
      <g clipPath="url(#clip0_457_10146)">
        <path
          d="M9 3.99985L1 11.9999V14.9999H4L12 6.99985M9 3.99985L11.2929 1.70696C11.6834 1.31643 12.3166 1.31643 12.7071 1.70696L14.2929 3.29274C14.6834 3.68327 14.6834 4.31643 14.2929 4.70696L12 6.99985M9 3.99985L12 6.99985"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10146">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
