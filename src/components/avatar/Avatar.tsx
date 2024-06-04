import React from 'react';
import * as styles from './Avatar.module.css';
import stewie from '../../assets/stewie.webp';

const Avatar: React.FC = () => {
  return (
    <div className={styles.container}>
      <img src={stewie} alt="Avatar" className={styles.avatar} />
    </div>
  );
};

export default Avatar;
