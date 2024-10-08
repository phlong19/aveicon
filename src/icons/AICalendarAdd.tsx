import { IconProps } from "../model.ts";

export default function AICalendarAdd({
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
      <g clip-path="url(#clip0_457_10109)">
        <path
          d="M13 11V13M13 13V15M13 13H11M13 13H15M1 6H15M5 1V3M11 1V3M15 8V5.2C15 4.07989 15 3.51984 14.782 3.09202C14.5903 2.71569 14.2843 2.40973 13.908 2.21799C13.4802 2 12.9201 2 11.8 2H4.2C3.0799 2 2.51984 2 2.09202 2.21799C1.71569 2.40973 1.40973 2.71569 1.21799 3.09202C1 3.51984 1 4.07989 1 5.2V11.8C1 12.9201 1 13.4802 1.21799 13.908C1.40973 14.2843 1.71569 14.5903 2.09202 14.782C2.51984 15 3.0799 15 4.2 15H8"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10109">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
