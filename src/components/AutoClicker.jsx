import React from 'react';
import styles from '../App.module.css';

const AutoClicker = () => {
  return (
    <div className={styles.autoClicker}>
      <div className={styles.autoClickerHeader}>
        <h2>autoClicker</h2>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/d3954926b02b074535e2ee493b9ef4d0315f09bf59bf6c6c278a8e189e354afd?apiKey=2c3d77d70303450cb46afd863619d29e&" alt="Auto Clicker icon" className={styles.autoClickerIcon} />
      </div>
      <div className={styles.autoClickerToggle}>
        <span className={styles.toggleOn}>ON</span>
        <span className={styles.toggleOff}>OFF</span>
      </div>
    </div>
  );
};

export default AutoClicker;