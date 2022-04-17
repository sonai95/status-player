import { useState, useContext } from "react";
import styles from "./switch.module.css";
import modeCtx from "../Context/modeCtx";

const Switch = function () {
  const [swtichOn, setSwitchOn] = useState(false);
  const { darkmode, setMode } = useContext(modeCtx);

  function darkon () {
    setSwitchOn(!swtichOn);
    console.log(document.getElementById("dark").style.left);
    if (
      !document.getElementById("dark").style.left ||
      document.getElementById("dark").style.left==='15px'
    ) {
      document.getElementById("dark").style.left = "0px";
    } else {
      document.getElementById("dark").style.left = "15px";
    }
    setMode(!darkmode);
  }
  return (
    <div
      className={styles.switchContainer}
      onClick={darkon}
    >
      <div className={`${swtichOn ? styles.switch : styles.switchOff}`}></div>
      <div id="dark" className={styles.dark}>Bright</div>
    </div>
  );
};

export default Switch;
