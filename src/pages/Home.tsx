import React from 'react';
import * as styles from '../App.module.css'; // Import CSS module
// import SearchInput from '../components/search/SearchInput';

import { useGetBestSellersListQuery } from '../store/services/books';
import BookList from '../components/list/BookList';

const Home: React.FC = () => {
  const { data, error, isLoading } = useGetBestSellersListQuery();

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  console.log(data);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>New York Time Bestsellers</h1>
      {/* <SearchInput placeholder="Search" buttonText="GO" onSearch={() => {}} /> */}
      <BookList books={data?.results} />
    </div>
  );
};

export default Home;
