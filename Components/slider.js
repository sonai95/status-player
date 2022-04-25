import styles from "./slider.module.scss";
import cx from "classnames";
function slide({ type, onclick }) {
  return (
    <div className={cx(styles.Container, styles[`background-${type}`])}>
      {type === "notif" && (
        <>
          <h2 className={styles.text}>Instrctions</h2>
          <div className={styles.text}>
            If on mobile, tap to pause else press space to pause!
          </div>
          <div className={styles.text}>
            If on mobile, tap on "left side of the screen" to go to previous
            slide else press "Left Arrow" to go to previous slide!
          </div>
          <div className={styles.text}>Click "Ok" to continue!</div>
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
