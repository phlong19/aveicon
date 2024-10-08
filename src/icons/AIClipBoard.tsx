import { IconProps } from "../model.ts";

export default function AIClipBoard({
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
        d="M7 5.3C18 2.7 7.3978 3 12.7654 3.15224C13.2554 3.35523 13.6448 3.74458 13.8478 4.23463C14 4.60218 14 5.06812 14 6V11.8C14 12.9201 14 13.4802 13.782 13.908C13.5903 14.2843 13.2843 14.5903 12.908 14.782C12.4802 15 11.9201 15 10.8 15H5.2C4.0799 15 3.51984 15 3.09202 14.782C2.71569 14.5903 2.40973 14.2843 2.21799 13.908C2 13.4802 2 12.9201 2 11.8V6C2 5.06812 2 4.60218 2.15224 4.23463C2.35523 3.74458 2.74458 3.35523 3.23463 3.15224C3.60218 3 4.06812 3 5 3M6.6 5H9.4C9.96005 5 10.2401 5 10.454 4.89101C10.6422 4.79513 10.7951 4.64215 10.891 4.45399C11 4.24008 11 3.96005 11 3.4V2.6C11 2.03995 11 1.75992 10.891 1.54601C10.7951 1.35785 10.6422 1.20487 10.454 1.10899C10.2401 1 9.96005 1 9.4 1H6.6C6.03995 1 5.75992 1 5.54601 1.10899C5.35785 1.20487 5.20487 1.35785 5.10899 1.54601C5 1.75992 5 2.03995 5 2.6V3.4C5 3.96005 5 4.24008 5.10899 4.45399C5.20487 4.64215 5.35785 4.79513 5.54601 4.89101C5.75992 5 6.03995 5 6.6 5Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}
