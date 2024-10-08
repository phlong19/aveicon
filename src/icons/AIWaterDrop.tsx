import { IconProps } from "../model.ts";

export default function AIWaterDrop({
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
        d="M13 9.78136C13 12.8256 10.9167 15 8 15C5.08333 15 3 12.8256 3 9.78136C3 6.64223 5.55636 3.28535 8 1.5C10.4436 3.28535 13 6.64223 13 9.78136Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}
