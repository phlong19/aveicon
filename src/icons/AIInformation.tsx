import { IconProps } from "../model.ts";

export default function AIInformation({
  className,
  style,
  size = 16,
  fill = "none",
  fillOpacity = 1,
  stroke = "black",
  strokeWidth = 1.8,
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
      <g clipPath="url(#clip0_2326_67887)">
        <path
          d="M7.99992 14.6663C11.6818 14.6663 14.6666 11.6816 14.6666 7.99967C14.6666 4.31778 11.6818 1.33301 7.99992 1.33301C4.31802 1.33301 1.33325 4.31778 1.33325 7.99967C1.33325 11.6816 4.31802 14.6663 7.99992 14.6663Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 10.6667V8"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 5.33301H8.00667"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2326_67887">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
