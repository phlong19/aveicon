import { IconProps } from "../model.ts";

export default function AICloud({
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
        d="M10.1723 5.42052C9.7255 4.01746 8.39956 3 6.83333 3C4.90034 3 3.33333 4.54978 3.33333 6.46154C3.33333 6.86847 3.40433 7.259 3.53474 7.62167C2.11875 7.71693 1 8.8831 1 10.3077C1 11.7946 2.21878 13 3.72222 13H10.7222C10.7817 13 10.8408 12.9981 10.8993 12.9944C10.9694 12.9981 11.0401 13 11.1111 13C13.2589 13 15 11.278 15 9.15385C15 7.02967 13.2589 5.30769 11.1111 5.30769C10.7874 5.30769 10.4729 5.34681 10.1723 5.42052Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}
