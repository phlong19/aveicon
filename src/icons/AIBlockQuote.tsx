import { IconProps } from "../model.ts";

export default function AIBlockQuote({
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
        d="M1 11L1 8C1 4.68629 3.68629 2 7 2M9 11L9 8C9 4.68629 11.6863 2 15 2M3.5 8C3.96466 8 4.19698 8 4.39018 8.03843C5.18356 8.19624 5.80376 8.81644 5.96157 9.60982C6 9.80302 6 10.0353 6 10.5L6 11.5C6 11.9647 6 12.197 5.96157 12.3902C5.80376 13.1836 5.18356 13.8038 4.39018 13.9616C4.19698 14 3.96466 14 3.5 14C3.03535 14 2.80302 14 2.60982 13.9616C1.81644 13.8038 1.19624 13.1836 1.03843 12.3902C1 12.197 1 11.9647 1 11.5L1 10.5C1 10.0353 1 9.80302 1.03843 9.60982C1.19624 8.81644 1.81644 8.19624 2.60982 8.03843C2.80302 8 3.03535 8 3.5 8ZM11.5 8C11.9647 8 12.197 8 12.3902 8.03843C13.1836 8.19624 13.8038 8.81644 13.9616 9.60982C14 9.80302 14 10.0353 14 10.5L14 11.5C14 11.9647 14 12.197 13.9616 12.3902C13.8038 13.1836 13.1836 13.8038 12.3902 13.9616C12.197 14 11.9647 14 11.5 14C11.0353 14 10.803 14 10.6098 13.9616C9.81644 13.8038 9.19624 13.1836 9.03843 12.3902C9 12.197 9 11.9647 9 11.5L9 10.5C9 10.0353 9 9.80302 9.03843 9.60982C9.19624 8.81644 9.81644 8.19624 10.6098 8.03843C10.803 8 11.0353 8 11.5 8Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
      />
    </svg>
  );
}
