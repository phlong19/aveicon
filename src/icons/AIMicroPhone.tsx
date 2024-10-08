import { IconProps } from "../model.ts";

export default function AIMicroPhone({
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
        d="M13 7C13 9.76142 10.7614 12 8 12M8 12C5.23858 12 3 9.76142 3 7M8 12V15M8 15H6M8 15H10M6 7V3C6 1.89543 6.89543 1 8 1C9.10457 1 10 1.89543 10 3V7C10 8.10457 9.10457 9 8 9C6.89543 9 6 8.10457 6 7Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
