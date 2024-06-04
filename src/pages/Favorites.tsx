import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useGetBestSellersListQuery } from '../store/services/books';
import * as styles from './Favorites.module.css';
import SearchInput from '../components/search/SearchInput';
import BookList from '../components/list/BookList';

const Favorites: React.FC = () => {
  const favoriteIds = useSelector((state: RootState) => state.favorites.ids);
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);
  const { data: books } = useGetBestSellersListQuery();

  const favoriteBooks = books?.filter((book) => favoriteIds.includes(book.id));

  return (
    <div className={styles.container}>
      <h2>Favorites</h2>
      <SearchInput placeholder="Search" buttonText="GO" onSearch={() => {}} />
      <BookList
        books={(favoriteBooks || []).filter((book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase())
        )}
      />
    </div>
  );
};

export default Favorites;
