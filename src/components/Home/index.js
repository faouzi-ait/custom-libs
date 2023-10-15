import React from 'react';
import Header from '../Header';
import styles from '../../styles/App.module.scss';

/**
 * Home component.
 * This component serves as the entry point of the application.
 *
 * @component
 * @example
 * import Home from './Home';
 * <Home />
 */
const Home = () => {
  return (
    <div className={styles.app}>
      <Header message="HELLO.......This is a custom built react project" />
    </div>
  );
};

export default Home;
