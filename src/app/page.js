"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import DecryptedText from "./DecryptedText";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { Mail, Linkedin, File, Github, Dribbble } from "lucide-react";
import Link from "next/link";

const Juntext = () => {
  return (
    <svg
      className="w-full h-auto block opacity-90 "
      width="100%"
      height="auto"
      preserveAspectRatio="xMinYMin meet"
      viewBox="0 0 1392 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M42.1382 133.959C29.2575 133.959 19.0143 130.402 11.4086 123.287C3.80287 116.049 0 105.867 0 92.7409V81.7003H19.873V92.7409C19.873 99.6106 21.7131 105.131 25.3933 109.302C29.1962 113.35 34.6551 115.374 41.7702 115.374C48.6399 115.374 53.7308 113.35 57.043 109.302C60.3552 105.254 62.0113 99.7333 62.0113 92.7409V20.6091H39.5621V2.57613H96.2371V20.6091H81.8843V92.7409C81.8843 106.112 78.3881 116.356 71.3958 123.471C64.5261 130.463 54.7736 133.959 42.1382 133.959ZM162.768 133.959C152.586 133.959 143.815 132.119 136.455 128.439C129.217 124.759 123.574 119.484 119.526 112.614C115.6 105.622 113.638 97.1572 113.638 87.2206V2.57613H133.695V87.7727C133.695 96.8505 136.209 103.843 141.239 108.75C146.269 113.657 153.445 116.11 162.768 116.11C172.092 116.11 179.268 113.657 184.298 108.75C189.328 103.843 191.842 96.8505 191.842 87.7727V2.57613H211.716V87.2206C211.716 97.1572 209.753 105.622 205.827 112.614C201.902 119.484 196.259 124.759 188.898 128.439C181.538 132.119 172.828 133.959 162.768 133.959ZM234.707 131.383V2.57613H272.981L307.942 118.134H310.887V2.57613H330.576V131.383H292.302L257.34 15.6408H254.396V131.383H234.707ZM354.495 131.383V2.57613H374.368V57.7791H428.467V2.57613H448.34V131.383H428.467V75.812H374.368V131.383H354.495ZM472.307 131.383V2.57613H553.456V20.6091H492.18V57.595H548.303V75.628H492.18V113.35H554.376V131.383H472.307ZM572.15 131.383V2.57613H610.424L645.386 118.134H648.33V2.57613H668.019V131.383H629.745L594.783 15.6408H591.839V131.383H572.15ZM736.653 133.959C727.452 133.959 719.233 131.996 711.996 128.071C704.758 124.023 699.053 118.134 694.883 110.406C690.712 102.677 688.626 93.2316 688.626 82.0684V51.8907C688.626 35.0845 693.227 22.2652 702.427 13.4327C711.628 4.47757 724.079 0 739.781 0C755.238 0 767.137 4.23222 775.479 12.6967C783.821 21.0384 787.992 32.263 787.992 46.3705V47.2905H768.303V45.8184C768.303 40.5435 767.26 35.8206 765.174 31.6497C763.089 27.3561 759.961 23.9826 755.79 21.5291C751.619 19.0757 746.283 17.8489 739.781 17.8489C729.967 17.8489 722.3 20.8544 716.78 26.8654C711.26 32.7537 708.499 40.9728 708.499 51.5227V82.4364C708.499 92.8636 711.26 101.144 716.78 107.278C722.3 113.289 730.028 116.294 739.965 116.294C749.779 116.294 756.955 113.595 761.494 108.198C766.033 102.8 768.303 95.8077 768.303 87.2206V84.8285H733.709V67.7156H787.992V131.383H769.591V118.318H766.646C765.542 120.649 763.886 123.041 761.678 125.495C759.593 127.948 756.526 129.972 752.478 131.567C748.552 133.162 743.277 133.959 736.653 133.959ZM850.006 131.383V105.622L917.722 23.0012V20.4251H852.03V2.57613H938.147V28.3375L870.431 110.958V113.534H938.883V131.383H850.006ZM957.863 131.383V2.57613H977.736V57.7791H1031.84V2.57613H1051.71V131.383H1031.84V75.812H977.736V131.383H957.863ZM1075.68 131.383V2.57613H1156.82V20.6091H1095.55V57.595H1151.67V75.628H1095.55V113.35H1157.74V131.383H1075.68ZM1175.52 131.383V2.57613H1213.79L1248.75 118.134H1251.7V2.57613H1271.39V131.383H1233.11L1198.15 15.6408H1195.21V131.383H1175.52ZM1340.02 133.959C1330.82 133.959 1322.6 131.996 1315.36 128.071C1308.13 124.023 1302.42 118.134 1298.25 110.406C1294.08 102.677 1291.99 93.2316 1291.99 82.0684V51.8907C1291.99 35.0845 1296.59 22.2652 1305.8 13.4327C1315 4.47757 1327.45 0 1343.15 0C1358.61 0 1370.51 4.23222 1378.85 12.6967C1387.19 21.0384 1391.36 32.263 1391.36 46.3705V47.2905H1371.67V45.8184C1371.67 40.5435 1370.63 35.8206 1368.54 31.6497C1366.46 27.3561 1363.33 23.9826 1359.16 21.5291C1354.99 19.0757 1349.65 17.8489 1343.15 17.8489C1333.34 17.8489 1325.67 20.8544 1320.15 26.8654C1314.63 32.7537 1311.87 40.9728 1311.87 51.5227V82.4364C1311.87 92.8636 1314.63 101.144 1320.15 107.278C1325.67 113.289 1333.4 116.294 1343.33 116.294C1353.15 116.294 1360.32 113.595 1364.86 108.198C1369.4 102.8 1371.67 95.8077 1371.67 87.2206V84.8285H1337.08V67.7156H1391.36V131.383H1372.96V118.318H1370.01C1368.91 120.649 1367.25 123.041 1365.05 125.495C1362.96 127.948 1359.89 129.972 1355.85 131.567C1351.92 133.162 1346.65 133.959 1340.02 133.959Z"
        fill="white"
      />
    </svg>
  );
};

