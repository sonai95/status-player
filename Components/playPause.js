import { useState, useEffect } from "react";
import styles from "./playPause.module.css";
function PlayPause({ play }) {
  const [playPause, setPlayPause] = useState(`${play ? styles.playBtn : styles.pauseBtn} ${
    styles.playPause
  }`);
  useEffect(() => {
    setPlayPause(
      `${play ? styles.playBtn : styles.pauseBtn} ${styles.playPause}`
    );
    setTimeout(() => {
      setPlayPause(`${styles.playPause}`);
    }, 1000);
  }, [play]);
  return (
    <div
      id="playPause"
      className={playPause}
    >
      <div className={`${play ? styles.play : ""}`}></div>
      <div className={`${!play ? styles.pause : ""}`}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
export default PlayPause;
