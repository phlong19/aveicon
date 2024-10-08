import { IconProps } from "../model.ts";

export default function AIBuoy({
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
      <g clip-path="url(#clip0_457_10169)">
        <path
          d="M5.88389 10.1122L3.05645 12.9434M12.9561 3.04398L10.1211 5.87892M3.0501 3.05012L5.88282 5.875M10.1193 10.1129L12.949 12.9484M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10169">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
