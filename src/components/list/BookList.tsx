import React from 'react';
import * as styles from './BookList.module.css';
import BookListItem from './BookListItem';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

interface Props {
  books?: BookWithId[];
}

const BookList: React.FC<Props> = ({ books }) => {
  const favoriteIds = useSelector((state: RootState) => state.favorites.ids);

  return (
    <div className={styles.bookList}>
      {books?.map((book) => (
        <BookListItem
          key={book.title}
          book={book}
          isFavourite={favoriteIds.includes(book.id)}
        />
      ))}
    </div>
  );
};

export default BookList;
