import React from 'react';
import * as styles from '../App.module.css'; // Import CSS module
import SearchInput from '../components/search/SearchInput';

const Home: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>New York Time Bestsellers</h1>
      <SearchInput placeholder="Search" buttonText="GO" onSearch={() => {}} />
    </div>
  );
};

export default Home;
