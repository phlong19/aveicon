import { IconProps } from "../model.ts";

export default function AIEyeOff({
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
        d="M1 8C1.4375 10.5 4.5 13 8 13C11.5 13 14.5625 10.0833 15 8M6.61719 12.8672L5.32934 14.9919M2.66797 10.8594L1.34724 12.7958M9.4375 12.8398L10.7566 14.9919M13.2513 10.7599L14.6527 12.7958"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
