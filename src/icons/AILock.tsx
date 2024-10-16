import { IconProps } from "../model.ts";

export default function AILock({
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
        d="M2 10.2C2 9.07989 2 8.51984 2.21799 8.09202C2.40973 7.71569 2.71569 7.40973 3.09202 7.21799C3.51984 7 4.0799 7 5.2 7H10.8C11.9201 7 12.4802 7 12.908 7.21799C13.2843 7.40973 13.5903 7.71569 13.782 8.09202C14 8.51984 14 9.07989 14 10.2V11.8C14 12.9201 14 13.4802 13.782 13.908C13.5903 14.2843 13.2843 14.5903 12.908 14.782C12.4802 15 11.9201 15 10.8 15H5.2C4.07989 15 3.51984 15 3.09202 14.782C2.71569 14.5903 2.40973 14.2843 2.21799 13.908C2 13.4802 2 12.9201 2 11.8V10.2Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
      />
      <path
        d="M5 7L5 4C5 3.06812 5 2.60218 5.15224 2.23463C5.35523 1.74458 5.74458 1.35523 6.23463 1.15224C6.60217 1 7.06812 1 8 1C8.93188 1 9.39782 1 9.76537 1.15224C10.2554 1.35523 10.6448 1.74458 10.8478 2.23463C11 2.60218 11 3.06812 11 4V7H5Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
