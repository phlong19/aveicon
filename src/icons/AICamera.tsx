import { IconProps } from "../model.ts";

export default function AICamera({
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
      <g clip-path="url(#clip0_457_10188)">
        <path
          d="M1 4.66421C1 3.60702 1.85702 2.75 2.91421 2.75H3.26256C4.05488 2.75 4.81475 2.43525 5.375 1.875C5.93525 1.31475 6.69512 1 7.48744 1H8.51256C9.30488 1 10.0647 1.31475 10.625 1.875C11.1853 2.43525 11.9451 2.75 12.7374 2.75H13.0858C14.143 2.75 15 3.60702 15 4.66421V11.8C15 12.9201 15 13.4802 14.782 13.908C14.5903 14.2843 14.2843 14.5903 13.908 14.782C13.4802 15 12.9201 15 11.8 15H4.2C3.07989 15 2.51984 15 2.09202 14.782C1.71569 14.5903 1.40973 14.2843 1.21799 13.908C1 13.4802 1 12.9201 1 11.8V4.66421Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
        />
        <path
          d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10188">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
