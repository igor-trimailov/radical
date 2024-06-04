import React from 'react';
import { ReactComponent as BookIcon } from '../../../public/images/book.svg';
import { ReactComponent as FavoriteIcon } from '../../../public/images/heart.svg';
import * as styles from './BookList.module.css';
import StarRating from '../stars/StarRating';
import { useDispatch } from 'react-redux';
import { addFavorite, removeFavorite } from '../../store/features/favorites';

interface Props {
  book: BookWithId;
  isFavourite: boolean;
}

const BookListItem: React.FC<Props> = ({ book, isFavourite }) => {
  const dispatch = useDispatch();

  const handleFavouriteChange = (event: React.MouseEvent<SVGSVGElement>) => {
    event.preventDefault();

    if (!isFavourite) {
      dispatch(addFavorite(book.id));
    } else {
      dispatch(removeFavorite(book.id));
    }
  };

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
      <FavoriteIcon
        className={
          isFavourite ? styles.bookFavoriteActive : styles.bookFavorite
        }
        onClick={handleFavouriteChange}
      />
    </div>
  );
};

export default BookListItem;
