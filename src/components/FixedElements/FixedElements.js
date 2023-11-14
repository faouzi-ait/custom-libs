import React from 'react';

import styles from './styles.module.scss';

function FixedElements() {
  return (
    <>
      <main>
        <header className={styles.flexContainer}>some header content</header>
        <div className={styles.flexContainer}>
          <aside className={styles.aside}>some sidebar content</aside>
          <section className={styles.main}>
            <div className={styles.content}>some main content</div>
            <div className={styles.content}>some main content</div>
            <div className={styles.content}>some main content</div>
            <div className={styles.content}>some main content</div>
          </section>
        </div>
        <footer className={styles.content}>some footer content</footer>
      </main>
      <footer className={styles.content}>some footer content</footer>
      <footer className={styles.content}>some footer content</footer>
    </>
  );
}

export default FixedElements;
