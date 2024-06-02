import React from 'react';
import * as styles from './NavigationButton.module.css';
import { BarChart } from 'react-feather';

const NavigationButton: React.FC = () => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>
        <BarChart />
        <div>TESTS</div>
      </button>
    </div>
  );
};

export default NavigationButton;
