import React from 'react';
import styles from '../App.module.css';
import ActionButtons from './ActionButtons';
import AutoClicker from './AutoClicker';
import LeaderBoard from './LeaderBoard';

const MainContent = () => {
  return (
    <main className={styles.mainContent}>
      <div className={styles.titleContainer}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f01126b4c96085166d4694da93d36090c362c4812fc5ac97f2018342ddbe151?apiKey=2c3d77d70303450cb46afd863619d29e&" alt="Saffron Mount icon" className={styles.titleIcon} />
        <h1 className={styles.title}>saffron mount</h1>
      </div>
      <section className={styles.actionSection}>
        <ActionButtons />
      </section>
      <section className={styles.statsSection}>
        <AutoClicker />
        <LeaderBoard />
      </section>
      <section className={styles.balanceSection}>
        <div className={styles.tapsLeft}>
          <span>TAPS LEFT</span>
          <div className={styles.tapsValue}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a2ef7062228cb6a862cabb70b3475a704bc76516bcffdfd5b3b3196e2a55cdce?apiKey=2c3d77d70303450cb46afd863619d29e&" alt="Taps icon" className={styles.tapsIcon} />
            <span>1000</span>
          </div>
        </div>
        <div className={styles.balance}>
          <div className={styles.balanceHeader}>
            <span>BALANCE</span>
            <span className={styles.currency}>SMT</span>
          </div>
          <div className={styles.balanceValue}>
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec970a3e56e22ae843743abfff1e84b3745332e4bf60f657c30a396c570a9d2c?apiKey=2c3d77d70303450cb46afd863619d29e&" alt="Balance icon" className={styles.balanceIcon} />
            <span>0.0000</span>
          </div>
          <hr className={styles.balanceDivider} />
          <div className={styles.energyBalance}>
            <span>TOTAL ENERGY BALANCE</span>
            <div className={styles.energyValue}>
              <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1395b99108505d663dad9aaad23b465fee247c8f4b0c05c30f2e18b9b0b83159?apiKey=2c3d77d70303450cb46afd863619d29e&" alt="Energy icon" className={styles.energyIcon} />
              <span>0</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;