import { IconPropsSimplify } from "../model.ts";

export default function AIChat({
  className,
  style,
  size = 16,
  fill = "black",
  fillOpacity = 1,
  ariaLabel,
  viewBox = "0 0 15 15",
}: IconPropsSimplify) {
  return (
    <svg
      className={className}
      style={{ ...style, height: size, width: size }}
      aria-label={ariaLabel}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
    >
      <g clipPath="url(#clip0_4466_111609)">
        <path
          d="M2.66659 2.66634H13.3333V10.6663H3.44659L2.66659 11.4463V2.66634ZM2.66659 1.33301C1.93325 1.33301 1.33992 1.93301 1.33992 2.66634L1.33392 13.4583C1.33368 13.9039 1.8724 14.1272 2.18748 13.8121L3.99992 11.9997H13.3333C14.0666 11.9997 14.6666 11.3997 14.6666 10.6663V2.66634C14.6666 1.93301 14.0666 1.33301 13.3333 1.33301H2.66659ZM3.99992 7.99967H9.33325V9.33301H3.99992V7.99967ZM3.99992 5.99967H11.9999V7.33301H3.99992V5.99967ZM3.99992 3.99967H11.9999V5.33301H3.99992V3.99967Z"
          fill={fill}
          fillOpacity={fillOpacity}
        />
      </g>
      <defs>
        <clipPath id="clip0_4466_111609">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
