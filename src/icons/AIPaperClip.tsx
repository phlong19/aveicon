import { IconProps } from "../model.ts";

export default function AIPaperClip({
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
        d="M3.60286 10.2498L1.60286 6.78566C0.774437 5.35078 1.26606 3.51601 2.70094 2.68758C4.13582 1.85915 5.97059 2.35078 6.79902 3.78566L8.14277 6.1131M9.89709 3.15168L12.6471 7.91483C13.8897 10.0671 13.1523 12.8193 11 14.0619C8.84766 15.3046 6.09551 14.5671 4.85287 12.4148L3.66537 10.358M4.14569 5.23132L7.44858 10.9184C7.86441 11.6344 8.78126 11.8788 9.49832 11.4648C10.2167 11.0501 10.4628 10.1315 10.0481 9.41316L7.72589 5.39104"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
