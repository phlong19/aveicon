import { IconProps } from "../model.ts";

export default function AITikTok({
  className,
  style,
  size = 16,
  fill = "none",
  fillOpacity = 1,
  stroke = "black",
  strokeWidth = 5,
  strokeOpacity = 1,
  ariaLabel,
  viewBox = "0 0 65 74",
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
        d="M46.5893 4.66285L44.9004 2H34.6802V25.9831L34.6454 49.4092C34.6628 49.5833 34.6802 49.7747 34.6802 49.9488C34.6802 55.814 29.9097 60.6002 24.0248 60.6002C18.1399 60.6002 13.3693 55.8314 13.3693 49.9488C13.3693 44.0835 18.1399 39.2974 24.0248 39.2974C25.2435 39.2974 26.4275 39.5236 27.5244 39.9065V28.2108C26.3927 28.0194 25.2261 27.915 24.0248 27.915C11.8894 27.9324 2 37.818 2 49.9662C2 62.1144 11.8894 72 24.0422 72C36.195 72 46.0844 62.1144 46.0844 49.9662V22.1019C50.4893 26.5052 56.1827 30.8041 62.4854 32.179V20.2223C55.643 17.1939 48.8353 8.24814 46.5893 4.66285Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
