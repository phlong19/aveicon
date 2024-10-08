import { IconProps } from "../model.ts";

export default function AIDesktop({
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
      <g clip-path="url(#clip0_457_10187)">
        <path
          d="M2 4.2C2 3.07989 2 2.51984 2.21799 2.09202C2.40973 1.71569 2.71569 1.40973 3.09202 1.21799C3.51984 1 4.0799 1 5.2 1H10.8C11.9201 1 12.4802 1 12.908 1.21799C13.2843 1.40973 13.5903 1.71569 13.782 2.09202C14 2.51984 14 3.07989 14 4.2V7.8C14 8.92011 14 9.48016 13.782 9.90798C13.5903 10.2843 13.2843 10.5903 12.908 10.782C12.4802 11 11.9201 11 10.8 11H5.2C4.07989 11 3.51984 11 3.09202 10.782C2.71569 10.5903 2.40973 10.2843 2.21799 9.90798C2 9.48016 2 8.92011 2 7.8V4.2Z"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeOpacity={strokeOpacity}
        />
        <path
          d="M1 13C1 11.8954 1.89543 11 3 11H13C14.1046 11 15 11.8954 15 13C15 14.1046 14.1046 15 13 15H3C1.89543 15 1 14.1046 1 13Z"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeOpacity={strokeOpacity}
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10187">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
