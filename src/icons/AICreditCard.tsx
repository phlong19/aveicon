import { IconProps } from "../model.ts";

export default function AICreditCard({
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
        d="M1 7H15M7 11L5 11M4.2 14H11.8C12.9201 14 13.4802 14 13.908 13.782C14.2843 13.5903 14.5903 13.2843 14.782 12.908C15 12.4802 15 11.9201 15 10.8V5.2C15 4.0799 15 3.51984 14.782 3.09202C14.5903 2.71569 14.2843 2.40973 13.908 2.21799C13.4802 2 12.9201 2 11.8 2H4.2C3.0799 2 2.51984 2 2.09202 2.21799C1.71569 2.40973 1.40973 2.71569 1.21799 3.09202C1 3.51984 1 4.07989 1 5.2V10.8C1 11.9201 1 12.4802 1.21799 12.908C1.40973 13.2843 1.71569 13.5903 2.09202 13.782C2.51984 14 3.07989 14 4.2 14Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
