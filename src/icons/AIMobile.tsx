import { IconProps } from "../model.ts";

export default function AIMobile({
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
        d="M8 11V10.9805M6 1H10C11.6569 1 13 2.34315 13 4V12C13 13.6569 11.6569 15 10 15H6C4.34315 15 3 13.6569 3 12V4C3 2.34315 4.34315 1 6 1Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
