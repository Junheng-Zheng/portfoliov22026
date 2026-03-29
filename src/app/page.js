"use client";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import DecryptedText from "./DecryptedText";
import { motion, useScroll } from "framer-motion";
import { Mail, Linkedin, File, Github, Dribbble } from "lucide-react";
import Link from "next/link";
import Juntext from "./components/Juntext";
import Footer from "./components/Footer";
import ScrollRevealText from "./components/ScrollRevealText";
import ProjectCard from "./components/ProjectCard";
import Diagram from "./components/Diagram";
import AppearingText from "./components/AppearingText";
import { Copyright, Minus, ArrowUpRight } from "lucide-react";
import {
  GripVertical,
  X,
  Zap,
  CodeXml,
  Eye,
  ArrowRight,
  Heart,
} from "lucide-react";
import AskeRandomizerGrid from "./components/AskeRandomizerGrid";

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

  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end end"],
  // });

  const { scrollYProgress: textScrollProgress } = useScroll({
    target: textRef,
    offset: ["start start", "end end"],
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setProgressValue((prev) => {
        if (prev >= 100) return 100;
        return prev + 1;
      });
    }, delay);

    return () => clearInterval(interval);
  }, [delay]);

  useEffect(() => {
    setProgress(`[${progressValue}%]`);
  }, [progressValue]);

  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    if (progressValue < 100 || unlocked) return;

    const t = setTimeout(() => {
      setLeftText("");
      setRightText("");
      setUnlocked(true);
      setProgress("");
      setLeftTextAfter("[Resume]");
      setRightTextAfter("[Contact]");
      setProgressAfter("Multidisciplinary Designer and Developer ");
    }, delay * 1000); // use same 0.8s pause if you like

    return () => clearTimeout(t);
  }, [progressValue, unlocked, delay]);

  return (
    <motion.div className={`w-full  flex flex-row-reverse   geist text-base`}>
      <div
        className={` bg-[#0a0a0a]  flex flex-col  overflow-hidden fixed h-dvh md:relative justify-between ${menuOpen ? " md:w-[240px] w-full p-6 md:pl-0  items-start" : "w-0"} transition-all duration-300 spacemono text-[16px]  right-0  z-50`}
      >
        <div className="flex w-full  flex-col gap-3 items-start">
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
            className="hover:italic relative group overflow-visible cursor-pointer"
          >
            <div className="w-full group-hover:bg-white/5 scale-150 rounded-sm  aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute"></div>
            <X />
          </button>
          <div className="group cursor-pointer items-center flex hover:gap-1">
            <ArrowUpRight className="inline-block mt-3 w-0 h-0 group-hover:w-7 group-hover:h-7 transition-all duration-300" />
            <Link
              href="mailto:jz7259@g.rit.edu"
              className="spacegrotesk  text-3xl mt-3 w-full font-medium hover:italic"
            >
              EMAIL
            </Link>
          </div>
          <div className="group cursor-pointer items-center flex hover:gap-1">
            <ArrowUpRight className="inline-block w-0 h-0 group-hover:w-7 group-hover:h-7 transition-all duration-300" />
            <Link
              href="https://www.linkedin.com/in/junhengzheng/"
              className="spacegrotesk text-3xl  w-full font-medium hover:italic"
            >
              LINKEDIN
            </Link>
          </div>
          <div className="group cursor-pointer items-center flex hover:gap-1">
            <ArrowUpRight className="inline-block w-0 h-0 group-hover:w-7 group-hover:h-7 transition-all duration-300" />
            <Link
              href="/resume.pdf"
              className="spacegrotesk text-3xl w-full font-medium hover:italic"
            >
              RESUME
            </Link>
          </div>
          <div className="group cursor-pointer items-center flex hover:gap-1">
            <ArrowUpRight className="inline-block w-0 h-0 group-hover:w-7 group-hover:h-7 transition-all duration-300" />
            <Link
              href="https://github.com/Junheng-Zheng?tab=overview&from=2022-12-01&to=2022-12-31"
              className="spacegrotesk text-3xl w-full font-medium hover:italic"
            >
              GITHUB
            </Link>
          </div>
          <div className="group cursor-pointer items-center flex hover:gap-1">
            <ArrowUpRight className="inline-block w-0 h-0 group-hover:w-7 group-hover:h-7 transition-all duration-300" />
            <Link
              href="https://dribbble.com/junheng-zheng"
              className="spacegrotesk text-3xl w-full font-medium hover:italic"
            >
              DRIBBBLE
            </Link>
          </div>
        </div>
        <div className="flex w-full spacemono text-[10px] uppercase flex-col gap-1 border-t border-white/50 opacity-20  pt-3 items-start">
          <p>[Figma, React, Tailwind, Javascript, Framer Motion, Vercel]</p>
        </div>
      </div>
      <div
        className={`${menuOpen ? "md:p-6 md:h-dvh" : "p-0"}  flex flex-1 flex-col transition-all duration-300`}
      >
        <div
          className={`flex-1 h-full rounded-lg relative ${menuOpen ? "overflow-hidden border border-white/5 " : ""}`}
        >
          {menuOpen && (
            <div className="w-full h-full bg-black/20 absolute top-0 left-0 pointer-events-none rounded-lg  z-10 "></div>
          )}

          <div className=" flex flex-col overflow-hidden pt-9  bg-black/90 items-center relative ">
            <div className="flex relative px-4 md:px-12 flex-col gap-20 md:gap-10 pb-20 md:pb-14 w-full">
              <div className="w-full h-fit overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, blur: 10, y: "100%" }}
                  whileInView={{ opacity: 1, blur: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400, // higher = faster, snappier
                    damping: 60, // lower = more bounce
                    delay: 0.2,
                  }}
                  viewport={{ amount: 0, once: true }}
                  className="flex justify-between w-full items-center gap-4"
                >
                  <div className=" spacegrotesk px-3 py-1 text-sm border border-white/20 rounded-full flex items-center ">
                    JZ <Minus className="inline-block w-3 h-3 " />{" "}
                    <Copyright className="inline-block w-3 h-3 " />
                  </div>
                  <button
                    onClick={() => {
                      setMenuOpen(true);
                    }}
                    className="cursor-pointer group relative"
                  >
                    <div className="w-full group-hover:bg-white/5 scale-150 rounded-sm  aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute"></div>
                    <GripVertical />
                  </button>
                </motion.div>
              </div>
              <div className="w-full h-fit overflow-hidden hidden md:block  ">
                <motion.div
                  initial={{ opacity: 0, y: "100%" }}
                  whileInView={{ opacity: 1, blur: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400, // higher = faster, snappier
                    damping: 60, // lower = more bounce
                    delay: 0.4,
                  }}
                  viewport={{ amount: 0, once: true }}
                >
                  <Juntext />
                </motion.div>
              </div>
              <div className="flex relative flex-col md:flex-row justify-between gap-4  w-full">
                {/* <Juntext /> */}
                <div className="w-full h-fit overflow-hidden block md:hidden ">
                  <motion.h1
                    initial={{ opacity: 0, y: "100%" }}
                    whileInView={{ opacity: 1, blur: 0, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 400, // higher = faster, snappier
                      damping: 60, // lower = more bounce
                      delay: 0.4,
                    }}
                    viewport={{ amount: 0, once: true }}
                    className="text-[44px] spacegrotesk leading-none md:text-5xl font-medium tracking-tight uppercase"
                  >
                    Junheng Zheng
                  </motion.h1>
                </div>
                <div className="w-fit h-fit overflow-hidden">
                  <motion.p
                    initial={{ opacity: 0, blur: 10, y: "100%" }}
                    whileInView={{ opacity: 1, blur: 0, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 400, // higher = faster, snappier
                      damping: 60, // lower = more bounce
                      delay: 0.6,
                    }}
                    viewport={{ amount: 0, once: true }}
                    className=" w-[300px] md:w-[360px] inline-block"
                  >
                    Developer <ArrowRight className="inline-block w-4 h-4 " />{" "}
                    with a keen <Eye className=" inline-block w-4 h-4 " /> for{" "}
                    <span className="inline-block">
                      des
                      <Zap className=" inline-block w-4 h-4 " />
                      gn.
                    </span>{" "}
                    Creating from 0{" "}
                    <ArrowRight className="inline-block w-4 h-4 " /> 1 with{" "}
                    <span className="inline-block">
                      <Heart className="inline-block w-4 h-4 " />.
                    </span>
                  </motion.p>
                </div>
                <div className="w-fit h-fit overflow-hidden">
                  <motion.div
                    initial={{ opacity: 0, blur: 10, y: "100%" }}
                    whileInView={{ opacity: 1, blur: 0, y: 0 }}
                    transition={{
                      type: "spring",
                      stiffness: 400, // higher = faster, snappier
                      damping: 60, // lower = more bounce
                      delay: 0.8,
                    }}
                    viewport={{ amount: 0, once: true }}
                    className="flex gap-3 h-fit w-fit"
                  >
                    <Link
                      href="https://www.linkedin.com/in/junhengzheng/"
                      target="_blank"
                      className="hover:italic px-3 py-2 gap-1 border flex items-center justify-center border-white/20 rounded-sm bg-black spacemono text-sm uppercase "
                    >
                      <ArrowUpRight className="inline-block w-4 h-4 " />
                      LinkedIn
                    </Link>
                    <Link
                      href="/resume.pdf"
                      target="_blank"
                      className="hover:italic px-3 py-2 gap-1 border flex items-center justify-center border-white/20  bg-black spacemono text-sm uppercase "
                    >
                      <ArrowUpRight className="inline-block w-4 h-4 " />
                      Resume
                    </Link>
                  </motion.div>
                </div>
              </div>
              <AskeRandomizerGrid cols={120} rows={4} rowsMd={6} />
            </div>
          </div>
          <div className=" border-t border-b border-white/10 flex ">
            <div className="w-fit spacemono sticky px-12 py-8 top-0 h-fit   text-white uppercase text-sm flex-col hidden md:flex  gap-4">
              <div className="w-full h-fit overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, blur: 10, y: "100%" }}
                  whileInView={{ opacity: 1, blur: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400, // higher = faster, snappier
                    damping: 60, // lower = more bounce
                    delay: 0.4,
                  }}
                  viewport={{ amount: 0, once: true }}
                  className="flex items-center cursor-pointer group gap-1"
                >
                  <ArrowUpRight className="inline-block w-4 h-4 group-hover:rotate-45 transition-all duration-300" />
                  <p>Works</p>
                </motion.div>
              </div>
              <div className="w-full h-fit overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, blur: 10, y: "100%" }}
                  whileInView={{ opacity: 1, blur: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400, // higher = faster, snappier
                    damping: 60, // lower = more bounce
                    delay: 0.6,
                  }}
                  viewport={{ amount: 0, once: true }}
                  className="flex items-center cursor-pointer group gap-1"
                >
                  <ArrowUpRight className="inline-block w-4 h-4 group-hover:rotate-45 transition-all duration-300" />
                  <p>Blog</p>
                </motion.div>
              </div>

              <div className="w-full h-fit overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, blur: 10, y: "100%" }}
                  whileInView={{ opacity: 1, blur: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400, // higher = faster, snappier
                    damping: 60, // lower = more bounce
                    delay: 0.8,
                  }}
                  viewport={{ amount: 0, once: true }}
                  className="flex items-center cursor-pointer group gap-1"
                >
                  <ArrowUpRight className="inline-block w-4 h-4 group-hover:rotate-45 transition-all duration-300" />
                  <p>About</p>
                </motion.div>
              </div>
            </div>
            <div className="w-full h-full md:border-l  flex flex-col md:border-r border-white/10  ">
              <div className="w-full grid grid-cols-1 overflow-hidden  px-6  py-8 border-b border-white/10 h-fit relative  md:grid-cols-2 gap-8">
                {/* <motion.div
                  initial={{ opacity: 0, blur: 10, y: "10%" }}
                  animate={{ opacity: 1, blur: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300, // higher = faster, snappier
                    damping: 60, // lower = more bounce
                    delay: 0.8,
                  }}
                  viewport={{ amount: 0, once: true }}
                  className="w-full group cursor-pointer aspect-4/3  relative overflow-hidden rounded-md "
                >
                  <Image
                    src="/ibm.gif"
                    alt="pack1"
                    fill
                    className="object-cover group-hover:scale-140 transition-all duration-300 object-center scale-120 z-20  "
                  />

                  <div className="absolute top-0 left-0 w-full h-full bg-white/90"></div>
                </motion.div> */}
                <motion.div
                  initial={{ opacity: 0, blur: 10, y: "10%" }}
                  animate={{ opacity: 1, blur: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300, // higher = faster, snappier
                    damping: 60, // lower = more bounce
                    delay: 1,
                  }}
                  viewport={{ amount: 0, once: true }}
                  className="w-full group cursor-pointer aspect-4/3 relative overflow-hidden rounded-md  bg-gray-100"
                >
                  <Image
                    src="/limi.gif"
                    alt="pack1"
                    fill
                    className="object-cover group-hover:scale-120 transition-all duration-300 object-center  z-20  "
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, blur: 10, y: "10%" }}
                  animate={{ opacity: 1, blur: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300, // higher = faster, snappier
                    damping: 60, // lower = more bounce
                    delay: 1.1,
                  }}
                  viewport={{ amount: 0, once: true }}
                  className="w-full group cursor-pointer aspect-4/3 relative overflow-hidden rounded-md  bg-gray-100"
                >
                  <Image
                    src="/project/pack.png"
                    alt="pack1"
                    fill
                    className="object-cover object-center"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, blur: 10, y: "10%" }}
                  whileInView={{ opacity: 1, blur: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300, // higher = faster, snappier
                    damping: 60, // lower = more bounce
                    delay: 0.1,
                  }}
                  viewport={{ amount: 0, once: true }}
                  className="w-full group cursor-pointer aspect-4/3 relative overflow-hidden rounded-md  bg-gray-100"
                >
                  <Image
                    src="/project/bal.png"
                    alt="pack1"
                    fill
                    className="object-cover object-center"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, blur: 10, y: "10%" }}
                  whileInView={{ opacity: 1, blur: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 300, // higher = faster, snappier
                    damping: 60, // lower = more bounce
                    delay: 0.2,
                  }}
                  viewport={{ amount: 0, once: true }}
                  className="w-full group cursor-pointer aspect-4/3 relative overflow-hidden rounded-md  bg-gray-100"
                >
                  <Image
                    src="/project/study.png"
                    alt="pack1"
                    fill
                    className="object-cover object-center"
                  />
                </motion.div>
              </div>

              <div ref={textRef} className="h-[300vh]">
                <div className="sticky top-0 w-full h-dvh flex items-center flex-col justify-center  text-center">
                  <div className="w-full h-full gap-2  flex-col flex items-center  justify-center">
                    <ScrollRevealText progress={textScrollProgress}>
                      Junheng combines design and development to create
                      beautiful designs from 0 to 1.
                    </ScrollRevealText>
                  </div>
                  <Diagram progress={textScrollProgress} />
                </div>
              </div>
            </div>
            <div className="w-fit spacemono sticky px-12 py-8 top-0 justify-end items-end h-dvh   text-white uppercase text-sm flex-col  hidden md:flex  gap-4">
              <div className="overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, blur: 10, y: "100%" }}
                  whileInView={{ opacity: 1, blur: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400, // higher = faster, snappier
                    damping: 60, // lower = more bounce
                    delay: 0.2,
                  }}
                  className="flex items-center  cursor-pointer  group gap-1"
                >
                  <ArrowUpRight className="inline-block w-4 h-4 group-hover:rotate-45 transition-all duration-300" />
                  <p>Email</p>
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, blur: 10, y: "100%" }}
                  whileInView={{ opacity: 1, blur: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400, // higher = faster, snappier
                    damping: 60, // lower = more bounce
                    delay: 0.4,
                  }}
                  className="flex items-center  cursor-pointer  group gap-1"
                >
                  <ArrowUpRight className="inline-block w-4 h-4 group-hover:rotate-45 transition-all duration-300" />
                  <p>Resume</p>
                </motion.div>
              </div>
              <div className="overflow-hidden">
                <motion.div
                  initial={{ opacity: 0, blur: 10, y: "100%" }}
                  whileInView={{ opacity: 1, blur: 0, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 400, // higher = faster, snappier
                    damping: 60, // lower = more bounce
                    delay: 0.6,
                  }}
                  className="flex items-center  cursor-pointer  group gap-1"
                >
                  <ArrowUpRight className="inline-block w-4 h-4 group-hover:rotate-45 transition-all duration-300" />
                  <p>LinkedIn</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* <Link
            href="https://www.linkedin.com/in/junhengzheng/"
            target="_blank"
            rel="noopener noreferrer"
            className="spacegrotesk text-lg flex items-center gap-2 flex-col overflow-x-hidden relative px-6 w-[280px] group cursor-pointer z-2 border border-white/10 py-3 bg-white/5 font-medium uppercase"
          >
            <p className="z-20 relative">Let&apos;s create together.</p>
            <motion.div
              initial={{ x: "-100%" }}
              whileInView={{ x: "100%" }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }}
              className="bg-orange-600 z-10 border-white w-full h-full absolute top-0  left-0"
            />

            <div className="bg-orange-600 -translate-x-full z-0 group-hover:translate-x-0 transition-all duration-300 w-[120%] h-full absolute top-0 -left-4"></div>
          </Link> */}
          <Footer />
        </div>
      </div>
    </motion.div>
  );
}

const TableRow = ({ border = true, children, delay, date, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.3,
        delay: delay,
      }}
      viewport={{ amount: 0, once: true }}
      className={`relative opacity-70 h-fit group   hover:opacity-100 w-full flex items-center ${
        border ? "border-b border-white/20" : ""
      } ${className}`}
    >
      {/* <div className=" group-hover:max-w-[64px] max-w-0 bg-orange-600 py-3 overflow-hidden transition-all duration-300 w-[64px] flex items-center justify-center">
        More
      </div> */}

      <div className="flex-1 py-3 md:text-left text-center   border-white/50 px-4">
        {children}
      </div>
      <div className="flex-1 hidden md:flex px-6 justify-end items-end">
        {date}
      </div>

      {/* <div
        className={`absolute top-1/2 group-hover:opacity-100 opacity-0 hidden lg:block scale-75 ${position} group-hover:scale-100 shadow-lg w-[300px] z-20 -translate-y-1/2 p-3 text-xs  bg-[#1f1f1f]`}
      >
        {info}
      </div> */}
    </motion.div>
  );
};
