"use client";

import { useEffect, useState } from "react";
import type { Locale } from "@/i18n/config";
import styles from "./page.module.css";

function formatHangzhouTime(date: Date, locale: Locale) {
  const intlLocale = locale === "zh" ? "zh-CN" : "en-US";
  const dateText = new Intl.DateTimeFormat(intlLocale, {
    timeZone: "Asia/Shanghai",
    month: "long",
    day: "numeric",
    weekday: "short",
  }).format(date);

  const timeText = new Intl.DateTimeFormat(intlLocale, {
    timeZone: "Asia/Shanghai",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(date);

  return { dateText, timeText };
}

export function TodayStamp({ className, locale = "zh" }: { className?: string; locale?: Locale }) {
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
    ? formatHangzhouTime(now, locale)
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
