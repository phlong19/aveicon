import { IconProps } from "../model.ts";

export default function AITicket({
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
        d="M7 2V14"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray="2 3"
      />
      <path
        d="M15 6V3.6C15 3.03995 15 2.75992 14.891 2.54601C14.7951 2.35785 14.6422 2.20487 14.454 2.10899C14.2401 2 13.9601 2 13.4 2H2.6C2.03995 2 1.75992 2 1.54601 2.10899C1.35785 2.20487 1.20487 2.35785 1.10899 2.54601C1 2.75992 1 3.03995 1 3.6V6C2.10457 6 3 6.89543 3 8C3 9.10457 2.10457 10 1 10V12.4C1 12.9601 1 13.2401 1.10899 13.454C1.20487 13.6422 1.35785 13.7951 1.54601 13.891C1.75992 14 2.03995 14 2.6 14L13.4 14C13.9601 14 14.2401 14 14.454 13.891C14.6422 13.7951 14.7951 13.6422 14.891 13.454C15 13.2401 15 12.9601 15 12.4V10C13.8954 10 13 9.10457 13 8C13 6.89543 13.8954 6 15 6Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
        strokeLinejoin="round"
      />
    </svg>
  );
}
