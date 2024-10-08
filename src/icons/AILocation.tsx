import { IconProps } from "../model.ts";

export default function AILocation({
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
        d="M9 6C9 6.55228 8.55228 7 8 7C7.44772 7 7 6.55228 7 6C7 5.44772 7.44772 5 8 5C8.55228 5 9 5.44772 9 6Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
      <path
        d="M3 6.41935C3 3.25806 5.08333 1 8 1C10.9167 1 13 3.25806 13 6.41935C13 9.67922 10.4436 12.646 8 14.5C5.55636 12.646 3 9.67922 3 6.41935Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}
