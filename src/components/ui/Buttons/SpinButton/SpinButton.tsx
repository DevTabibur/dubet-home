import styles from './SpinButton.module.css'

const SpinButton = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.outerRingClockwise}></div>
        <div className={styles.outerRingAntiClockwise}></div>
        <button className={styles.spinButton}>
          <span>Spin</span>
        </button>
      </div>

      {/* <button className={styles.spinButton}>
                <span>Spin</span>
            </button>

            <div className={styles.spinButton}>
                <button className="button">Submit</button>
            </div> */}
    </>
  )
}

export default SpinButton

// update code , do not delete it
{
  /* <div className={styles.container}>
                <div className={styles.outerRingClockwise}></div>
                <div className={styles.outerRingAntiClockwise}></div>
                <button className={styles.spinButton}>
                    <span>Spin</span>
                </button>
            </div> */
}
