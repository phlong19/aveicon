import { IconProps } from "../model.ts";

export default function AIStars({
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
      <g clip-path="url(#clip0_457_10106)">
        <path
          d="M8.98515 3.11284L8.30001 1.39999L7.61488 3.11284C6.84821 5.0295 5.32951 6.54819 3.41285 7.31486L1.70001 7.99999L3.99387 9.14692C5.55866 9.92932 6.80282 11.2313 7.51336 12.83L8.30001 14.6L9.08667 12.83C9.7972 11.2313 11.0414 9.92932 12.6062 9.14692L14.9 7.99999L13.1872 7.31486C11.2705 6.54819 9.75181 5.0295 8.98515 3.11284Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.37976 1.3244L2.25 1L2.12024 1.3244C1.97504 1.68741 1.68741 1.97504 1.3244 2.12024L1 2.25L1.43444 2.46722C1.73081 2.6154 1.96644 2.86199 2.10101 3.16478L2.25 3.5L2.39899 3.16478C2.53356 2.86199 2.7692 2.6154 3.06556 2.46722L3.5 2.25L3.1756 2.12024C2.81259 1.97504 2.52496 1.68741 2.37976 1.3244Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M2.37976 12.8244L2.25 12.5L2.12024 12.8244C1.97504 13.1874 1.68741 13.475 1.3244 13.6202L1 13.75L1.43444 13.9672C1.73081 14.1154 1.96644 14.362 2.10101 14.6648L2.25 15L2.39899 14.6648C2.53356 14.362 2.7692 14.1154 3.06556 13.9672L3.5 13.75L3.1756 13.6202C2.81259 13.475 2.52496 13.1874 2.37976 12.8244Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10106">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
