import { IconProps } from "../model";

export default function AIArchive({
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
      style={{ ...style, width: size, height: size }}
      viewBox={viewBox}
      fill={fill}
      fillOpacity={fillOpacity}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={ariaLabel}
    >
      <g clip-path="url(#clip0_457_10131)">
        <path
          d="M6 10H10M2.6 5H13.4C13.9601 5 14.2401 5 14.454 4.89101C14.6422 4.79513 14.7951 4.64215 14.891 4.45399C15 4.24008 15 3.96005 15 3.4V2.6C15 2.03995 15 1.75992 14.891 1.54601C14.7951 1.35785 14.6422 1.20487 14.454 1.10899C14.2401 1 13.9601 1 13.4 1H2.6C2.03995 1 1.75992 1 1.54601 1.10899C1.35785 1.20487 1.20487 1.35785 1.10899 1.54601C1 1.75992 1 2.03995 1 2.6V3.4C1 3.96005 1 4.24008 1.10899 4.45399C1.20487 4.64215 1.35785 4.79513 1.54601 4.89101C1.75992 5 2.03995 5 2.6 5ZM4.2 15H11.8C12.9201 15 13.4802 15 13.908 14.782C14.2843 14.5903 14.5903 14.2843 14.782 13.908C15 13.4802 15 12.9201 15 11.8V8.2C15 7.07989 15 6.51984 14.782 6.09202C14.5903 5.71569 14.2843 5.40973 13.908 5.21799C13.4802 5 12.9201 5 11.8 5H4.2C3.0799 5 2.51984 5 2.09202 5.21799C1.71569 5.40973 1.40973 5.71569 1.21799 6.09202C1 6.51984 1 7.07989 1 8.2V11.8C1 12.9201 1 13.4802 1.21799 13.908C1.40973 14.2843 1.71569 14.5903 2.09202 14.782C2.51984 15 3.07989 15 4.2 15Z"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeOpacity={strokeOpacity}
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10131">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
