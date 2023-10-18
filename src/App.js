import React, { useState } from 'react';
import { StarRatings, Modal, Table, AdvancedTable, Bars } from './components/';
import SideBar from './components/SideBar';

import styles from './styles/App.module.scss';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <main className={styles.app} data-testid="app-component">
      <h1 data-testid="app-title">This is a Custom React App</h1>

      {/* STAR RATING DISPLAY EXAMPLE */}
      <StarRatings rating={rating} setRating={setRating} />

      <br />

      {/* SIMPLE TABLE DISPLAY EXAMPLE */}
      <Table
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
      <AdvancedTable
        data={[
          { id: 1, name: 'John', age: 30 },
          { id: 2, name: 'Alice', age: 25 },
          { id: 2, name: 'John', age: 45 },
        ]}
        renderHeader={renderHeader}
        renderCell={renderCell}
      />

      <br />

      {/* BARS CHART EXAMPLE */}
      <section style={{ width: '65%' }}>
        <Bars width={14}>{14}% Engine</Bars>
        <Bars width={-22}>{-22}% Finance</Bars>
      </section>

      <br />

      {/* MODAL DISPLAY EXAMPLE */}
      <button onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        contentStyle={styles.modalContent}
        btnStyle={styles.closeButton}
      >
        <p>Modal Content</p>
      </Modal>

      <br />
      <br />

      {/* SIDEBAR DISPLAY EXAMPLE */}
      <button onClick={toggleSidebar}>
        {isMenuOpen ? '☰ Close' : '☰ Menu'}
      </button>
      <SideBar
        isOpen={isMenuOpen}
        toggleSidebar={toggleSidebar}
        closebtnStyle="closebtn"
      >
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <li>Who we are</li>
          <li>Let &apos;s talk</li>
        </ul>
      </SideBar>
    </main>
  );
};

export default App;
