"use client";
import { motion } from "framer-motion";
const AppearingText = ({ children, delay }) => {
  return (
    <div className=" overflow-hidden">
      <motion.div
        initial={{ y: 100, height: 0 }}
        animate={{ y: 0, height: "auto" }}
        transition={{ duration: 0.5, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default AppearingText;
