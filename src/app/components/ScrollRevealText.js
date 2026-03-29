import { motion, useTransform } from "framer-motion";
function ScrollRevealText({ children, progress }) {
  const words = children.split(" ");
  let charIndex = 0;
  const totalChars = children.length;

  return (
    <p className="xl:w-[300px] w-full px-4 flex flex-wrap leding-tight justify-center text-center">
      {words.map((word, w) => (
        <span key={w} className="whitespace-nowrap mr-1">
          {word.split("").map((char, i) => {
            const start = charIndex / (totalChars - 1);
            const end = start + 0.05;
            charIndex++;

            // eslint-disable-next-line react-hooks/rules-of-hooks
            const color = useTransform(
              progress,
              [start, end, 1],
              ["rgb(130,130,130)", "rgb(255,255,255)", "rgb(255,255,255)"],
              { clamp: true },
            );

            return (
              <motion.span key={i} style={{ color }}>
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </p>
  );
}

export default ScrollRevealText;