export default function Home() {
  const [progress, setProgress] = useState("[0%]");
  const [progressAfter, setProgressAfter] = useState("");
  const [progressValue, setProgressValue] = useState(0);
  const [leftText, setLeftText] = useState("[Junheng]");
  const [rightText, setRightText] = useState("[Zheng]");
  const [leftTextAfter, setLeftTextAfter] = useState("");
  const [rightTextAfter, setRightTextAfter] = useState("");
  const [isScrolling, setIsScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (menuOpen) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [menuOpen]);

  const delay = 0.8;

  const ref = useRef(null);
  const textRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: textScrollProgress } = useScroll({
    target: textRef,
    offset: ["start start", "end end"],
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const value = parseInt(prev.replace("[", "").replace("]", ""), 10);

        if (value >= 100) {
          clearInterval(interval);
          return "[100%]";
        }

        return `[${value + 1}%]`;
      });

      setProgressValue((prev) => {
        if (prev >= 100) return 100;
        return prev + 1;
      });
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);

  useEffect(() => {
    const t = setTimeout(
      () => {
        setLeftText("");
        setRightText("");
        setProgress("");
        setLeftTextAfter("[Resume]");
        setRightTextAfter("[Contact]");
        setProgressAfter("Multidisciplinary Designer and Developer ");
      },
      delay * 1000 + 0.3 * 1000,
    );

    return () => clearTimeout(t);
  }, [delay]);

  return (
    <div className="cursor-[url('/curs.png')_16_16,pointer]">
      <div
        className={`md:w-[400px] w-full bg-black flex flex-col gap-3 ${!menuOpen && "translate-x-full"} transition-all duration-300 spacemono text-sm fixed right-0 p-6 h-full z-20`}
      >
        <div className="w-full flex justify-between items-center ">
          <h2 className="spacegrotesk text-3xl font-medium">MENU</h2>
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
            className="hover:italic cursor-pointer"
          >
            [CLOSE]
          </button>
        </div>
        <div className="grid grid-cols-1 gap-1 h-full">
          <div className="w-full relative hover:italic overflow-hidden h-full flex flex-col items-center justify-center  bg-white/8 rounded-sm p-6 ">
            <p className="z-2 uppercase">[EMAIL]</p>
            <Mail
              className="absolute bottom-1/2 right-1/2 w-80 h-80 opacity-2 translate-y-1/2 translate-x-1/2"
              strokeWidth={1}
            />
          </div>
          <div className="w-full relative hover:italic overflow-hidden h-full flex items-center justify-center bg-white/8 rounded-sm p-6 ">
            [LINKEDIN]
            <Linkedin
              className="absolute bottom-1/2 right-1/2 w-80 h-80 opacity-2  translate-y-1/2 translate-x-1/2"
              strokeWidth={1}
            />
          </div>
          <div className="w-full relative hover:italic overflow-hidden h-full flex items-center justify-center bg-white/8 rounded-sm p-6 ">
            [RESUME]
            <File
              className="absolute bottom-1/2 right-1/2 w-80 h-80 opacity-2  translate-y-1/2 translate-x-1/2"
              strokeWidth={1}
            />
          </div>
          <div className="w-full relative hover:italic overflow-hidden h-full flex items-center justify-center bg-white/8 rounded-sm p-6 ">
            [DRIBBBLE]
            <Dribbble
              className="absolute bottom-1/2 right-1/2 w-80 h-80 opacity-2  translate-y-1/2 translate-x-1/2"
              strokeWidth={1}
            />
          </div>
          <div className="w-full relative hover:italic overflow-hidden h-full flex items-center justify-center bg-white/8 rounded-sm p-6 ">
            [GITHUB]
            <Github
              className="absolute bottom-1/2 right-1/2 w-80 h-80 opacity-2  translate-y-1/2 translate-x-1/2"
              strokeWidth={1}
            />
          </div>
        </div>
      </div>
      <motion.div
        initial={{ maxHeight: "100dvh" }}
        animate={{ maxHeight: "fit-content" }}
        transition={{ duration: 0.5, delay: 1 }}
        className="w-full h-dvh  flex flex-col py-6 md:gap-10 gap-16 text-sm spacemono items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: -30, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="flex w-full px-6 gap-3 opacity-90   uppercase items-center justify-between "
        >
          <p className="uppercase">Junheng Zheng</p>
          <button
            onClick={() => {
              setMenuOpen(true);
            }}
            className="cursor-pointer hover:italic"
          >
            [More]
          </button>
        </motion.div>
        <motion.div
          initial={{ height: "100%" }}
          animate={{ height: "fit-content" }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="flex flex-col w-full md:gap-10 gap-3 "
        >
          <motion.div
            initial={{ opacity: 0, y: -30, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            transition={{ duration: 0.5, delay: delay + 0.2 }}
            className="w-full px-6 flex justify-center  md:pt-0 items-center"
          >
            <Juntext />
          </motion.div>
          <motion.div
            initial={{ height: "100%" }}
            animate={{ height: "fit-content" }}
            transition={{ duration: 0.5, delay: delay + 0.2 }}
            className="flex w-full px-6 gap-3 opacity-90 items-center justify-center"
          >
            <div className="w-full  hidden md:flex flex-1 gap-3 items-center uppercase justify-end">
              <DecryptedText
                speed={100}
                maxIterations={15}
                parentClassName="hover:italic"
                className="uppercase  cursor-pointer"
                animateOn="view"
              >
                {leftTextAfter}
              </DecryptedText>
              <p className="uppercase">{leftText}</p>
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: delay + 0.2 }}
                className=" flex justify-end w-full"
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressValue}%` }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-px bg-white/20"
                />
              </motion.div>
            </div>
            <div className="flex text-center items-center justify-center">
              <div className="text-center uppercase max-w-md">
                <span>{progress}</span>
                <DecryptedText
                  speed={100}
                  maxIterations={15}
                  animateOn="view"
                  className="text-center uppercase"
                  parentClassName="inline"
                >
                  {progressAfter}
                </DecryptedText>
              </div>
            </div>
            <div className="w-full  hidden md:flex flex-1 gap-3 items-center uppercase relative justify-start">
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: delay + 0.2 }}
                className="w-full flex justify-start "
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progressValue}%` }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-px bg-white/20"
                />
              </motion.div>
              <p className="uppercase">{rightText}</p>
              <DecryptedText
                parentClassName="hover:italic"
                className="uppercase  cursor-pointer"
                animateOn="view"
              >
                {rightTextAfter}
              </DecryptedText>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -30, height: 0 }}
          animate={{ opacity: 1, y: 0, height: "auto" }}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
          className="md:hidden flex gap-3 justify-between w-full px-6"
        >
          <p className="uppercase">[Resume]</p>
          <p className="uppercase">[Contact]</p>
        </motion.div>
      </motion.div>
      <motion.div
        className="w-full  flex flex-col text-sm uppercase spacemono md:flex-row  "
        initial={{ y: 30, height: 0 }}
        animate={{ y: 0, height: "fit-content" }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
      >
        {/* <div className = "w-full flex-1 bg-white"/> */}
        <div className="   overflow-hidden xl:w-[50%] group  xl:h-[480px] lg:h-[440px] md:h-[360px]  h-[240px]  w-full flex items-end justify-center  relative">
          <motion.button
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3, delay: delay + 0.5 }}
            className="uppercase absolute left-1/2 transition-all duration-300  -translate-x-1/2 bottom-0 text-white px-3 py-2 z-2 bg-orange-600 "
          >
            [Works]
          </motion.button>
          <div className="absolute top-0 left-0 flex w-full h-full justify-between">
            {Array.from({ length: 256 }).map((_, i) => (
              <div key={i} className="w-px z-1 h-full bg-white/5"></div>
            ))}
          </div>
          <Image
            src="/juncover2.jpeg"
            alt="hero"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="    overflow-hidden xl:w-[50%] group xl:h-[480px] lg:h-[440px] md:h-[360px]  h-[240px] w-full flex items-end justify-center  relative">
          <motion.button
            initial={{ y: 30 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.3, delay: delay + 0.5 }}
            className="uppercase text-white px-3 py-2 z-2  absolute left-1/2 transition-all duration-300  -translate-x-1/2 bottom-0  bg-orange-600  "
          >
            [About]
          </motion.button>
          <div className="absolute top-0 left-0 flex w-full h-full justify-between">
            {Array.from({ length: 256 }).map((_, i) => (
              <div key={i} className="w-px z-1 h-full bg-white/5"></div>
            ))}
          </div>
          <Image
            src="/cover.png"
            alt="hero"
            fill
            className="object-cover object-top"
          />
        </div>
      </motion.div>
      <div ref={ref} className="h-[240vh]">
        <div className="sticky top-0 h-dvh grid grid-cols-2 md:grid-cols-3  bg-black">
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-2 uppercase spacemono text-sm  text-center ">
            Bridging the gap between design and development
          </p>
          <Image
            src="/bridge.png"
            alt="hero"
            fill
            className="object-cover object-center opacity-20"
          />
          <ProjectCard
            progress={scrollYProgress}
            range={[0.1, 0.25]}
            image="/project/lmi.png"
            title="[LIBERTY MUTUAL]"
            description="Design Engineer on the EUI team, Summer 2025"
          ></ProjectCard>
          <ProjectCard
            progress={scrollYProgress}
            range={[0.25, 0.4]}
            image="/project/packcover.png"
            className="xl:border-l border-white/10"
            title="[PACK]"
            description="Mobile Game commissioned by Tiger Snack Box"
          ></ProjectCard>
          <ProjectCard
            progress={scrollYProgress}
            range={[0.4, 0.55]}
            image="/project/gene.png"
            className="xl:border-l border-white/10"
            title="[GENE LUEN YANG]"
            description="Commissioned by Award Winning Author Gene Yang"
          ></ProjectCard>
          <ProjectCard
            progress={scrollYProgress}
            range={[0.55, 0.7]}
            image="/project/chat.png"
            className="xl:border-t border-white/10"
            title="[JUNBOT]"
            href="https://junbot.vercel.app/"
            description="Personal Assistant for Junheng"
          ></ProjectCard>
          <ProjectCard
            progress={scrollYProgress}
            range={[0.7, 0.85]}
            image="/project/bal.png"
            className="xl:border-t xl:border-l border-white/10"
            title="[BALANCE]"
            description="Mood Tracker and Journaling App"
          ></ProjectCard>
          <ProjectCard
            progress={scrollYProgress}
            range={[0.85, 1]}
            image="/project/stud.png"
            className="xl:border-l xl:border-t border-white/10"
            title="[Figma Studies]"
            description="Daily 30 minute Figma designs given a prompt"
          ></ProjectCard>
          {/* <ProjectCard
            progress={scrollYProgress}
            range={[0.7, 0.8]}
            className="md:col-span-2"
          >
            [Figma Studies]
          </ProjectCard> */}
        </div>
      </div>
      <div ref={textRef} className="h-[500vh]">
        <div className="sticky top-0 w-full h-dvh flex items-center flex-col justify-center bg-[#131313] uppercase spacemono text-sm text-center">
          <div className="w-full h-full flex items-center justify-center">
            <ScrollRevealText progress={textScrollProgress}>
              Junheng combines AI, design, and development to create beautiful
              designs from conception to deployment.
            </ScrollRevealText>
          </div>
          <Diagram progress={textScrollProgress} />
        </div>
      </div>
      <div className="w-full flex flex-col gap-14 opacity-90 text-white uppercase spacemono relative bg-black text-sm">
        <div className="p-6 flex flex-col gap-6">
          <Juntext />
          <div className="flex w-full  gap-3 opacity-90  uppercase items-center justify-between ">
            <p className="uppercase">[Resume]</p>
            <p className="uppercase">[Email]</p>
            <p className="uppercase">[LinkedIn]</p>
          </div>
        </div>
        {/* <Image src="/bridge.png" alt="hero" fill className="object-cover object-center opacity-10" /> */}
        {/* 
         <div className = "w-full relative z-10   overflow-hidden flex flex-col  border-t border-white/50 ">
           <TableRow />
            <TableRow />
              <TableRow />
                <TableRow />
                <TableRow />
         </div> */}
        <div className="flex flex-col gap-3 md:flex-row items-center p-6 justify-between">
          <p>All rights reserved. Junheng Zheng 2026</p>
          <button className="uppercase hover:italic cursor-pointer text-white px-3 py-2 z-2 bg-orange-600  ">
            [Back to Top]
          </button>
        </div>
      </div>
    </div>
  );
}

