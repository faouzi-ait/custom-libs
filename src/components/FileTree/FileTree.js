import React from 'react';
import styles from './FileTree.module.scss';

const FileTree = ({ data }) => {
  return (
    <ul className={styles.recursiveList}>
      {data.map((m, index) => {
        const isChild = m.children && m.children.length > 0;
        return (
          <li
            key={index}
            className={`${styles.recursiveListItem} ${
              isChild ? styles.recursiveListItemChild : ''
            } ${styles.recursiveListLevel}-${m.level}`}
          >
            {/* {m.anchor && <span>{'> '}</span>} */}
            <span className={styles.recursiveListText}>{m.title}</span>
            {isChild && <FileTree data={m.children} />}
          </li>
        );
      })}
    </ul>
  );
};

export default FileTree;
