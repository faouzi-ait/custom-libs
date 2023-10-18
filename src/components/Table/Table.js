import React from 'react';

/**
 * Table component for rendering data in a tabular format with customizable styles.
 * @component
 *
 * @param {Object[]} props.data - The data array to be displayed in the table.
 * @param {string} [props.tableClassName] - Custom class name for the table element.
 * @param {string} [props.thClassName] - Custom class name for the <th> elements.
 * @param {string} [props.tdClassName] - Custom class name for the <td> elements.
 *
 * @returns {JSX.Element} Rendered table component.
 *
 * @example
 * // Example usage of the Table component with custom class names.
 * const data = [
 *   { id: 1, name: 'John', age: 30 },
 *   { id: 2, name: 'Alice', age: 25 },
 * ];
 *
 * .customTable, .customTh, .customTd {
 *      Custom styles here
 * }
 *
 * <Table data={data}
 *  tableClassName="customTable"
 *  thClassName="customTh"
 *  tdClassName="customTd" />
 */
const Table = ({ data, tableClassName, thClassName, tdClassName }) => {
  if (!data || data.length === 0) {
    return <p data-testid="no-data">No data available</p>;
  }

  const columns = Object.keys(data[0]);

  return (
    <table className={`table ${tableClassName || ''}`}>
      <thead>
        <tr>
          {columns.map((col, i) => (
            <th key={i} className={thClassName || ''}>
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, j) => (
          <tr key={j}>
            {columns.map((col, k) => (
              <td key={k} className={tdClassName || ''}>
                {row[col]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
