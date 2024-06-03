import React, { useState, ChangeEvent, FormEvent } from 'react';
import { ReactComponent as SearchIcon } from '../../../public/images/search.svg';
import * as styles from './SearchInput.module.css';

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
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

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
