import React from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import * as styles from './App.module.css';
import MyImage from '../public/images/radical.png';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.account}>Person</div>
        <Navigation />
      </div>
      <div className={styles.main}>
        <div>
          <img src={MyImage} alt="logo" className={styles.logo} />
        </div>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default App;
