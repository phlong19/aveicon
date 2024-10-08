import { IconProps } from "../model.ts";

export default function AIFile({
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
        d="M8 1V3.8C8 4.9201 8 5.48016 8.21799 5.90798C8.40973 6.28431 8.71569 6.59027 9.09202 6.78201C9.51984 7 10.0799 7 11.2 7H14M9.09408 1H5.2C4.0799 1 3.51984 1 3.09202 1.21799C2.71569 1.40973 2.40973 1.71569 2.21799 2.09202C2 2.51984 2 3.0799 2 4.2V11.8C2 12.9201 2 13.4802 2.21799 13.908C2.40973 14.2843 2.71569 14.5903 3.09202 14.782C3.51984 15 4.07989 15 5.2 15H10.8C11.9201 15 12.4802 15 12.908 14.782C13.2843 14.5903 13.5903 14.2843 13.782 13.908C14 13.4802 14 12.9201 14 11.8V6.05756C14 5.59676 14 5.36635 13.9505 5.1481C13.9067 4.95454 13.8342 4.7686 13.7356 4.59637C13.6244 4.40216 13.4686 4.23246 13.1569 3.89306L11.451 2.0355C11.1006 1.65404 10.9255 1.46331 10.7166 1.32658C10.5314 1.20539 10.3275 1.11577 10.113 1.06137C9.87096 1 9.612 1 9.09408 1Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
