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
const Header = ({ message }) => {
  return <h1>{message}</h1>;
};

export default Header;
