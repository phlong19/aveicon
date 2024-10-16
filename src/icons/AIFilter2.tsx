import { IconPropsSimplify } from "../model.ts";

export default function AIFilter2({
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
      <path
        d="M6.66667 11.3333C6.66667 11.7015 6.96514 12 7.33333 12H8.66667C9.03486 12 9.33333 11.7015 9.33333 11.3333C9.33333 10.9651 9.03486 10.6667 8.66667 10.6667H7.33333C6.96514 10.6667 6.66667 10.9651 6.66667 11.3333ZM2.66667 4C2.29848 4 2 4.29848 2 4.66667C2 5.03486 2.29848 5.33333 2.66667 5.33333H13.3333C13.7015 5.33333 14 5.03486 14 4.66667C14 4.29848 13.7015 4 13.3333 4H2.66667ZM4 8C4 8.36819 4.29848 8.66667 4.66667 8.66667H11.3333C11.7015 8.66667 12 8.36819 12 8C12 7.63181 11.7015 7.33333 11.3333 7.33333H4.66667C4.29848 7.33333 4 7.63181 4 8Z"
        fill={fill}
        fillOpacity={fillOpacity}
      />
    </svg>
  );
}
