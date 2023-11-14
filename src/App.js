import React, { useState } from 'react';
import * as CMP from './components/';

import { tree } from './components/FileTree/data';

import useGeoLocation from './hooks/useLocation';

import styles from './styles.module.scss';

export const url =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=1&sparkline=false';

const App = () => {
  const { latitude, longitude, error } = useGeoLocation();
  const [isOtherModalOpen, setOtherModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [rating, setRating] = useState(0);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const toggleSidebar = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const openModal2 = () => {
    setOtherModalOpen(true);
  };

  const closeOtherModal = () => {
    setOtherModalOpen(false);
  };

  const renderHeader = (columnName) => {
    if (columnName === 'name') {
      return styles.highlightedCell;
    } else if (columnName === 'age') {
      return styles.highlightedCell2;
    }
  };

  const renderCell = (columnName, cellData) => {
    if (columnName === 'age') {
      return styles.highlightedCell;
    }
    if (columnName === 'name' && cellData === 'Alice') {
      return styles.highlightedCell2;
    }
    return '';
  };

  return (
    <>
      <main className={styles.app} data-testid="app-component">
        <h1 data-testid="app-title">This is a Custom React App</h1>

        {/* PAGINATION DISPLAY EXAMPLE */}
        {/* <CMP.PaginationPage url={url} /> */}

        <br />

        {/* STAR RATING DISPLAY EXAMPLE */}
        <CMP.StarRatings rating={rating} setRating={setRating} />

        <br />

        {/* SIMPLE TABLE DISPLAY EXAMPLE */}
        <CMP.BasicTable
          data={[
            { id: 1, name: 'Faouzi', lastname: 'Aitelhara' },
            { id: 2, name: 'Samy', lastname: 'Aitelhara' },
            { id: 3, name: 'Fouad', lastname: 'Aitelhara' },
          ]}
          thClassName={styles.headerStyle}
          tdClassName={styles.highlightedCell2}
        />

        <br />

        {/* ADVANCED TABLE DISPLAY EXAMPLE */}
        <CMP.AdvancedTable
          data={[
            { id: 1, name: 'John', age: 30 },
            { id: 2, name: 'Alice', age: 25 },
            { id: 3, name: 'John', age: 45 },
          ]}
          renderHeader={renderHeader}
          renderCell={renderCell}
        />

        <br />

        {/* SORTED FILTERED TABLE DISPLAY EXAMPLE */}
        <CMP.SortedFilteredTable
          data={[
            { id: 1, name: 'John', age: 30 },
            { id: 2, name: 'Alice', age: 25 },
            { id: 3, name: 'John', age: 45 },
            { id: 4, name: 'Jack', age: 22 },
            { id: 5, name: 'Jill', age: 19 },
            { id: 6, name: 'Mike', age: 38 },
            { id: 7, name: 'Dave', age: 49 },
            { id: 8, name: 'James', age: 17 },
            { id: 9, name: 'Billy', age: 54 },
            { id: 10, name: 'Joe', age: 65 },
          ]}
          tdClassName={styles.highlightedCell2}
          renderHeader={renderHeader}
          renderCell={renderCell}
          style={{ width: '224px', height: '224px', textAlign: 'center' }}
          inlineFilterStyle={{
            all: 'unset',
            border: '1px solid red',
            width: '200px',
            padding: '10px',
          }}
          inlinePaginationStyle={{
            border: '1px solid red',
            width: '200px',
            padding: '10px',
            textAlign: 'center',
          }}
        />

        <br />

        {/* DRILLDOWN TABLE DISPLAY EXAMPLE */}
        <CMP.ClientSideDrilldown
          data={[
            {
              id: 1,
              name: 'Item 1',
              description: 'Description 1',
            },
            {
              id: 2,
              name: 'Item 2',
              description: 'Description 2',
              nestedData: [
                {
                  id: 2.1,
                  name: 'Item 1.1',
                  description: 'Description 1.1',
                  nestedData: [
                    {
                      id: 3.1,
                      name: 'Item 3.1',
                      description: 'Description 3.1',
                      nestedData: [
                        {
                          id: 4.1,
                          name: 'Item 4.1',
                          description: 'Description 4.1',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 3,
              name: 'Item 2',
              description: 'Description 2',
              nestedData: [
                {
                  id: 3.1,
                  name: 'Item 1.1',
                  description: 'Description 1.1',
                  nestedData: [
                    {
                      id: 3.2,
                      name: 'Item 3.1',
                      description: 'Description 3.1',
                      nestedData: [
                        {
                          id: 3.3,
                          name: 'Item 4.1',
                          description: 'Description 4.1',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            // Add more data objects as needed
          ]}
        />

        <br />

        {/* BARS CHART EXAMPLE */}
        <section style={{ width: '65%' }}>
          <CMP.Bars width={14}>{14}% Engine</CMP.Bars>
          <CMP.Bars width={-22}>{-22}% Finance</CMP.Bars>
        </section>

        {/* GEOLOCATION COORDINATES DISPLAY EXAMPLE */}
        <section>
          <p>
            Geolocation coordinates <br />
            {error
              ? `Error: ${error}`
              : `Latitude: ${latitude} Longitude: ${longitude}`}
          </p>
        </section>

        {/* MODAL DISPLAY EXAMPLE */}
        <button onClick={openModal}>Open Modal</button>
        <CMP.Modal
          isOpen={isOpen}
          onClose={closeModal}
          contentStyle={styles.modalContent}
          btnStyle={styles.closeButton}
        >
          <p>Modal Content</p>
        </CMP.Modal>

        <br />

        {/* OTHER MODAL DISPLAY EXAMPLE */}
        <button onClick={openModal2}>Open Other Modal</button>
        <CMP.Modal_
          title="Modal Title"
          isOpen={isOtherModalOpen}
          onClose={closeOtherModal}
        >
          Content
        </CMP.Modal_>

        <br />
        <br />

        {/* SIDEBAR DISPLAY EXAMPLE */}
        <button onClick={toggleSidebar}>
          {isMenuOpen ? '☰ Close' : '☰ Menu'}
        </button>
        <CMP.SideBar
          isOpen={isMenuOpen}
          toggleSidebar={toggleSidebar}
          closebtnStyle="closebtn"
          top="500px"
        >
          <ul className="sidebar-style">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Who we are</li>
            <li>Let &apos;s talk</li>
          </ul>
        </CMP.SideBar>
      </main>

      <br />
      <br />

      {/* FILETREE EXAMPLE */}
      <CMP.FileTree data={tree} />

      {/* FIXED HEADER AND SIDEBAR EXAMPLE */}
      <CMP.FixedElements />
    </>
  );
};

export default App;
