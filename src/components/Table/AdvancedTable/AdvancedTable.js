import React from 'react';

/**
 * Table component for rendering data in a tabular format with customizable styles,
 * header rendering, and cell rendering functions.
 * @component
 *
 * @param {Object} props - The component props.
 * @param {Object[]} props.data - The data array to be displayed in the table.
 * @param {string} [props.tableClassName] - Custom class name for the table element.
 * @param {string} [props.thClassName] - Custom class name for the <th> elements.
 * @param {string} [props.tdClassName] - Custom class name for the <td> elements.
 * @param {function} [props.renderHeader] - Function to customize rendering of table headers.
 * @param {function} [props.renderCell] - Function to customize rendering of table cells.
 *
 * @returns {JSX.Element} Rendered table component.
 *
 * @example
 * // Example usage of the Table component with custom header and cell rendering functions.
 * const data = [
 *   { id: 1, name: 'John', age: 30 },
 *   { id: 2, name: 'Alice', age: 25 },
 *   // ...more data
 * ];
 *
 *  // Custom header rendering function.
 *  const renderHeader = (columnName) => {
 *   if (columnName === 'name') {
 *      return styles.highlightedCell;
 *   } else if (columnName === 'age') {
 *    return styles.highlightedCell2;
 *   }
 * }
 *
 *   // Custom cell rendering function.
 *   const renderCell = (columnName, cellData) => {
 *    // Apply custom styling based on column name and cell value
 *    if (columnName === 'age' && cellData >= 30) {
 *      return 'highlighted-cell';
 *    }
 *    return '';
 *  };
 *
 * <Table
 *   data={data}
 *   tableClassName="customTable"
 *   thClassName="customTh"
 *   tdClassName="customTd"
 *   renderHeader={renderHeader}
 *   renderCell={renderCell}
 * />
 */

const AdvancedTable = ({
  data,
  tableClassName,
  thClassName,
  tdClassName,
  renderHeader,
  renderCell,
}) => {
  if (!data || data.length === 0) {
    return <p data-testid="no-data">No data available</p>;
  }

  const columns = Object.keys(data[0]);

  return (
    <table className={`table ${tableClassName || ''}`}>
      <thead>
        <tr>
          {columns.map((col, i) => (
            <th
              key={i}
              className={`${thClassName || ''} ${
                renderHeader && renderHeader(col)
              }`}
            >
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, j) => (
          <tr key={j}>
            {columns.map((col, k) => (
              <td
                key={k}
                className={`${tdClassName || ''} ${
                  renderCell && renderCell(col, row[col])
                }`}
              >
                {row[col]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdvancedTable;
