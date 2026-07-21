"use client";

import { useEffect, useState } from "react";

import styles from "./coming-soon-page.module.css";

const LAUNCH_AT = new Date("2026-08-20T00:00:00+02:00").getTime();
const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;

type TimeRemaining = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeRemaining(): TimeRemaining {
  const timeLeft = Math.max(LAUNCH_AT - Date.now(), 0);

  return {
    days: Math.floor(timeLeft / DAY),
    hours: Math.floor((timeLeft % DAY) / HOUR),
    minutes: Math.floor((timeLeft % HOUR) / MINUTE),
    seconds: Math.floor((timeLeft % MINUTE) / SECOND),
  };
}

function formatCountdownValue(value: number) {
  return value.toString().padStart(2, "0");
}

export default function ComingSoonCountdown() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>(getTimeRemaining);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setTimeRemaining(getTimeRemaining());
    }, SECOND);

    return () => window.clearInterval(intervalId);
  }, []);

  const countdown = [
    [formatCountdownValue(timeRemaining.days), "Days"],
    [formatCountdownValue(timeRemaining.hours), "Hours"],
    [formatCountdownValue(timeRemaining.minutes), "Minutes"],
    [formatCountdownValue(timeRemaining.seconds), "Seconds"],
  ];

  return (
    <div className={styles.countdownGrid}>
      {countdown.map(([value, label]) => (
        <article key={label}>
          <strong>{value}</strong>
          <span>{label}</span>
        </article>
      ))}
    </div>
  );
}