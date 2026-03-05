import { motion, useTransform, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
function ProjectCard({
  title,
  description,
  children,
  progress,
  range,
  className = "",
  image = "",
  href = "",
  comingSoon = false,
}) {
  const [start] = range;

  // One-way activation
  const isActive = useTransform(progress, (v) => (v >= start ? 1 : 0));
  const [active, setActive] = useState(false);

  useMotionValueEvent(progress, "change", (v) => {
    if (v >= start) setActive(true);
    else setActive(false);
  });
  return (
    <motion.div style={{ opacity: isActive }} className={`relative z-20 `}>
      <Link
        href={href}
        className={`w-full h-full flex flex-col bg-[#1f1f1f] group relative items-center md:items-start z-20 gap-4 xl:p-5 spacemono text-sm justify-center text-white uppercase ${className}`}
      >
        <p className="text-xs opacity-20 hidden xl:block">{title}</p>
        {image && (
          <div className="w-full h-full xl:aspect-16/10 overflow-hidden  xl:rounded-sm relative">
            <Image
              src={image}
              alt="hero"
              fill
              className="object-cover group-hover:scale-105 transition-all duration-300 object-center"
            />
            {comingSoon && (
              <p className="z-20 absolute top-0 right-0 text-xs rounded-bl-sm bg-orange-600 px-3 py-2 ">
                [Coming Soon]
              </p>
            )}
          </div>
        )}
        <p className="text-xs opacity-20 w-full text-left xl:block hidden">
          {description}
        </p>
        {children && <p className="relative z-10">{children}</p>}
      </Link>
    </motion.div>
  );
}

export default ProjectCard;
