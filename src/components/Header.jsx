import React from 'react';
import styles from '../App.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.userInfo}>
        <div className={styles.avatar} />
        <div className={styles.userDetails}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4aba579e437dd56e19d8b0f5bb5dfb7d03724aa2d161020435a433eb538e2ed7?apiKey=2c3d77d70303450cb46afd863619d29e&" alt="User avatar" className={styles.userAvatar} />
          <div className={styles.userName}>
            <span className={styles.greeting}>HELLO</span> NIKHIL134
          </div>
        </div>
      </div>
      <button className={styles.referralButton}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/fdeeffa8ccbb792cdaeacaec715884a1d637a1372f09130e58ae0184af80436b?apiKey=2c3d77d70303450cb46afd863619d29e&" alt="Referral icon" className={styles.referralIcon} />
        <span>Referral Link</span>
      </button>
      <div className={styles.languageSelector}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2d5bd555cecd0c2d18a8b6cffcddd96749cb2e8950bd49b9f9239969abdde7d2?apiKey=2c3d77d70303450cb46afd863619d29e&" alt="Language flag" className={styles.languageFlag} />
        <span className={styles.languageCode}>en</span>
      </div>
      <div className={styles.nftSection}>
        <div className={styles.nftInfo}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4aa59cb806c82c7e28fe20e64bf6e4f9c91a708df19f38f2b1660fb1de31b623?apiKey=2c3d77d70303450cb46afd863619d29e&" alt="NFT icon" className={styles.nftIcon} />
          <span className={styles.nftText}>my NFT free</span>
        </div>
        <button className={styles.upgradeButton}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/a88e57e6fe9b435f102f14cc259544d6326748387e73b2fc72f9e247034e67d8?apiKey=2c3d77d70303450cb46afd863619d29e&" alt="Upgrade icon" className={styles.upgradeIcon} />
          <span>Upgrade</span>
        </button>
      </div>
    </header>
  );
};

export default Header;