const TableRow = ({ border = true }) => {
  return (
    <div
      className={`opacity-70 hover:italic cursor-pointer group  hover:opacity-100 transition-opacity duration-300 w-full flex items-center h-fit  ${border ? "border-b border-white/50" : ""}`}
    >
      {/* <div className = "flex-2 py-2 border-r border-white/50 px-6">Kolbe Yang (SWE @ Laminar)</div> */}
      <div className="flex-6 py-2  border-white/50 px-6 ">
        &quot;It&apos;s rare to see a designer who can code and code who can
        design.&quot;
      </div>
    </div>
  );
};

function ProjectCard({
  title,
  description,
  children,
  progress,
  range,
  className = "",
  image = "",
  href = "",
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
        target="_blank"
        className={`w-full h-full flex flex-col bg-[#1f1f1f] group ${active ? "cursor-[url('/hand.png')_16_16,pointer]" : "cursor-[url('/curs.png')_16_16,pointer]"} items-center md:items-start z-20 gap-4 xl:p-5 spacemono text-sm justify-center text-white uppercase ${className}`}
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
          </div>
        )}
        <p className="text-xs opacity-20 w-full text-right xl:block hidden">
          {description}
        </p>
        {children && <p className="relative z-10">{children}</p>}
      </Link>
    </motion.div>
  );
}

