import React, { useState } from 'react';
import PropTypes from 'prop-types';

/**
 * A table component with sorting, filtering, and pagination functionality.
 *
 * @component
 * @example
 * const data = [
 *   { name: 'Alice', age: 30 },
 *   { name: 'Bob', age: 25 },
 *   // ...
 * ];
 * <SortedFilteredTable data={data} />
 *
 * @param {Object} props - The component props.
 * @param {Array} props.data - The array of objects representing the table data.
 * @param {number} [props.pageSize=3] - The number of rows to display per page.
 * @param {boolean} [props.showNav=true] - Whether to display navigation buttons for pagination.
 * @param {boolean} [props.showFilter=true] - Whether to display the filter input field.
 * @param {string} [props.tableClassName] - Additional CSS class for the table element.
 * @param {string} [props.thClassName] - Additional CSS class for the table header cells.
 * @param {string} [props.tdClassName] - Additional CSS class for the table data cells.
 * @param {Function} [props.renderHeader] - Function to customize rendering of table header cells.
 * @param {Function} [props.renderCell] - Function to customize rendering of table data cells.
 * @param {Object} [props.inlineFilterStyle] - Inline styles for the filter input element.
 * @param {Object} [props.filterStyle] - CSS class for the filter input element.
 * @param {string} [props.paginationStyle] - Additional CSS class for the pagination nav element.
 * @param {Object} [props.inlinePaginationStyle] - Inline styles for the pagination nav element.
 * @returns {JSX.Element} - Rendered component.
 *
 * @throws {TypeError} Will throw an error if `data` is not provided or is not an array of objects.
 */
const SortedFilteredTable = ({
  data,
  pageSize = 3,
  showNav = true,
  showFilter = true,
  tableClassName,
  thClassName,
  tdClassName,
  renderHeader,
  renderCell,
  filterStyle,
  inlineFilterStyle,
  paginationStyle,
  inlinePaginationStyle,
  ...props
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredData, setFilteredData] = useState(data);
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (column) => {
    if (sortedColumn === column) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortedColumn(column);
      setSortOrder('asc');
    }

    const sortedData = [...filteredData].sort((a, b) => {
      const aValue = a[column];
      const bValue = b[column];

      if (typeof aValue === 'string' && typeof bValue === 'string') {
        return sortOrder === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }

      return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
    });

    setFilteredData(sortedData);
    setCurrentPage(1);
  };

  const handleFilter = (filterValue) => {
    const filteredResults = data.filter((row) => {
      return Object.values(row).some((cellValue) => {
        const lowerCaseCellValue = String(cellValue).toLowerCase();
        return lowerCaseCellValue.includes(filterValue.toLowerCase());
      });
    });
    setFilteredData(filteredResults);
    setCurrentPage(1);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = filteredData.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredData.length / pageSize);

  return (
    <>
      {showFilter && (
        <div>
          <input
            type="text"
            placeholder="Filter..."
            onChange={(e) => handleFilter(e.target.value)}
            className={filterStyle}
            style={inlineFilterStyle}
          />
        </div>
      )}
      <table className={tableClassName} {...props}>
        <thead>
          <tr>
            {Object.keys(data[0]).map((column, index) => (
              <th
                key={index}
                onClick={() => handleSort(column)}
                className={`${thClassName || ''} ${
                  renderHeader && renderHeader(column)
                }`}
              >
                {sortedColumn === column && (
                  <span>{sortOrder === 'asc' ? ' ↑' : ' ↓'}</span>
                )}
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.keys(row).map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`${tdClassName || ''} ${
                    renderCell && renderCell(column, row[column])
                  }`}
                >
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {showNav && (
        <nav className={paginationStyle} style={inlinePaginationStyle}>
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          <span>
            Page {currentPage}/{totalPages}
          </span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </nav>
      )}
    </>
  );
};

SortedFilteredTable.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageSize: PropTypes.number,
  showNav: PropTypes.bool,
  showFilter: PropTypes.bool,
  tableClassName: PropTypes.string,
  thClassName: PropTypes.string,
  tdClassName: PropTypes.string,
  inlinePaginationStyle: PropTypes.object,
  paginationStyle: PropTypes.string,
  inlineFilterStyle: PropTypes.object,
  filterStyle: PropTypes.string,
};

export default SortedFilteredTable;
