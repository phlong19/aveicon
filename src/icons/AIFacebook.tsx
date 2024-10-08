import { IconProps } from "../model.ts";

export default function AIFacebook({
  className,
  style,
  size = 16,
  fill = "none",
  fillOpacity = 1,
  stroke = "black",
  strokeWidth = 6,
  strokeOpacity = 1,
  ariaLabel,
  viewBox = "0 0 45 75",
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
        d="M26.645 42.6953V72H13.1834V42.6953H2V30.8129H13.1834V26.4896C13.1834 10.4393 19.8883 2 34.0747 2C38.4238 2 39.5111 2.69896 41.8928 3.26849V15.0215C39.2263 14.5555 38.4756 14.2966 35.7056 14.2966C32.4179 14.2966 30.6575 15.2286 29.0525 17.0666C27.4475 18.9046 26.645 22.0888 26.645 26.645V30.8388H41.8928L37.8025 42.7212H26.645V42.6953Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
