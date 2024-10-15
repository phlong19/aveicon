import { IconProps } from "../model.ts";

export default function AIStrikeThrough({
  className,
  style,
  size = 16,
  fill = "none",
  fillOpacity = 1,
  stroke = "black",
  strokeWidth = 2,
  strokeOpacity = 1,
  ariaLabel,
  viewBox = "0 0 18 18",
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
      <g clipPath="url(#clip0_457_10142)">
        <path
          d="M15 3V2.6C15 2.03995 15 1.75992 14.891 1.54601C14.7951 1.35785 14.6422 1.20487 14.454 1.10899C14.2401 1 13.9601 1 13.4 1H2.6C2.03995 1 1.75992 1 1.54601 1.10899C1.35785 1.20487 1.20487 1.35785 1.10899 1.54601C1 1.75992 1 2.03995 1 2.6V3"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
        <path
          d="M1 3V1H15V3M5 15H8M8 15H11M8 15V8M8 1V8M8 8H2M8 8H14"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10142">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
