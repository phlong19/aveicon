import { IconProps } from "../model.ts";

export default function AIUser({
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
        d="M2 15V13C2 11.3431 3.34315 10 5 10H11C12.6569 10 14 11.3431 14 13V15M8 1C6.47192 1 5 2.19032 5 4C5 5.52808 6.19032 7 8 7C9.80968 7 11 5.52808 11 4C11 2.19032 9.52808 1 8 1Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
