import React from 'react';
import * as styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { ReactComponent as ListIcon } from '../../../public/images/list.svg';
import { ReactComponent as HeartIcon } from '../../../public/images/heart.svg';
import { ReactComponent as CogIcon } from '../../../public/images/cog.svg';

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
        to={'/favourites'}
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
