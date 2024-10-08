import { IconProps } from "../model.ts";

export default function AIBell({
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
        d="M10.9547 11.0158C11.2008 12.4925 10.5 15 8 15C5.5 15 4.80014 12.4925 5.04625 11.0158M8 1C6.5 1 5.26825 1.4635 4.5 3C3.5 5 5 8 2 11H14C11 8 12.5 5 11.5 3C10.7317 1.4635 9.5 1 8 1Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeOpacity={strokeOpacity}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
