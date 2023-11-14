import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Pagination from './Pagination';

const PaginationPage = ({ url }) => {
  const [postsPerPage] = useState(2);
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  // FUNCTION TO FIX TO RETURN THE DATA AND REMOVE THE SET STATE
  const getData = async () => {
    const { data } = await axios.get(url);
    setCoinsData(data);
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

  useEffect(() => {
    // CARRY OUT THE SET STATE
    getData();
  }, []);

  return (
    <section>
      {currentPosts?.map((coin, i) => {
        return (
          <div
            style={{ display: 'flex', alignItems: 'center', margin: '.5rem 0' }}
            key={i}
          >
            <img src={coin?.image} alt={coin?.name} width={40} />
            <span style={{ margin: '0 .35rem' }}>{coin?.name},</span>
            <span>${coin?.current_price}</span>
          </div>
        );
      })}

      <Pagination
        totalPosts={coinsData.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </section>
  );
};

export default PaginationPage;
