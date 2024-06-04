import React from 'react';
import { ReactComponent as BookIcon } from '../../../public/images/book.svg';
import { ReactComponent as FavouriteIcon } from '../../../public/images/heart.svg';
import * as styles from './BookList.module.css';
import StarRating from '../stars/StarRating';

interface Props {
  book: Book;
}

const BookListItem: React.FC<Props> = ({ book }) => {
  return (
    <div className={styles.bookItem}>
      <div className={styles.bookDetails}>
        <BookIcon className={styles.bookIcon} />
        <div className={styles.bookTitleContainer}>
          <div className={styles.bookTitle} title={book.title}>
            {book.title}
          </div>
        </div>
        <div
          className={styles.bookAuthor}
          title={book.author}
        >{`by ${book.author}`}</div>
      </div>
      <StarRating rating={0} />
      <div className={styles.bookPrice}>{`${book.price} GPB`}</div>
      <FavouriteIcon className={styles.bookFavourite} />
    </div>
  );
};

export default BookListItem;
