"use client";

import { useEffect } from "react";

const MIN_INTERVAL_MS = 120_000;
const MAX_INTERVAL_MS = 300_000;
const MIN_DURATION_MS = 3_000;
const MAX_DURATION_MS = 8_000;

function randomBetween(min: number, max: number) {
  return Math.round(min + Math.random() * (max - min));
}

export function AtmosphericPressure() {
  useEffect(() => {
    const root = document.documentElement;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    let intervalId: number | undefined;
    let durationId: number | undefined;

    function schedulePressureShift() {
      intervalId = window.setTimeout(() => {
        root.classList.add("atmospheric-pressure");

        durationId = window.setTimeout(() => {
          root.classList.remove("atmospheric-pressure");
          schedulePressureShift();
        }, randomBetween(MIN_DURATION_MS, MAX_DURATION_MS));
      }, randomBetween(MIN_INTERVAL_MS, MAX_INTERVAL_MS));
    }

    schedulePressureShift();

    return () => {
      root.classList.remove("atmospheric-pressure");

      if (intervalId) {
        window.clearTimeout(intervalId);
      }

      if (durationId) {
        window.clearTimeout(durationId);
      }
    };
  }, []);

  return null;
}
