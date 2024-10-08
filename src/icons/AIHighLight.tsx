import { IconProps } from "../model.ts";

export default function AIHighLight({
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
      <g clip-path="url(#clip0_457_10151)">
        <path
          d="M2 11H3M4 11H3M3 11L4.6 7M13 11L11.4 7M12 11H14M4.6 7L6.62861 1.92848C6.85292 1.36771 7.39603 1 8 1V1C8.60397 1 9.14708 1.36771 9.37139 1.92848L11.4 7M4.6 7H11.4M1 15H15"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10151">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
