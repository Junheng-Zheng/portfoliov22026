/** Shared presets — full Tailwind class names for the compiler */
export const PRESET_COLOR_CLASSES = [
  "text-purple-400",
  "text-pink-400",
  "text-red-400",
  "text-gray-400",
  "text-gray-500",
  "text-gray-600",
  "text-gray-700",
  "text-gray-800",
  "text-gray-900",
];

export const PRESET_SYMBOLS = [
  "?",
  "⁇",
  "‽",
  "¿",
  "⸮",
  "？",
  "⋯",
  "∴",
  "※",
  "◇",
  "◆",
  "○",
  "●",
  "◎",
];

export const DEFAULT_ASK_TICK_MS = 150;

export function pickRandom(arr, exclude) {
  if (!arr.length) return null;
  let next;
  do {
    next = arr[Math.floor(Math.random() * arr.length)];
  } while (exclude != null && arr.length > 1 && next === exclude);
  return next;
}

export function makeAskCells(cols, rows) {
  const n = cols * rows;
  return Array.from({ length: n }, () => ({
    symbol: pickRandom(PRESET_SYMBOLS),
    colorClass: pickRandom(PRESET_COLOR_CLASSES),
  }));
}
