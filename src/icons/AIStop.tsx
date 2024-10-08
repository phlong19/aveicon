import { IconProps } from "../model.ts";

export default function AIStop({
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
        d="M8 2C9.86377 2 10.7956 2 11.5307 2.30448C12.5108 2.71046 13.2895 3.48915 13.6955 4.46927C14 5.20435 14 6.13623 14 8V8C14 9.86377 14 10.7957 13.6955 11.5307C13.2895 12.5108 12.5108 13.2895 11.5307 13.6955C10.7956 14 9.86377 14 8 14V14C6.13623 14 5.20435 14 4.46927 13.6955C3.48915 13.2895 2.71046 12.5108 2.30448 11.5307C2 10.7956 2 9.86377 2 8V8C2 6.13623 2 5.20435 2.30448 4.46927C2.71046 3.48915 3.48915 2.71046 4.46927 2.30448C5.20435 2 6.13623 2 8 2V2Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
