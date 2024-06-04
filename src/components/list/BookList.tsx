import React from 'react';
import * as styles from './BookList.module.css';
import BookListItem from './BookListItem';

interface Props {
  books?: Book[];
}

const BookList: React.FC<Props> = ({ books }) => {
  return (
    <div className={styles.bookList}>
      {books?.map((book) => <BookListItem key={book.title} book={book} />)}
    </div>
  );
};

export default BookList;
