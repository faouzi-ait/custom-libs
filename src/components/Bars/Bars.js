import React from 'react';

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