function ScrollRevealText({ children, progress }) {
  const words = children.split(" ");
  let charIndex = 0;
  const totalChars = children.length;

  return (
    <p className="xl:w-1/3 w-full px-4 flex flex-wrap justify-center leading-relaxed text-center">
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

const Diagram = ({ progress }) => {
  if (!progress) return null;

  // TEXT COLORS
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const discoveryColor = useTransform(
    progress,
    [0.05, 0.15, 1],
    ["rgb(130,130,130)", "#fff", "#fff"],
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const defineColor = useTransform(
    progress,
    [0.25, 0.35, 1],
    ["rgb(130,130,130)", "#fff", "#fff"],
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const designColor = useTransform(
    progress,
    [0.45, 0.55, 1],
    ["rgb(130,130,130)", "#fff", "#fff"],
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const developmentColor = useTransform(
    progress,
    [0.65, 0.75, 1],
    ["rgb(130,130,130)", "#fff", "#fff"],
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const deploymentColor = useTransform(
    progress,
    [0.85, 0.95, 1],
    ["rgb(130,130,130)", "#fff", "#fff"],
  );

  // LINE SEQUENCES (left then right)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const discoveryLeft = useTransform(progress, [0.0, 0.075], [0, 1]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const discoveryRight = useTransform(progress, [0.075, 0.15], [0, 1]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const defineLeft = useTransform(progress, [0.2, 0.275], [0, 1]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const defineRight = useTransform(progress, [0.275, 0.35], [0, 1]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const designLeft = useTransform(progress, [0.4, 0.475], [0, 1]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const designRight = useTransform(progress, [0.475, 0.55], [0, 1]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const developmentLeft = useTransform(progress, [0.6, 0.675], [0, 1]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const developmentRight = useTransform(progress, [0.675, 0.75], [0, 1]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const deploymentLeft = useTransform(progress, [0.8, 0.875], [0, 1]);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const deploymentRight = useTransform(progress, [0.875, 0.95], [0, 1]);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const discoveryRotate = useTransform(
    [discoveryLeft, discoveryRight],
    ([l, r]) => (l + r) * 45,
  );

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const defineRotate = useTransform(
    [defineLeft, defineRight],
    ([l, r]) => (l + r) * 45,
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const designRotate = useTransform(
    [designLeft, designRight],
    ([l, r]) => (l + r) * 45,
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const developmentRotate = useTransform(
    [developmentLeft, developmentRight],
    ([l, r]) => (l + r) * 45,
  );
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const deploymentRotate = useTransform(
    [deploymentLeft, deploymentRight],
    ([l, r]) => (l + r) * 45,
  );
  return (
    <div className="w-full flex h-2/3 border-t border-white/5 p-4 gap-4 flex-col">
      {/* TOP VISUAL */}
      <div className="w-full xl:h-[200px] flex items-center justify-center overflow-hidden bg-black rounded-sm xl:opacity-30 opacity-50">
        <div className="w-full h-full flex items-end  opacity-50">
          <motion.div
            style={{ rotate: discoveryRotate }}
            className="w-full aspect-square  relative "
          >
            <Image
              src="/diagram/discovery.png"
              alt="hero"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>
        <div className="w-full h-full opacity-50">
          <motion.div
            style={{ rotate: defineRotate }}
            className="w-full aspect-square  relative "
          >
            <Image
              src="/diagram/define.png"
              alt="hero"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>
        <div className="w-full h-full opacity-50 flex items-end">
          <motion.div
            style={{ rotate: designRotate }}
            className="w-full aspect-square  relative "
          >
            <Image
              src="/diagram/designing.png"
              alt="hero"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </div>

      {/* TOP ROW */}
      <div className="flex items-center w-full justify-center">
        <div className="flex items-center w-full">
          <Line fill={discoveryLeft} />
          <motion.p
            style={{ color: discoveryColor }}
            className="px-1 uppercase"
          >
            [Discovery]
          </motion.p>
          <Line fill={discoveryRight} />
        </div>

        <div className="flex items-center w-full">
          <Line fill={defineLeft} />
          <motion.p style={{ color: defineColor }} className="px-1 uppercase">
            [Define]
          </motion.p>
          <Line fill={defineRight} />
        </div>

        <div className="flex items-center w-full">
          <Line fill={designLeft} />
          <motion.p style={{ color: designColor }} className="px-1 uppercase">
            [Design]
          </motion.p>
          <Line fill={designRight} />
        </div>
      </div>

      {/* CONNECTOR */}
      <div className="flex flex-col items-center">
        <div className="h-5 xl:w-1/4 w-1/2 border-b border-r border-orange-600 translate-y-[0.5px] border-dashed translate-x-1/2 rounded-br-sm" />
        <div className="h-5 xl:w-1/4 w-1/2 border-t border-l border-orange-600 translate-y-[-0.5px] border-dashed -translate-x-1/2 rounded-tl-sm" />
      </div>

      {/* BOTTOM VISUAL */}
      <div className="w-full xl:h-[200px] flex items-center justify-around overflow-hidden bg-black rounded-sm xl:opacity-30 opacity-50">
        <div className="w-1/3 h-full opacity-50 flex items-center">
          <motion.div
            style={{ rotate: developmentRotate }}
            className="w-full aspect-square  relative "
          >
            <Image
              src="/diagram/designing.png"
              alt="hero"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>
        <div className="w-1/3 h-full opacity-50 flex items-center">
          <motion.div
            style={{ rotate: deploymentRotate }}
            className="w-full aspect-square  relative "
          >
            <Image
              src="/diagram/define.png"
              alt="hero"
              fill
              className="object-cover object-center"
            />
          </motion.div>
        </div>
      </div>

      {/* BOTTOM ROW */}
      <div className="flex items-center w-full justify-center">
        <div className="flex items-center w-full">
          <Line fill={developmentLeft} />
          <motion.p
            style={{ color: developmentColor }}
            className="px-1 uppercase"
          >
            [Development]
          </motion.p>
          <Line fill={developmentRight} />
        </div>
        <div className="flex items-center w-full">
          <Line fill={deploymentLeft} />
          <motion.p
            style={{ color: deploymentColor }}
            className="px-1 uppercase"
          >
            [Deployment]
          </motion.p>
          <Line fill={deploymentRight} />
        </div>
      </div>
    </div>
  );
};

const Line = ({ fill }) => (
  <div className="relative w-full h-px bg-white/20 overflow-hidden">
    <motion.div
      style={{ scaleX: fill }}
      className="absolute inset-0 origin-left bg-white"
    />
  </div>
);
