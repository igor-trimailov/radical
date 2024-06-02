import React from 'react';
import Navigation from './navigation/Navigation';
import * as styles from './App.module.css';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navigation />
    </div>
  );
};

export default App;
