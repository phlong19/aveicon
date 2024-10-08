import { IconProps } from "../model";

export default function AIPlus({
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
      style={{ ...style, width: size, height: size }}
      viewBox={viewBox}
      fill={fill}
      fillOpacity={fillOpacity}
      aria-label={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 14V8M8 8V2M8 8L14 8M8 8H2"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeOpacity={strokeOpacity}
      />
    </svg>
  );
}
