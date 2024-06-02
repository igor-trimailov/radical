import React from 'react';
import * as styles from './Navigation.module.css';
import NavigationButton from './NavigationButton';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <NavigationButton />
      </div>
    </div>
  );
};

export default App;
