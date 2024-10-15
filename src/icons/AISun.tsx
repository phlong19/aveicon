import { IconProps } from "../model.ts";

export default function AISun({
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
      <g clipPath="url(#clip0_457_10105)">
        <path
          d="M7.99994 1.04688L7.99998 1M7.99997 15V14.9805M1.04688 8.00003L1 7.99999M15 8.00003H14.9805M3.08338 12.9166L3.05021 12.9497M12.9497 3.05028L12.9359 3.06409M12.9166 12.9166L12.9497 12.9498M3.05022 3.05026L3.06403 3.06407M12 8C12 10.2091 10.2091 12 7.99997 12C5.79083 12 3.99997 10.2091 3.99997 8C3.99997 5.79086 5.79083 4 7.99997 4C10.2091 4 12 5.79086 12 8Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10105">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
