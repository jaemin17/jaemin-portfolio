"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

function formatHangzhouTime(date: Date) {
  const dateText = new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    month: "long",
    day: "numeric",
    weekday: "short",
  }).format(date);

  const timeText = new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);

  return { dateText, timeText };
}

export function TodayStamp() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 1_000);

    return () => window.clearInterval(timer);
  }, []);

  const { dateText, timeText } = formatHangzhouTime(now);

  return (
    <aside className={styles.todayStamp} aria-label="今日时间">
      <span className={styles.pin} aria-hidden="true" />
      <time className={styles.todayNote} dateTime={now.toISOString()} suppressHydrationWarning>
        <span className={styles.todayLabel}>Hangzhou time</span>
        <span className={styles.todayDate}>{dateText}</span>
        <span className={styles.todayTime}>{timeText}</span>
      </time>
    </aside>
  );
}
