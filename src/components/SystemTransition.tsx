"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { systemMessages } from "@/data/siteContent";

const messages = [
  systemMessages.OPENING_SIGNAL,
  systemMessages.LOCKING_SIGNAL,
  systemMessages.ESTABLISHING_LINK,
  systemMessages.RECOVERING_ARCHIVE,
];

export function SystemTransition() {
  const pathname = usePathname();
  const [active, setActive] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);

  useEffect(() => {
    const startTimer = window.setTimeout(() => {
      setActive(true);
      setMessageIndex((current) => (current + 1) % messages.length);
    }, 0);
    const endTimer = window.setTimeout(() => setActive(false), 360);

    return () => {
      window.clearTimeout(startTimer);
      window.clearTimeout(endTimer);
    };
  }, [pathname]);

  return (
    <div aria-hidden="true" className={`system-transition${active ? " is-active" : ""}`}>
      <span>{messages[messageIndex]}</span>
    </div>
  );
}
