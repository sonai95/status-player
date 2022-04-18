import styles from "./slider.module.scss";
import cx from "classnames";
function slide({ type, onclick }) {
  return (
    <div className={cx(styles.Container, styles[`background-${type}`])}>
      {type === "notif" && (
        <>
          <div className={styles.text}>
            If on mobile, tap to pause else press space to pause!
          </div>
          <div className={styles.okBtn}>
            <button className={styles.btn} onClick={onclick}>
              Ok
            </button>
          </div>
        </>
      )}
    </div>
  );
}
export default slide;
