import { IconProps } from "../model.ts";

export default function AIClock({
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
      <g clipPath="url(#clip0_457_10125)">
        <path
          d="M8 5V8H11M8 15C7.07116 15 6.60674 15 6.21684 14.9487C3.52444 14.5942 1.40579 12.4756 1.05133 9.78316C1 9.39326 1 8.92884 1 8C1 7.07116 1 6.60674 1.05133 6.21684C1.40579 3.52444 3.52444 1.40579 6.21684 1.05133C6.60674 1 7.07116 1 8 1C8.92884 1 9.39326 1 9.78316 1.05133C12.4756 1.40579 14.5942 3.52444 14.9487 6.21684C15 6.60674 15 7.07116 15 8C15 8.92884 15 9.39326 14.9487 9.78316C14.5942 12.4756 12.4756 14.5942 9.78316 14.9487C9.39326 15 8.92884 15 8 15Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10125">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
