import { IconProps } from "../model.ts";

export default function AILinkedIn({
  className,
  style,
  size = 16,
  fill = "none",
  fillOpacity = 1,
  stroke = "black",
  strokeWidth = 5,
  strokeOpacity = 1,
  ariaLabel,
  viewBox = "0 0 74 74",
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
        d="M17.8066 25.0186H3.17969V71.6628H17.8066V25.0186Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
      />
      <path
        d="M57.3732 24.008C56.834 23.9405 56.2611 23.9068 55.6881 23.8731C47.4984 23.5361 42.8812 28.3893 41.2635 30.4788C40.8254 31.0518 40.6231 31.3888 40.6231 31.3888V25.1538H26.6366V71.7981H40.6231H41.2635C41.2635 67.046 41.2635 62.3277 41.2635 57.5756C41.2635 55.0142 41.2635 52.4528 41.2635 49.8915C41.2635 46.7234 41.0276 43.3532 42.6116 40.4548C43.9597 38.0282 46.3862 36.8149 49.1161 36.8149C57.2047 36.8149 57.3732 44.1283 57.3732 44.8024C57.3732 44.8361 57.3732 44.8698 57.3732 44.8698V72.0003H72.0001V41.5669C72.0001 31.1529 66.7088 25.019 57.3732 24.008Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
      />
      <path
        d="M10.493 18.986C15.1836 18.986 18.9861 15.1836 18.9861 10.493C18.9861 5.80246 15.1836 2 10.493 2C5.80244 2 2 5.80246 2 10.493C2 15.1836 5.80244 18.986 10.493 18.986Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
