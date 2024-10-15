import { IconProps } from "../model";

export default function AIXmark({
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
      style={{ ...style, width: size, height: size }}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
      aria-label={ariaLabel}
      fill={fill}
      fillOpacity={fillOpacity}
    >
      <g clipPath="url(#clip0_598_16819)">
        <path
          d="M11 11L6 6M6 6L1 1M6 6L11 1M6 6L1 11"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeOpacity={strokeOpacity}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_598_16819">
          <rect width="12" height="12" />
        </clipPath>
      </defs>
    </svg>
  );
}
