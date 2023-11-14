import React, { useState, useEffect } from 'react';
import styles from './ServerSideDrilldown.module.scss';

const ServerDrilldown = ({ apiUrl, isNested, level = 0 }) => {
  const [data, setData] = useState([]);
  const [expandedRows, setExpandedRows] = useState([]);

  // const apiURL = 'https://jsonplaceholder.typicode.com/todos/1';

  const fetchData = async (url) => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      setData(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData(apiUrl);
  }, [apiUrl]);

  const handleRowClick = (index) => {
    const isRowExpanded = expandedRows.includes(index);

    setExpandedRows(
      isRowExpanded
        ? expandedRows.filter((i) => i !== index)
        : [...expandedRows, index],
    );
  };

  const columns = Object.keys(data[0] || {});

  return (
    <table className={`${styles.table} ${isNested ? styles.nested : ''}`}>
      {!isNested && (
        <thead>
          <tr>
            <th></th>
            {columns.map((item) => (
              <th key={item}>{item.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
      )}
      <tbody>
        {data.map((item, index) => (
          <React.Fragment key={item.id}>
            <tr
              onClick={() => handleRowClick(index)}
              className={`${styles.row} ${
                expandedRows.includes(index) ? styles.active : ''
              } ${isNested ? styles.nestedRow : ''}`}
            >
              <td style={{ paddingLeft: `${level * 20}px` }}>
                {item.nestedData && (
                  <span className={styles.toggleButton}>
                    {expandedRows.includes(index) ? '-' : '+'}
                  </span>
                )}
              </td>
              {columns.map((col) => (
                <td key={col}>{item[col]}</td>
              ))}
            </tr>
            {expandedRows.includes(index) && item.nestedData && (
              <tr className={styles.childRow}>
                <td colSpan={columns.length + 1} className={styles.nestedCell}>
                  <ServerDrilldown
                    apiUrl={item.nestedDataApiUrl} // Assuming nestedDataApiUrl is a property in your nested data
                    level={level + 1}
                    isNested
                  />
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default ServerDrilldown;
