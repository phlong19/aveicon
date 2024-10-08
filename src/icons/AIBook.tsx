import { IconProps } from "../model.ts";

export default function AIBook({
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
        d="M8 3.05477V14M8 3.05477C7.09164 2.40149 5.85838 2 4.5 2C3.14162 2 1.90836 2.40149 1 3.05477V14C1.90836 13.3467 3.14162 12.9452 4.5 12.9452C5.85838 12.9452 7.09164 13.3467 8 14M8 3.05477C8.90836 2.40149 10.1416 2 11.5 2C12.8584 2 14.0916 2.40149 15 3.05477V14C14.0916 13.3467 12.8584 12.9452 11.5 12.9452C10.1416 12.9452 8.90836 13.3467 8 14"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeOpacity={strokeOpacity}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
