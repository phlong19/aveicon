import { IconProps } from "../model.ts";

export default function AIFolder({
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
        d="M1 5.2C1 4.0799 1 3.51984 1.21799 3.09202C1.40973 2.71569 1.71569 2.40973 2.09202 2.21799C2.51984 2 3.07989 2 4.2 2H5.22774C5.91799 2 6.26311 2 6.57045 2.10223C6.84232 2.19266 7.0916 2.34045 7.30139 2.5356C7.53855 2.7562 7.70414 3.059 8.03533 3.6646L8.4375 4.4H11.8C12.9201 4.4 13.4802 4.4 13.908 4.61799C14.2843 4.80973 14.5903 5.11569 14.782 5.49202C15 5.91984 15 6.4799 15 7.6V10.8C15 11.9201 15 12.4802 14.782 12.908C14.5903 13.2843 14.2843 13.5903 13.908 13.782C13.4802 14 12.9201 14 11.8 14H4.2C3.07989 14 2.51984 14 2.09202 13.782C1.71569 13.5903 1.40973 13.2843 1.21799 12.908C1 12.4802 1 11.9201 1 10.8V5.2Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
