import React from 'react';

/**
 * Main application component.
 * This component serves as the header of the application.
 *
 * @component
 * @param {string} props.message - The message to be displayed.
 *
 * @example
 * import App from './App';
 *
 * <Header message="My App" />
 */
const Header = ({ message, ...rest }) => {
  return (
    <header {...rest}>
      <p>{message}</p>
    </header>
  );
};

export default Header;
