import React, { useState } from 'react';

import styles from './ClientSideDrilldown.module.scss';

const ClientDrilldown = ({ data, isNested, level = 0 }) => {
  const [expandedRows, setExpandedRows] = useState([]);

  const columns = Object.keys(data[0]).filter((item) => item !== 'nestedData');

  const handleRowClick = (index) => {
    const isRowExpanded = expandedRows.includes(index);

    setExpandedRows(
      isRowExpanded
        ? expandedRows.filter((i) => i !== index)
        : [...expandedRows, index],
    );
  };

  return (
    <table className={`${styles.table} ${isNested ? styles.nested : ''}`}>
      {!isNested && (
        <thead>
          <tr>
            <th></th>
            {columns.map((item, i) => (
              <th key={i}>{item.toUpperCase()}</th>
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
              <td
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  border: 0,
                }}
              >
                {item.nestedData && (
                  <span className={styles.toggleButton}>
                    {expandedRows.includes(index) ? '-' : '+'}
                  </span>
                )}
              </td>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
            </tr>
            {expandedRows.includes(index) && item.nestedData && (
              <tr className={styles.childRow}>
                <td colSpan="4" className={styles.nestedCell}>
                  <ClientDrilldown
                    data={item.nestedData}
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

export default ClientDrilldown;
