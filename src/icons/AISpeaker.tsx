import { IconProps } from "../model";

export default function AISpeaker({
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
      style={{ ...style, width: size, height: size }}
      className={className}
      viewBox={viewBox}
      xmlns="http://www.w3.org/2000/svg"
      aria-label={ariaLabel}
      fill={fill}
      fillOpacity={fillOpacity}
    >
      <g clipPath="url(#clip0_457_10170)">
        <path
          d="M7 2.99994H4C2.34315 2.99994 1 4.34309 1 5.99994C1 7.6568 2.34315 8.99994 6.5 8.99994M7 2.99994V8.99994M7 2.99994L11.0239 1.99397C12.3792 1.65514 13.0569 1.48573 13.5906 1.65068C14.0583 1.79525 14.4568 2.10638 14.7105 2.52512C15 3.00288 15 3.7014 15 5.09843V6.90146C15 8.29849 15 8.99701 14.7105 9.47477C14.4568 9.89351 14.0583 10.2046 13.5906 10.3492C13.0569 10.5142 12.3792 10.3447 11.0239 10.0059L7 8.99994M7 8.99994H4M7 8.99994L8.37566 13.1269C8.68281 14.0484 7.99696 14.9999 7.02566 14.9999C6.41315 14.9999 5.86935 14.608 5.67566 14.0269L4 8.99994"
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeOpacity={strokeOpacity}
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10170">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
