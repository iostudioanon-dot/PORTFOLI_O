"use client";

import { useEffect, useRef } from "react";
import type { ReactNode } from "react";

type MemorySlipProps = {
  children: ReactNode;
  className?: string;
};

const MIN_INTERVAL_MS = 45_000;
const MAX_INTERVAL_MS = 180_000;
const SLIP_DURATION_MS = 120;

function randomBetween(min: number, max: number) {
  return Math.round(min + Math.random() * (max - min));
}

export function MemorySlip({ children, className }: MemorySlipProps) {
  const nodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = nodeRef.current;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    let intervalId: number | undefined;
    let durationId: number | undefined;

    function scheduleSlip() {
      intervalId = window.setTimeout(() => {
        node?.classList.add("is-memory-slipping");

        durationId = window.setTimeout(() => {
          node?.classList.remove("is-memory-slipping");
          scheduleSlip();
        }, SLIP_DURATION_MS);
      }, randomBetween(MIN_INTERVAL_MS, MAX_INTERVAL_MS));
    }

    scheduleSlip();

    return () => {
      node?.classList.remove("is-memory-slipping");

      if (intervalId) {
        window.clearTimeout(intervalId);
      }

      if (durationId) {
        window.clearTimeout(durationId);
      }
    };
  }, []);

  return (
    <div className={className ? `memory-slip ${className}` : "memory-slip"} ref={nodeRef}>
      {children}
    </div>
  );
}
