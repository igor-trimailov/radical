import React from 'react';
import * as styles from './Home.module.css';
import SearchInput from '../components/search/SearchInput';

import { useGetBestSellersListQuery } from '../store/services/books';
import BookList from '../components/list/BookList';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const Home: React.FC = () => {
  const { data, error, isLoading } = useGetBestSellersListQuery();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>New York Time Bestsellers</h1>
      <SearchInput placeholder="Search" buttonText="GO" onSearch={() => {}} />
      <BookList
        books={(data || []).filter((book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase())
        )}
      />
    </div>
  );
};

export default Home;
