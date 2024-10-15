import { IconProps } from "../model.ts";

export default function AIThumbUp({
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
      <g clipPath="url(#clip0_457_10192)">
        <path
          d="M1 8.5C1 7.67157 1.67157 7 2.5 7C3.32843 7 4 7.67157 4 8.5V13.5C4 14.3284 3.32843 15 2.5 15C1.67157 15 1 14.3284 1 13.5V8.5Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
        <path
          d="M4 9.04901C4 8.65967 4 8.46499 4.03602 8.27778C4.06798 8.11166 4.12089 7.95026 4.19348 7.79745C4.27528 7.62525 4.39053 7.46836 4.62103 7.15457L8.99916 1.19447C9.08897 1.07221 9.23161 1 9.38331 1C10.4363 1 11.2899 1.85363 11.2899 2.90663V6.25H11.5016C12.7152 6.25 13.322 6.25 13.7688 6.49287C14.1612 6.70624 14.471 7.04487 14.6486 7.45476C14.8508 7.92134 14.7969 8.52573 14.689 9.73452L14.4792 12.0845C14.3873 13.1135 14.3414 13.628 14.1115 14.0172C13.9091 14.3599 13.6089 14.6344 13.2496 14.8056C12.8415 15 12.325 15 11.2919 15H7.2C6.07989 15 5.51984 15 5.09202 14.782C4.71569 14.5903 4.40973 14.2843 4.21799 13.908C4 13.4802 4 12.9201 4 11.8V9.04901Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10192">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
