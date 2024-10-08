import { IconProps } from "../model.ts";

export default function AIPinterest({
  className,
  style,
  size = 16,
  fill = "none",
  fillOpacity = 1,
  stroke = "black",
  strokeWidth = 5,
  strokeOpacity = 1,
  ariaLabel,
  viewBox = "0 0 60 75",
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M24.8325 49.8405C27.0485 49.912 29.05 52.8427 34.9115 52.8427C45.9198 52.9142 53.4969 44.4793 55.8559 33.3995C64.0763 -4.98646 8.10566 -8.0602 2.38708 23.535C1.02891 30.9691 3.24486 39.547 9.03493 42.3348C13.4668 44.4793 13.7528 38.3318 12.3946 35.687C6.39009 23.9639 13.6098 13.3845 23.0455 10.3822C31.9093 7.52295 38.1997 9.88186 42.989 14.8141C49.1365 21.1761 46.3487 38.4748 39.0575 43.9789C36.4841 45.909 31.7663 46.3378 29.3359 44.0504C24.3321 39.4041 32.0522 29.5395 30.9085 22.3198C29.7648 15.1716 18.4706 16.2438 17.8987 26.7517C17.6128 32.1129 19.1854 33.6855 17.9702 39.0466C16.0402 47.6245 10.1786 65.1377 14.3246 72C20.4006 69.1407 23.4029 51.985 24.8325 49.8405Z"
        stroke={stroke}
        strokeWidth={strokeWidth}
        strokeOpacity={strokeOpacity}
      />
    </svg>
  );
}
