import { IconProps } from "../model.ts";

export default function AITrash({
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
      <g clipPath="url(#clip0_3907_99888)">
        <path
          d="M1 4H15M5 15H11C12.1046 15 13 14.1046 13 13V3C13 1.89543 12.1046 1 11 1H5C3.89543 1 3 1.89543 3 3V13C3 14.1046 3.89543 15 5 15Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_3907_99888">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
