import { IconProps } from "../model.ts";

export default function AIHelp({
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
      <g clip-path="url(#clip0_2326_67892)">
        <path
          d="M7.99992 14.6663C11.6818 14.6663 14.6666 11.6816 14.6666 7.99967C14.6666 4.31778 11.6818 1.33301 7.99992 1.33301C4.31802 1.33301 1.33325 4.31778 1.33325 7.99967C1.33325 11.6816 4.31802 14.6663 7.99992 14.6663Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.06006 6.00038C6.21679 5.55483 6.52616 5.17912 6.93336 4.9398C7.34056 4.70049 7.81932 4.61301 8.28484 4.69285C8.75036 4.7727 9.1726 5.01473 9.47678 5.37607C9.78095 5.7374 9.94743 6.19473 9.94672 6.66705C9.94672 8.00038 7.94673 8.66705 7.94673 8.66705"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8 11.333H8.00667"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_2326_67892">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
