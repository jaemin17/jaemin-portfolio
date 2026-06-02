"use client";

import { useCallback, useState, type ReactNode } from "react";

type CopyEmailProps = {
  email: string;
  className?: string;
  children: ReactNode;
};

export function CopyEmail({ email, className, children }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  const handleClick = useCallback(() => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [email]);

  return (
    <button type="button" className={className} onClick={handleClick}>
      {copied ? "Copied ✓" : children}
    </button>
  );
}
