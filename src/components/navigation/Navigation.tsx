import React from 'react';
import * as styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import ListIcon from '../../assets/list.svg?react';
import HeartIcon from '../../assets/heart.svg?react';
import CogIcon from '../../assets/cog.svg?react';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <NavLink
        to={'/'}
        className={({ isActive }) =>
          isActive ? styles.linkActive : styles.link
        }
      >
        <ListIcon className={styles.linkIcon} />
      </NavLink>

      <NavLink
        to={'/favorites'}
        className={({ isActive }) =>
          isActive ? styles.linkActive : styles.link
        }
      >
        <HeartIcon className={styles.linkIcon} />
      </NavLink>

      <NavLink
        to={'/settings'}
        className={({ isActive }) =>
          isActive ? styles.linkActive : styles.link
        }
      >
        <CogIcon className={styles.linkIcon} />
      </NavLink>
    </div>
  );
};

export default App;
