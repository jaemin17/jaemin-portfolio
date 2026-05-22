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

export function TodayStamp({ className }: { className?: string }) {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    const initialTimer = window.setTimeout(() => setNow(new Date()), 0);
    const timer = window.setInterval(() => setNow(new Date()), 1_000);

    return () => {
      window.clearTimeout(initialTimer);
      window.clearInterval(timer);
    };
  }, []);

  const { dateText, timeText } = now
    ? formatHangzhouTime(now)
    : { dateText: "--", timeText: "--:--:--" };

  return (
    <aside className={[styles.todayStamp, className].filter(Boolean).join(" ")} aria-label="今日时间">
      <time className={styles.todayNote} dateTime={now?.toISOString()}>
        <span className={styles.todayLabel}>Hangzhou time</span>
        <span className={styles.todayDate}>{dateText}</span>
        <span className={styles.todayTime}>{timeText}</span>
      </time>
    </aside>
  );
}
