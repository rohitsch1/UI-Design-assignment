import React from 'react';
import styles from '../App.module.css';

const ActionButtons = () => {
  const actions = [
    { label: 'buy smt', className: styles.buySmt },
    { label: 'my stats', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1480cef55aa19ee8af3ff182e098d7bb8f974faee9840c0dc710a80fbe5c5eff?apiKey=2c3d77d70303450cb46afd863619d29e&', className: styles.myStats },
    { label: 'my team', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b64a9ebc1f342b3cecc64acb4829ea0aba2e3d6f932a578483b57ce912c48b0d?apiKey=2c3d77d70303450cb46afd863619d29e&', className: styles.myTeam },
  ];

  return (
    <div className={styles.actionButtons}>
      {actions.map((action, index) => (
        <button key={index} className={`${styles.actionButton} ${action.className}`}>
          {action.icon && <img src={action.icon} alt={`${action.label} icon`} className={styles.actionIcon} />}
          <span>{action.label}</span>
        </button>
      ))}
    </div>
  );
};

export default ActionButtons;