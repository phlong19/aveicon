import { IconPropsSimplify } from "../model.ts";

export default function AIBackspace({
  className,
  style,
  size = 16,
  fill = "black",
  fillOpacity = 1,
  ariaLabel,
  viewBox = "0 0 15 15",
}: IconPropsSimplify) {
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
      <g clip-path="url(#clip0_598_16884)">
        <path
          d="M4.35662 2H14C14.1768 2 14.3463 2.07024 14.4714 2.19526C14.5964 2.32029 14.6666 2.48986 14.6666 2.66667V13.3333C14.6666 13.5101 14.5964 13.6797 14.4714 13.8047C14.3463 13.9298 14.1768 14 14 14H4.35662C4.24689 14 4.13886 13.9729 4.0421 13.9212C3.94534 13.8694 3.86285 13.7946 3.80195 13.7033L0.246621 8.37C0.173529 8.26045 0.134521 8.1317 0.134521 8C0.134521 7.8683 0.173529 7.73955 0.246621 7.63L3.80195 2.29667C3.86285 2.20539 3.94534 2.13055 4.0421 2.0788C4.13886 2.02705 4.24689 1.99998 4.35662 2ZM4.71329 3.33333L1.60262 8L4.71329 12.6667H13.3333V3.33333H4.71329ZM8.66662 7.05733L10.552 5.17133L11.4953 6.11467L9.60929 8L11.4953 9.88533L10.552 10.8287L8.66662 8.94267L6.78129 10.8287L5.83795 9.88533L7.72396 8L5.83795 6.11467L6.78129 5.17133L8.66662 7.05733Z"
          fill={fill}
          fillOpacity={fillOpacity}
        />
      </g>
      <defs>
        <clipPath id="clip0_598_16884">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
