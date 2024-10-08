import { IconProps } from "../model.ts";

export default function AIDuplicate({
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
      <g clip-path="url(#clip0_457_10122)">
        <path
          d="M11 5.00781V4.2C11 3.0799 11 2.51984 10.782 2.09202C10.5903 1.71569 10.2843 1.40973 9.90798 1.21799C9.48016 1 8.9201 1 7.8 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.0799 1 4.2V7.8C1 8.9201 1 9.48016 1.21799 9.90798C1.40973 10.2843 1.71569 10.5903 2.09202 10.782C2.51984 11 3.0799 11 4.2 11H5M8.2 15H11.8C12.9201 15 13.4802 15 13.908 14.782C14.2843 14.5903 14.5903 14.2843 14.782 13.908C15 13.4802 15 12.9201 15 11.8V8.2C15 7.07989 15 6.51984 14.782 6.09202C14.5903 5.71569 14.2843 5.40973 13.908 5.21799C13.4802 5 12.9201 5 11.8 5H8.2C7.07989 5 6.51984 5 6.09202 5.21799C5.71569 5.40973 5.40973 5.71569 5.21799 6.09202C5 6.51984 5 7.07989 5 8.2V11.8C5 12.9201 5 13.4802 5.21799 13.908C5.40973 14.2843 5.71569 14.5903 6.09202 14.782C6.51984 15 7.07989 15 8.2 15Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10122">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
