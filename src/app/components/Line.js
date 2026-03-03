import { motion } from "framer-motion";
const Line = ({ fill }) => (
  <div className="relative w-full h-px bg-white/20 overflow-hidden">
    <motion.div
      style={{ scaleX: fill }}
      className="absolute inset-0 origin-left bg-white"
    />
  </div>
);

export default Line;
