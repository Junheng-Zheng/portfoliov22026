"use client";

import { useEffect, useState, useRef } from "react";
import {
  PRESET_COLOR_CLASSES,
  PRESET_SYMBOLS,
  pickRandom,
  makeAskCells,
  DEFAULT_ASK_TICK_MS,
} from "./askePresets";
import { motion } from "framer-motion";

export default function AskeRandomizerGrid({
  cols = 12,
  rows = 32,
  tickMs = DEFAULT_ASK_TICK_MS,
  cellClassName = "text-lg font-medium tracking-tight uppercase leading-none",
  className = "",
}) {
  const [cells, setCells] = useState(() => makeAskCells(cols, rows));
  const isFirstLayout = useRef(true);

  useEffect(() => {
    if (isFirstLayout.current) {
      q;
      isFirstLayout.current = false;
      return;
    }
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCells(makeAskCells(cols, rows));
  }, [cols, rows]);

  useEffect(() => {
    const id = setInterval(() => {
      setCells((prev) =>
        prev.map((p) => ({
          symbol: pickRandom(PRESET_SYMBOLS, p.symbol),
          colorClass: pickRandom(PRESET_COLOR_CLASSES, p.colorClass),
        })),
      );
    }, tickMs);
    return () => clearInterval(id);
  }, [tickMs, cols, rows]);

  return (
    <motion.div
      initial={{ opacity: 0, blur: 10, y: "100%" }}
      animate={{ opacity: 0.4, blur: 0, y: 0 }}
      transition={{
        duration: 0.3,
        delay: 0.6,
      }}
      viewport={{ amount: 0, once: true }}
      className={`absolute opacity-32 pointer-events-none w-full bottom-0 left-0 flex ${className}`}
    >
      {Array.from({ length: cols }).map((_, col) => (
        <div key={col} className="flex shrink-0 flex-col items-center gap-0.5">
          {Array.from({ length: rows }).map((_, row) => {
            const idx = col * rows + row;
            const cell = cells[idx];
            const rowOpacity = rows > 1 ? row / (rows - 1) : 1;
            if (!cell) return null;
            return (
              <span
                key={row}
                className={`inline-block tabular-nums ${cell.colorClass ?? ""} ${cellClassName}`}
                style={{ opacity: rowOpacity }}
                aria-hidden
              >
                {cell.symbol}
              </span>
            );
          })}
        </div>
      ))}
    </motion.div>
  );
}
