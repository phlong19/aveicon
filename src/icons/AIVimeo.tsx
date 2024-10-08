import { IconProps } from "../model.ts";

export default function AIVimeo({
  className,
  style,
  size = 16,
  fill = "none",
  fillOpacity = 1,
  stroke = "black",
  strokeWidth = 5,
  strokeOpacity = 1,
  ariaLabel,
  viewBox = "0 0 73 64",
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
        d="M3 18.2774L6.17877 22.1498C6.17877 22.1498 12.1607 16.8614 13.5767 20.387C14.9927 23.9125 24.5 53.8797 24.5 53.8797C24.5 53.8797 27.3321 62 33.6607 62C39.4114 62 44.1796 56.6539 47.8785 52.8972C57.8483 42.8118 68.1937 30.3568 70.101 15.7922C70.9679 9.17459 67.7024 2.21019 60.3335 2.00791C56.5478 1.89232 52.6467 3.04823 49.5546 5.18668C45.2777 8.16317 42.8502 12.9313 41.781 17.9307C41.781 17.9307 47.4161 14.0583 50.2481 18.6242C51.9531 21.3984 50.7683 24.9529 49.4389 27.6404C48.1674 30.2123 46.7225 32.7264 45.162 35.1538C44.0639 36.8588 42.359 39.7775 40.0183 39.7775C37.1863 39.7775 36.2037 32.8709 35.7991 30.9925C34.2965 24.3749 34.3543 17.4972 32.3603 10.9952C31.1755 7.09394 28.6036 1.05428 23.4597 2.38358C12.5363 5.21558 3 18.2774 3 18.2774Z"
        stroke={stroke}
        strokeOpacity={strokeOpacity}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
