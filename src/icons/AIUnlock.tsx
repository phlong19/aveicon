import { IconProps } from "../model.ts";

export default function AIUnlock({
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
      <path
        d="M11 4.0491V4C11 3.06812 11 2.60218 10.8478 2.23463C10.6448 1.74458 10.2554 1.35523 9.76537 1.15224C9.39782 1 8.93188 1 8 1C7.06812 1 6.60217 1 6.23463 1.15224C5.74458 1.35523 5.35523 1.74458 5.15224 2.23463C5 2.60218 5 3.06812 5 4L5 7M5.2 15H10.8C11.9201 15 12.4802 15 12.908 14.782C13.2843 14.5903 13.5903 14.2843 13.782 13.908C14 13.4802 14 12.9201 14 11.8V10.2C14 9.07989 14 8.51984 13.782 8.09202C13.5903 7.71569 13.2843 7.40973 12.908 7.21799C12.4802 7 11.9201 7 10.8 7H5.2C4.0799 7 3.51984 7 3.09202 7.21799C2.71569 7.40973 2.40973 7.71569 2.21799 8.09202C2 8.51984 2 9.07989 2 10.2V11.8C2 12.9201 2 13.4802 2.21799 13.908C2.40973 14.2843 2.71569 14.5903 3.09202 14.782C3.51984 15 4.07989 15 5.2 15Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
