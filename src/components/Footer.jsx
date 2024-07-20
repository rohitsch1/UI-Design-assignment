import React from 'react';
import styles from '../App.module.css';

const Footer = () => {
  const footerItems = [
    { label: 'My Bank', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8511d5137d2b53048285d764b00c16c3edc89da10136a2ebb0936ef1b86d0e3c?apiKey=2c3d77d70303450cb46afd863619d29e&' },
    { label: 'my team', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/be6004be14f72fa1b5f9e00ebd8f842c5d546042b958e839cec990f4c07d4585?apiKey=2c3d77d70303450cb46afd863619d29e&' },
    { label: 'Staking', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3e626910c097568c51b1267b9b7c693d46d14db99a0afd8658799df7d1a6601b?apiKey=2c3d77d70303450cb46afd863619d29e&' },
    { label: '', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f8c5375a512d5ba7ca77d4ab93eca5b465748caf3d4aa03eaffd9dceaa7e14ad?apiKey=2c3d77d70303450cb46afd863619d29e&' },
  ];

  return (
    <footer className={styles.footer}>
      {footerItems.map((item, index) => (
        <div key={index} className={styles.footerItem}>
          <div className={styles.footerIcon}>
            <img src={item.icon} alt={`${item.label} icon`} />
          </div>
          {item.label && <span className={styles.footerLabel}>{item.label}</span>}
        </div>
      ))}
    </footer>
  );
};

export default Footer;