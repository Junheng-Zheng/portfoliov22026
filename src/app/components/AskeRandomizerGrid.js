"use client";

import { useEffect, useState } from "react";
import {
  PRESET_COLOR_CLASSES,
  PRESET_SYMBOLS,
  pickRandom,
  makeAskCells,
  DEFAULT_ASK_TICK_MS,
} from "./askePresets";
import { motion } from "framer-motion";

/** Tailwind `md` breakpoint */
const MD_MIN_WIDTH = "(min-width: 768px)";

export default function AskeRandomizerGrid({
  cols = 12,
  /** Row count below `md` (mobile) */
  rows = 4,
  /** Row count at `md` and up; omit to use `rows` at all widths */
  rowsMd,
  tickMs = DEFAULT_ASK_TICK_MS,
  cellClassName = "text-lg font-medium tracking-tight uppercase leading-none",
  className = "",
}) {
  const [activeRows, setActiveRows] = useState(rows);

  useEffect(() => {
    if (rowsMd === undefined) {
      setActiveRows(rows);
      return;
    }
    const mq = window.matchMedia(MD_MIN_WIDTH);
    const sync = () => setActiveRows(mq.matches ? rowsMd : rows);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, [rows, rowsMd]);

  const [cells, setCells] = useState(() => makeAskCells(cols, rows));

  useEffect(() => {
    setCells(makeAskCells(cols, activeRows));
  }, [cols, activeRows]);

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
  }, [tickMs, cols, activeRows]);

  return (
    <motion.div
      initial={{ opacity: 0, blur: 10, y: "100%" }}
      animate={{ opacity: 0.4, blur: 0, y: 0 }}
      transition={{
        duration: 0.3,
        delay: 1,
      }}
      viewport={{ amount: 0, once: true }}
      className={`absolute opacity-32 pointer-events-none w-full bottom-0 left-0 flex ${className}`}
    >
      {Array.from({ length: cols }).map((_, col) => (
        <div key={col} className="flex shrink-0 flex-col items-center gap-0.5">
          {Array.from({ length: activeRows }).map((_, row) => {
            const idx = col * activeRows + row;
            const cell = cells[idx];
            const rowOpacity = activeRows > 1 ? row / (activeRows - 1) : 1;
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
