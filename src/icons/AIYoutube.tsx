import { IconProps } from "../model.ts";

export default function AIYoutube({
  className,
  style,
  size = 16,
  fill = "none",
  fillOpacity = 1,
  stroke = "black",
  strokeWidth = 6,
  strokeOpacity = 1,
  ariaLabel,
  viewBox = "0 0 93 64",
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
        d="M76.5024 62H16.4975C8.46861 62 2 54.8994 2 46.1657V17.8343C2 9.06509 8.50112 2 16.4975 2H76.5024C84.5313 2 90.9999 9.10059 90.9999 17.8343V46.1657C91.0324 54.9349 84.5313 62 76.5024 62Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
      />
      <path
        d="M62.2426 31.5562L37 17V46.1124L62.2426 31.5562Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
