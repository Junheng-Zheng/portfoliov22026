"use client";

import { useEffect, useState, useCallback } from "react";
import {
  PRESET_COLOR_CLASSES,
  PRESET_SYMBOLS,
  pickRandom,
  DEFAULT_ASK_TICK_MS,
} from "./askePresets";

export default function AskeRandomizer({ className = "", as: Tag = "span" }) {
  const [colorClass, setColorClass] = useState(() =>
    pickRandom(PRESET_COLOR_CLASSES),
  );
  const [symbol, setSymbol] = useState(() => pickRandom(PRESET_SYMBOLS));

  const randomize = useCallback(() => {
    setColorClass((prev) => pickRandom(PRESET_COLOR_CLASSES, prev));
    setSymbol((prev) => pickRandom(PRESET_SYMBOLS, prev));
  }, []);

  useEffect(() => {
    const id = setInterval(randomize, DEFAULT_ASK_TICK_MS);
    return () => clearInterval(id);
  }, [randomize]);

  return (
    <Tag
      className={`text-base opacity-48 ${colorClass ?? ""} ${className}`}
      aria-hidden
    >
      {symbol}
    </Tag>
  );
}
