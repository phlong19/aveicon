import { IconProps } from "../model.ts";

export default function AIBookmark({
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
        d="M3 4.2C3 3.07989 3 2.51984 3.21799 2.09202C3.40973 1.71569 3.71569 1.40973 4.09202 1.21799C4.51984 1 5.07989 1 6.2 1H9.8C10.9201 1 11.4802 1 11.908 1.21799C12.2843 1.40973 12.5903 1.71569 12.782 2.09202C13 2.51984 13 3.0799 13 4.2V15L8 13L3 15V4.2Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}
