import styles from "./TimeBox.module.css";

export default function TimeBox({ value, label }) {

  return(
    <div className={styles.box}>
      <span className={styles.value}>{value}</span>
      {label && <span className={styles.label}>{label}</span>}
    </div>
  );
}