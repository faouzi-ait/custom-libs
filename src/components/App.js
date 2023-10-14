import React from 'react';
import styles from '../styles/App.module.scss';

const App = () => {
  const test_message = 'HELLOOOOOOOOOO';

  return (
    <div className={styles.app}>
      <h1>{test_message}, React App!</h1>
    </div>
  );
};

export default App;
