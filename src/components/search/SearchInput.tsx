import React, { useEffect, ChangeEvent, FormEvent } from 'react';
import SearchIcon from '../../assets/search.svg?react';
import * as styles from './SearchInput.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { setSearchTerm, clearSearchTerm } from '../../store/features/search';

interface Props {
  placeholder: string;
  buttonText: string;
  onSearch: (searchTerm: string) => void;
}

const SearchInput: React.FC<Props> = ({
  placeholder,
  buttonText,
  onSearch,
}) => {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  useEffect(() => {
    return () => {
      dispatch(clearSearchTerm());
    };
  }, [dispatch, location]);

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleChange}
          className={styles.searchInput}
        />
        <div className={styles.iconContainer}>
          <SearchIcon />
        </div>
      </div>
      <button type="submit" className={styles.searchButton}>
        {buttonText}
      </button>
    </form>
  );
};

export default SearchInput;
