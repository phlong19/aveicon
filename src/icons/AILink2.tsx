import { IconProps } from "../model.ts";

export default function AILink2({
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
      <g clip-path="url(#clip0_457_10147)">
        <path
          d="M5.99999 10.0005L9.99999 6.00045M5.99999 4.00045L7.49999 2.50045C9.15685 0.843598 11.8431 0.8436 13.5 2.50045C15.1569 4.1573 15.1569 6.8436 13.5 8.50045L12 10.0005M3.99999 6.00045L2.32831 7.67213C0.746785 9.25366 0.691453 11.8003 2.20279 13.449C3.75175 15.1388 6.37304 15.2648 8.0769 13.7313L9.99999 12.0005"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10147">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
