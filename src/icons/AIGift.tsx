import { IconProps } from "../model.ts";

export default function AIGift({
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
      <g clipPath="url(#clip0_457_10219)">
        <path
          d="M8 15.0005H10.8C11.9201 15.0005 12.4802 15.0005 12.908 14.7825C13.2843 14.5908 13.5903 14.2848 13.782 13.9085C14 13.4807 14 12.9206 14 11.8005V7.00046H2V11.8005C2 12.9206 2 13.4807 2.21799 13.9085C2.40973 14.2848 2.71569 14.5908 3.09202 14.7825C3.51984 15.0005 4.07989 15.0005 5.2 15.0005H8ZM8 15.0005V4.00046M8 4.00046H13.5C13.9659 4.00046 14.1989 4.00046 14.3827 4.07658C14.6277 4.17807 14.8224 4.37275 14.9239 4.61778C15 4.80155 15 5.03452 15 5.50046C15 5.9664 15 6.19937 14.9239 6.38314C14.8224 6.62817 14.6277 6.82285 14.3827 6.92434C14.1989 7.00046 13.9659 7.00046 13.5 7.00046H2.5C2.03406 7.00046 1.80109 7.00046 1.61732 6.92434C1.37229 6.82285 1.17761 6.62817 1.07612 6.38314C1 6.19937 1 5.9664 1 5.50046C1 5.03452 1 4.80155 1.07612 4.61778C1.17761 4.37275 1.37229 4.17807 1.61732 4.07658C1.80109 4.00046 2.03406 4.00046 2.5 4.00046H4M8 4.00046C8 1.5042 6.09651 0.837157 5.00785 1.11404C3.50796 1.49551 3.62733 3.35337 4 4.00046M8 4.00046H4M8 4.00046C8 1.5042 9.90349 0.837157 10.9921 1.11404C12.492 1.49551 12.3727 3.35337 12 4.00046H8Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10219">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
