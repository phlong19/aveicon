import { IconProps } from "../model.ts";

export default function AIDollar({
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
        d="M12 3H6.5C5.11929 3 4 4.11929 4 5.5V5.5C4 6.88071 5.11929 8 6.5 8H9.5C10.8807 8 12 9.11929 12 10.5V10.5C12 11.8807 10.8807 13 9.5 13H3.5M8 1V15"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
