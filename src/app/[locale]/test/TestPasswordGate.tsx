"use client";
import { useState, useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";
import styles from "./gate.module.css";

const OPEN_PATHS = ["/test/tools4", "/test/visual2"];

const HASH = "5e643ab1175fdd73bea8d07c38b7c70f95b4a9f8cf3e9b96eaaa7d74acfffc8c";
const SESSION_KEY = "test_unlocked";

async function sha256(text: string): Promise<string> {
  const buffer = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export function TestPasswordGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [unlocked, setUnlocked] = useState(false);
  const [ready, setReady] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const normalizedPath = pathname.replace(/\/$/, "");
  const isOpen = OPEN_PATHS.some((p) => normalizedPath.endsWith(p));

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === "1") setUnlocked(true);
    setReady(true);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const hash = await sha256(input);
    if (hash === HASH) {
      sessionStorage.setItem(SESSION_KEY, "1");
      setUnlocked(true);
    } else {
      setError(true);
      setInput("");
    }
  }

  if (isOpen) return <>{children}</>;
  if (!ready) return null;
  if (unlocked) return <>{children}</>;

  return (
    <div className={styles.overlay}>
      <div className={styles.card}>
        <span className={styles.pin} aria-hidden="true" />
        <span className={styles.heart} aria-hidden="true">♡</span>
        <p className={styles.label}>私密内容，请输入密码</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={`${styles.input}${error ? ` ${styles.inputError}` : ""}`}
            type="password"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              setError(false);
            }}
            placeholder="••••••"
            autoFocus
          />
          <button className={styles.button} type="submit">
            进入
          </button>
        </form>
        {error && <p className={styles.error}>密码不对，再试试 :)</p>}
      </div>
    </div>
  );
}
