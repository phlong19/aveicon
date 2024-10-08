import { IconPropsSimplify } from "../model.ts";

export default function AINewFolder({
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
      <g clip-path="url(#clip0_598_16862)">
        <path
          d="M8.27592 3.33333H13.9999C14.1767 3.33333 14.3463 3.40357 14.4713 3.5286C14.5963 3.65362 14.6666 3.82319 14.6666 4V13.3333C14.6666 13.5101 14.5963 13.6797 14.4713 13.8047C14.3463 13.9298 14.1767 14 13.9999 14H1.99992C1.82311 14 1.65354 13.9298 1.52851 13.8047C1.40349 13.6797 1.33325 13.5101 1.33325 13.3333V2.66667C1.33325 2.48986 1.40349 2.32029 1.52851 2.19526C1.65354 2.07024 1.82311 2 1.99992 2H6.94258L8.27592 3.33333ZM2.66659 3.33333V12.6667H13.3333V4.66667H7.72392L6.39059 3.33333H2.66659ZM7.33325 8V6H8.66658V8H10.6666V9.33333H8.66658V11.3333H7.33325V9.33333H5.33325V8H7.33325Z"
          fill={fill}
          fillOpacity={fillOpacity}
        />
      </g>
      <defs>
        <clipPath id="clip0_598_16862">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
