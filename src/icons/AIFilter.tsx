import { IconProps } from "../model.ts";

export default function AIFilter({
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
        d="M8.85714 4.57143C8.85714 3.15127 10.0084 2 11.4286 2C12.8487 2 14 3.15127 14 4.57143C14 5.99159 12.8487 7.14286 11.4286 7.14286C10.0084 7.14286 8.85714 5.99159 8.85714 4.57143ZM8.85714 4.57143L2 4.57143M7.14286 11.4286C7.14286 12.8487 5.99159 14 4.57143 14C3.15127 14 2 12.8487 2 11.4286C2 10.0084 3.15127 8.85714 4.57143 8.85714C5.99159 8.85714 7.14286 10.0084 7.14286 11.4286ZM7.14286 11.4286H14"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
