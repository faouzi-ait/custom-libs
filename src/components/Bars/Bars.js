import React from 'react';

/**
 * Bars component for displaying bars with customizable width, color, and content.
 * @component
 *
 * @param {Object} props - The component props.
 * @param {string} [props.width='100%'] - The width of the bar as a CSS value.
 * @param {string} [props.fontSize='13px'] - The font size of the content inside the bar.
 * @param {ReactNode} props.children - The content to be displayed inside the bar.
 *
 * @returns {JSX.Element} Rendered Bars component.
 *
 * @example
 * // Example usage of the Bars component.
 * const MyComponent = () => {
 *   return (
 *     <div>
 *       <Bars width="50%" fontSize="18px">50%</Bars>
 *       <Bars width="-75%" fontSize="24px>"-75%</Bars>
 *     </div>
 *   );
 * }
 */
const Bars = ({ width = '100%', fontSize = '13px', children }) => {
  const opposite = (number) => -number;
  const num = width < 0 ? opposite(width) : width;

  const styleStr = {
    display: 'flex',
    justifyItem: 'center',
    width: `${num}%`,
    margin: '3px 0',
    padding: '5px 10px',
    color: width > 0 ? 'black' : 'white',
    background: width > 0 ? 'lightblue' : 'red',
  };

  return (
    <section style={{ ...styleStr }}>
      <span style={{ fontSize }}>{children}</span>
    </section>
  );
};

export default Bars;
