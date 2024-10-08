/**
 * Props for the Icon component.
 *
 * This interface defines the properties that can be passed to the Icon component,
 * allowing for customization of size, color, accessibility, and more.
 *
 * @see https://reactjs.org/docs/components-and-props.html for more information on React components and props.
 * @example
 * ```tsx
 * <Icon
 *   className="my-icon "
 *   width={40}
 *   height={40}
 *   fill="red"
 *   ariaLabel="Close button"
 * />
 * ```
 */
export interface IconProps {
  /**
   * Additional class names for styling the icon.
   *
   * @example "icon-class"
   */
  className?: string;

  /**
   * Inline styles for the SVG element.
   *
   * @example {{ color: 'blue', margin: '10px' }}
   */
  style?: React.CSSProperties;

  /**
   * Width x Height of the icon. Can be specified in pixels or as a percentage.
   * Default is '16'.
   *
   * @example "100%"| "6px" | 20
   */
  size?: number | string;

  /**
   * Fill color for the SVG path. Default is 'none', if the component not support "stroke", default is 'black'.
   *
   * @example "blue"
   */
  fill?: string;

  /**
   * Fill opacity for the SVG path. Default is 1.
   *
   * @example 0.5
   */
  fillOpacity?: number;

  /**
   * Stroke color for the SVG path. Default is 'black'.
   *
   * @example "green"
   */
  stroke?: string;

  /**
   * Stroke width for the SVG path. Usually default is 2, sometimes different.
   *
   * @example 3
   */
  strokeWidth?: number;

  /**
   * Stroke opacity for the SVG path. Default is 1.
   *
   * @example 0.5
   */
  strokeOpacity?: number;

  /**
   * ViewBox attribute for the SVG.
   */
  viewBox?: string;

  /**
   * Accessible label for the icon, used by screen readers.
   *
   * @example "Search icon"
   */
  ariaLabel?: string;
}

/**
 * Extends from IconProps Interface, but remove stroke relevant properties
 */
export type IconPropsSimplify = Omit<
  IconProps,
  "stroke" | "strokeOpacity" | "strokeWidth"
>;
