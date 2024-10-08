import { IconPropsSimplify } from "../model.ts";

export default function AICategory({
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
      fill={fill}
      fillOpacity={fillOpacity}
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
    >
      <g clip-path="url(#clip0_4466_111120)">
        <path
          d="M8 1.33301L4.33333 7.33301H11.6667L8 1.33301ZM8 3.89301L9.28667 5.99967H6.70667L8 3.89301ZM11.6667 8.66634C10.0067 8.66634 8.66667 10.0063 8.66667 11.6663C8.66667 13.3263 10.0067 14.6663 11.6667 14.6663C13.3267 14.6663 14.6667 13.3263 14.6667 11.6663C14.6667 10.0063 13.3267 8.66634 11.6667 8.66634ZM11.6667 13.333C10.7467 13.333 10 12.5863 10 11.6663C10 10.7463 10.7467 9.99967 11.6667 9.99967C12.5867 9.99967 13.3333 10.7463 13.3333 11.6663C13.3333 12.5863 12.5867 13.333 11.6667 13.333ZM2 14.333H7.33333V8.99967H2V14.333ZM3.33333 10.333H6V12.9997H3.33333V10.333Z"
          fill={fill}
          fillOpacity={fillOpacity}
        />
      </g>
      <defs>
        <clipPath id="clip0_4466_111120">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
