import {useState, useEffect} from "react";
import styles from "./Clock.module.css";
import TimeBox from "./TimeBox";

export default function Clock() {
  const [time, setTime] = useState({
    hour: "00",
    minutes: "00",
    seconds: "00"
  });

  useEffect(() => {
    const formatNumber = (number) => number < 10 ? "0" + number : number;

    const updateTime = () => {
      const date = new Date();

      const h = formatNumber(date.getHours());
      const m = formatNumber(date.getMinutes());
      const s = formatNumber(date.getSeconds());

      setTime({
        hour: h,
        minutes: m,
        seconds: s
      });
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Relógio Digital</h2>

      <div className={styles.clock}>
        <TimeBox value={time.hour} label="Horas" />
        <TimeBox value={time.minutes} label="Minutos" />
        <TimeBox value={time.seconds} label="Segundos" />
      </div>
    </div>
  )
}