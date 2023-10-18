import React from 'react';

// import styles from '../../styles/App.module.scss';

const Bars = ({ width, children }) => {
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
      <span style={{ fontSize: '15px' }}>{children}</span>
    </section>
  );
};

export default Bars;
