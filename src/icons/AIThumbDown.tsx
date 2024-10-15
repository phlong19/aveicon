import { IconProps } from "../model.ts";

export default function AIThumbDown({
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
      <g clipPath="url(#clip0_457_10193)">
        <path
          d="M15 7.5C15 8.32843 14.3284 9 13.5 9C12.6715 9 12 8.32843 12 7.5V2.5C12 1.67157 12.6715 1 13.5 1C14.3284 1 15 1.67157 15 2.5V7.5Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
        <path
          d="M12 6.95099C12 7.34033 12 7.53501 11.964 7.72222C11.932 7.88834 11.8791 8.04974 11.8065 8.20255C11.7247 8.37475 11.6094 8.53164 11.3789 8.84543L7.00081 14.8055C6.911 14.9278 6.76836 15 6.61666 15C5.56366 15 4.71003 14.1464 4.71003 13.0934L4.71003 9.75H4.49834C3.28475 9.75 2.67795 9.75 2.23121 9.50713C1.83873 9.29376 1.52898 8.95513 1.35135 8.54523C1.14916 8.07866 1.20311 7.47427 1.31102 6.26548L1.52079 3.91548C1.61264 2.88647 1.65857 2.37197 1.88846 1.9828C2.09091 1.64007 2.39102 1.36555 2.75039 1.19437C3.15846 1 3.67501 1 4.70811 1L8.79997 1C9.92008 1 10.4801 1 10.908 1.21799C11.2843 1.40973 11.5902 1.7157 11.782 2.09202C12 2.51984 12 3.0799 12 4.2L12 6.95099Z"
          stroke={stroke}
          strokeOpacity={strokeOpacity}
          strokeWidth={strokeWidth}
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_457_10193">
          <rect width="16" height="16" />
        </clipPath>
      </defs>
    </svg>
  );
}
