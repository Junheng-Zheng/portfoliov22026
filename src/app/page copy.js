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
import { Copyright, Minus } from "lucide-react";
import {
  TextAlignEnd,
  X,
  Zap,
  CodeXml,
  Eye,
  ArrowRight,
  Heart,
} from "lucide-react";
import AskeRandomizer from "./components/AskeRandomizer";
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
    <motion.div
      initial={{ maxHeight: "100dvh" }}
      animate={{ maxHeight: "auto" }}
      className={`w-full  flex flex-row-reverse  ${unlocked ? "overflow-visible" : "overflow-hidden"} geist text-base`}
    >
      <div
        className={` bg-[#0a0a0a] md:bg-white/3 flex flex-col   fixed h-dvh md:relative justify-between ${menuOpen ? " md:w-[240px] w-full p-6 md:pl-0  items-start" : "w-0"} transition-all duration-300 spacemono text-[16px]  right-0  z-20`}
      >
        <div className="flex w-full flex-col gap-3 items-start">
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
            className="hover:italic relative group overflow-visible cursor-pointer"
          >
            <div className="w-full group-hover:bg-white/5 scale-150 rounded-sm  aspect-square top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute"></div>
            <X />
          </button>
          <Link
            href="mailto:jz7259@g.rit.edu"
            className="spacegrotesk text-3xl mt-3 w-full font-medium hover:italic"
          >
            EMAIL
          </Link>
          <Link
            href="https://www.linkedin.com/in/junhengzheng/"
            className="spacegrotesk text-3xl  w-full font-medium hover:italic"
          >
            LINKEDIN
          </Link>
          <Link
            href="/resume.pdf"
            className="spacegrotesk text-3xl w-full font-medium hover:italic"
          >
            RESUME
          </Link>
          <Link
            href="https://dribbble.com/junheng-zheng"
            className="spacegrotesk text-3xl w-full font-medium hover:italic"
          >
            DRIBBBLE
          </Link>
          <Link
            href="https://github.com/Junheng-Zheng?tab=overview&from=2022-12-01&to=2022-12-31"
            className="spacegrotesk text-3xl w-full font-medium hover:italic"
          >
            GITHUB
          </Link>
        </div>
        <div className="flex w-full spacemono text-[10px] uppercase flex-col gap-1 border-t border-white/50 opacity-20  pt-3 items-start">
          <p>[Figma, React, Tailwind, Javascript, Framer Motion, Vercel]</p>
        </div>
      </div>
      <div
        className={`${menuOpen ? "md:p-6 md:h-dvh" : "p-0"} bg-white/3 flex flex-1 flex-col transition-all duration-300`}
      >
        <div
          className={`flex-1 h-full rounded-lg relative ${menuOpen ? "overflow-hidden border border-white/5 " : ""}`}
        >
          {menuOpen && (
            <div className="w-full h-full bg-black/20 absolute top-0 left-0 pointer-events-none rounded-lg  z-10 "></div>
          )}

          <div className=" flex flex-col pt-8 h-dvh items-center gap-12">
            <div className="flex  px-12 flex-col gap-8 w-full">
              <div className="flex justify-between w-full">
                <div className=" spacegrotesk px-2 py-1 text-xs border border-white/20 rounded-full flex items-center gap-0-">
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
                  <TextAlignEnd />
                </button>
              </div>
              <Juntext />
              <div className="flex items-center justify-between w-full">
                <p className="spacemono  w-[385px] inline-block">
                  Developer <ArrowRight className="inline-block w-5 h-5 " />{" "}
                  with a keen <Eye className=" inline-block w-5 h-5 " /> for{" "}
                  <span className="inline-block">
                    des
                    <Zap className=" inline-block w-4 h-4 " />
                    gn.
                  </span>{" "}
                  Creating from 0{" "}
                  <ArrowRight className="inline-block w-5 h-5 " /> 1 with{" "}
                  <div className="inline-block">
                    <Heart className="inline-block w-4 h-4 " />.
                  </div>
                </p>
                <div className="flex gap-3">
                  <Link
                    href="https://www.linkedin.com/in/junhengzheng/"
                    target="_blank"
                    className="hover:italic"
                  >
                    <p className=" spacemono text-sm text-left">[LinkedIn]</p>
                  </Link>
                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    className="hover:italic"
                  >
                    <p className=" spacemono text-sm text-left">[Resume]</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full flex h-full ">
              <div className="flex-1 h-full relative overflow-hidden group bg-gray-100">
                <Image
                  src="/juncover.png"
                  alt="pack1"
                  fill
                  className="object-cover object-center"
                />
                <div className="uppercase text-sm absolute group-hover:italic left-1/2 transition-all duration-300  -translate-x-1/2 bottom-0 text-white px-3 py-2 z-2 bg-orange-600 ">
                  [Works]
                </div>
                <div className="absolute top-0 left-0 z-10 flex w-full h-full justify-between">
                  {Array.from({ length: 256 }).map((_, i) => (
                    <div key={i} className="w-px z-1 h-full bg-white/5"></div>
                  ))}
                </div>
              </div>
              <div className="flex-1 h-full  relative overflow-hidden  bg-gray-100">
                <Image
                  src="/cover.png"
                  alt="pack1"
                  fill
                  className="object-cover object-center"
                />
                <div className="uppercase text-sm absolute group-hover:italic left-1/2 transition-all duration-300  -translate-x-1/2 bottom-0 text-white px-3 py-2 z-2 bg-orange-600 ">
                  [About]
                </div>
                <div className="absolute top-0 left-0 z-10 flex w-full h-full justify-between">
                  {Array.from({ length: 256 }).map((_, i) => (
                    <div key={i} className="w-px z-1 h-full bg-white/5"></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="p-12 pb-8 flex flex-col relative items-center gap-8">
            <Image
              src="/bridge.png"
              alt="pack1"
              fill
              className="object-cover -z-1 opacity-10 object-center"
            />
            <h2 className="spacegrotesk text-lg py-16 font-medium uppercase ">
              Bridge the Gap between Design and Development.
            </h2>
            <div className="w-full grid grid-cols-2 gap-8">
              <div className="w-full aspect-4/3 relative overflow-hidden rounded-xl  bg-gray-100">
                <Image
                  src="/ibm.gif"
                  alt="pack1"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="w-full aspect-4/3 relative overflow-hidden rounded-xl  bg-gray-100">
                <Image
                  src="/limi.gif"
                  alt="pack1"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="w-full aspect-4/3 relative overflow-hidden rounded-xl bg-white">
                <Image
                  src="/project/pack.png"
                  alt="pack1"
                  fill
                  className="object-cover object-center"
                />
              </div>
              {/* <div className="w-full aspect-4/3 relative overflow-hidden rounded-xl  bg-gray-100">
              <Image
                src="/limi.gif"
                alt="pack1"
                fill
                className="object-cover object-center"
              />
            </div> */}
            </div>
          </div>
          <div ref={textRef} className="h-[300vh]">
            <div className="sticky top-0 w-full h-dvh flex items-center flex-col justify-center bg-[#131313] uppercase spacemono text-[15px] text-center">
              <div className="w-full h-full flex items-center spacegrotesk text-lg font-medium justify-center">
                <ScrollRevealText progress={textScrollProgress}>
                  Junheng combines design, and development to create beautiful
                  designs from 0 to 1.
                </ScrollRevealText>
              </div>
              <Diagram progress={textScrollProgress} />
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
