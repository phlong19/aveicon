import { IconProps } from "../model.ts";

export default function AIMoon({
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
      <g clip-path="url(#clip0_457_10112)">
        <path
          d="M15 10.691C14.0806 11.1068 13.0601 11.3382 11.9855 11.3382C7.94077 11.3382 4.66187 8.05932 4.66187 4.0146C4.66187 2.93996 4.89333 1.91938 5.30912 1C2.76807 2.14913 1 4.70629 1 7.67642C1 11.7211 4.27889 15 8.32362 15C11.2937 15 13.8508 13.232 15 10.691Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10112">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
