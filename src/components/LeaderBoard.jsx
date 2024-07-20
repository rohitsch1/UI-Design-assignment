import React from 'react';
import styles from '../App.module.css';

const LeaderBoard = () => {
  return (
    <div className={styles.leaderBoard}>
      <div className={styles.leaderBoardImage}>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5a4382138112a3366b883ab02dcb1d881eb81356e07346b31e52a8a1bb6bd80?apiKey=2c3d77d70303450cb46afd863619d29e&" alt="Leaderboard" className={styles.leaderBoardImg} />
      </div>
      <div className={styles.leaderBoardTitle}>
        <h2>leaderBoard</h2>
        <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/71114923af5678dff3dea969fdcb1458897fc1cc0602eb5451521882d6c9d860?apiKey=2c3d77d70303450cb46afd863619d29e&" alt="Leaderboard icon" className={styles.leaderBoardIcon} />
      </div>
    </div>
  );
};

export default LeaderBoard;