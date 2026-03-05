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
      className={`w-full  flex flex-row-reverse  ${unlocked ? "overflow-visible" : "overflow-hidden"}`}
    >
      <div
        className={` bg-[#0a0a0a] md:bg-white/3 flex flex-col overflow-hidden fixed h-dvh md:relative justify-between ${menuOpen ? " md:w-[400px] w-full p-6 md:pl-0  items-start" : "w-0"} transition-all duration-300 spacemono text-sm  right-0  z-20`}
      >
        <div className="flex w-full flex-col gap-3 items-start">
          <button
            onClick={() => {
              setMenuOpen(false);
            }}
            className="hover:italic cursor-pointer"
          >
            [CLOSE]
          </button>
          <Link
            href="mailto:jz7259@g.rit.edu"
            className="spacegrotesk text-3xl w-full font-medium hover:italic"
          >
            <DecryptedText
              speed={80}
              maxIterations={15}
              animateOn="view"
              className="uppercase cursor-pointer"
              parentClassName="hover:italic"
            >
              EMAIL
            </DecryptedText>
          </Link>
          <Link
            href="https://www.linkedin.com/in/junhengzheng/"
            className="spacegrotesk text-3xl  w-full font-medium hover:italic"
          >
            <DecryptedText
              speed={80}
              maxIterations={15}
              animateOn="view"
              className="uppercase cursor-pointer"
              parentClassName="hover:italic"
            >
              LINKEDIN
            </DecryptedText>
          </Link>
          <Link
            href="/resume.pdf"
            className="spacegrotesk text-3xl w-full font-medium hover:italic"
          >
            <DecryptedText
              speed={80}
              maxIterations={15}
              animateOn="view"
              className="uppercase cursor-pointer"
              parentClassName="hover:italic"
            >
              RESUME
            </DecryptedText>
          </Link>
          <Link
            href="https://dribbble.com/junheng-zheng"
            className="spacegrotesk text-3xl w-full font-medium hover:italic"
          >
            <DecryptedText
              speed={80}
              maxIterations={15}
              animateOn="view"
              className="uppercase cursor-pointer"
              parentClassName="hover:italic"
            >
              DRIBBBLE
            </DecryptedText>
          </Link>
          <Link
            href="https://github.com/Junheng-Zheng?tab=overview&from=2022-12-01&to=2022-12-31"
            className="spacegrotesk text-3xl w-full font-medium hover:italic"
          >
            <DecryptedText
              speed={80}
              maxIterations={15}
              animateOn="view"
              className="uppercase cursor-pointer"
              parentClassName="hover:italic"
            >
              GITHUB
            </DecryptedText>
          </Link>
        </div>
        <div className="flex w-full spacemono text-xs uppercase flex-col gap-1 border-t border-white/50 opacity-20  pt-3 items-start">
          <p>[Designed in Figma]</p>
          <p>[Developed in React, Tailwind]</p>
          <p>[Hosted on Vercel]</p>
        </div>
      </div>
      <div
        className={`${menuOpen ? "md:p-6 md:h-dvh" : "p-0"} bg-white/3 flex flex-col transition-all duration-300`}
      >
        <div
          className={`flex-1 h-full rounded-lg relative ${menuOpen ? "overflow-hidden border border-white/5 " : ""}`}
        >
          {menuOpen && (
            <div className="w-full h-full bg-black/20 absolute top-0 left-0 pointer-events-none rounded-lg  z-10 "></div>
          )}
          <motion.div
            initial={{ minHeight: "100dvh", height: "100dvh" }}
            animate={
              unlocked
                ? { minHeight: "fit-content", height: "fit-content" }
                : { minHeight: "100dvh", height: "100dvh" }
            }
            transition={{ duration: 0.5 }}
            className="w-full bg-[#0a0a0a] flex flex-col py-6 md:gap-10 gap-12 text-sm spacemono items-center"
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
                  <Link
                    href="/resume.pdf"
                    target="_blank"
                    className="hover:italic"
                  >
                    <DecryptedText
                      speed={100}
                      maxIterations={15}
                      parentClassName="hover:italic"
                      className="uppercase cursor-pointer"
                      animateOn="view"
                    >
                      {leftTextAfter}
                    </DecryptedText>
                  </Link>
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
                  <Link
                    href="https://www.linkedin.com/in/junhengzheng/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:italic"
                  >
                    <DecryptedText
                      speed={100}
                      maxIterations={15}
                      parentClassName="hover:italic"
                      className="uppercase cursor-pointer"
                      animateOn="view"
                    >
                      {rightTextAfter}
                    </DecryptedText>
                  </Link>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: -30, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              transition={{ duration: 0.5, delay: delay + 0.2 }}
              className="md:hidden flex gap-3 justify-between w-full px-6"
            >
              <Link href="/resume.pdf" target="_blank" className="uppercase">
                [Resume]
              </Link>
              <Link
                href="https://www.linkedin.com/in/junhengzheng/"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase"
              >
                [Contact]
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="w-full  flex flex-col text-sm uppercase spacemono md:flex-row  "
            initial={{ y: 30, height: 0 }}
            animate={{ y: 0, height: "fit-content" }}
            transition={{ duration: 0.5, delay: delay + 0.2 }}
          >
            {/* <div className = "w-full flex-1 bg-white"/> */}
            <div
              role="button"
              tabIndex={0}
              onClick={() =>
                ref.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                })
              }
              onKeyDown={(e) =>
                e.key === "Enter" &&
                ref.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                })
              }
              className=" group cursor-pointer overflow-hidden xl:w-[50%] group xl:h-[58dvh]  lg:h-[440px] md:h-[360px]  h-[240px]  w-full flex items-end justify-center  relative"
            >
              <motion.span
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: delay + 0.5 }}
                className="uppercase absolute group-hover:italic left-1/2 transition-all duration-300  -translate-x-1/2 bottom-0 text-white px-3 py-2 z-2 bg-orange-600 "
              >
                [Works]
              </motion.span>
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
            <div
              role="button"
              tabIndex={0}
              onClick={() =>
                textRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                })
              }
              onKeyDown={(e) =>
                e.key === "Enter" &&
                textRef.current?.scrollIntoView({
                  behavior: "smooth",
                  block: "end",
                })
              }
              className="  group cursor-pointer  overflow-hidden xl:w-[50%] group xl:h-[58dvh] lg:h-[440px] md:h-[360px]  h-[240px] w-full flex items-end justify-center  relative"
            >
              <motion.span
                initial={{ y: 30 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.3, delay: delay + 0.5 }}
                className="uppercase group-hover:italic text-white px-3 py-2 z-2  absolute left-1/2 transition-all duration-300  -translate-x-1/2 bottom-0  bg-orange-600  "
              >
                [About]
              </motion.span>
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
              <div className="absolute top-1/2 left-1/2  flex flex-col gap-4 -translate-x-1/2 -translate-y-1/2 text-white z-2 uppercase spacegrotesk text-lg font-medium   text-center ">
                Bridging the gap between design and development.
              </div>
              <Image
                src="/bridge.png"
                alt="hero"
                fill
                className="object-cover object-center opacity-15"
              />
              <ProjectCard
                progress={scrollYProgress}
                range={[0.1, 0.25]}
                image="/project/lmi.png"
                title="[LIBERTY MUTUAL]"
                href="/works/liberty-mutual"
                description="Design Engineer on the EUI team, Summer 2025"
              ></ProjectCard>
              <ProjectCard
                progress={scrollYProgress}
                range={[0.25, 0.4]}
                image="/project/packcover.png"
                className="xl:border-l border-white/10"
                href="/works/pack"
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
                comingSoon={true}
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
                comingSoon={true}
              ></ProjectCard>
              <ProjectCard
                progress={scrollYProgress}
                range={[0.85, 1]}
                image="/project/stud.png"
                className="xl:border-l xl:border-t border-white/10"
                title="[Figma Studies]"
                description="Daily 30 minute Figma designs given a prompt"
                comingSoon={true}
              ></ProjectCard>
            </div>
          </div>
          <div ref={textRef} className="h-[300vh]">
            <div className="sticky top-0 w-full h-dvh flex items-center flex-col justify-center bg-[#131313] uppercase spacemono text-sm text-center">
              <div className="w-full h-full flex items-center spacegrotesk text-lg font-medium justify-center">
                <ScrollRevealText progress={textScrollProgress}>
                  Junheng combines design, and development to create beautiful
                  designs from 0 to 1.
                </ScrollRevealText>
              </div>
              <Diagram progress={textScrollProgress} />
            </div>
          </div>

          <motion.div
            className="h-dvh flex gap-8 items-center flex-col justify-center mono text-sm opacity-90 relative uppercase spacemono"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ amount: 0, once: true }}
          >
            <Image
              src="/bridge.png"
              alt="hero"
              fill
              className="object-cover object-center opacity-2"
            />
            {/* <div className="w-1/2 absolute top-0 right-0 border border-white/50  h-full grid grid-cols-3">
              <div className="col-span-1 w-full h-full border-r border-b border-white/50"></div>
              <div className="col-span-1 w-full h-full border-r border-b border-white/50"></div>
              <div className="col-span-1 w-full h-full border-r border-b  border-white/50"></div>
              <div className="col-span-2 w-full h-full border-r border-b  border-white/50"></div>
              <div className="col-span-1 w-full h-full border-r border-b  border-white/50"></div>
              <div className="col-span-2 w-full h-full border-r border-b  border-white/50"></div>
              <div className="col-span-1 w-full h-full border-r border-b border-white/50"></div>
              <div className="col-span-1 w-full h-full border-r border-b border-white/50"></div>
              <div className="col-span-1 w-full h-full border-r border-b  border-white/50"></div>
            </div> */}

            <div className="w-full flex flex-col items-center  h-fit">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0 }}
                viewport={{ amount: 1, once: true }}
                className="text-lg px-6 text-center font-medium spacegrotesk "
              >
                Experience as design engineer.
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, width: 0, maxHeight: 0 }}
                whileInView={{ opacity: 1, width: "100%", maxHeight: "100%" }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ amount: 1, once: true }}
                className="flex flex-col w-full items-center"
              >
                <motion.div className="h-5 xl:w-1/14 w-1/5 border-b border-r border-white/50 translate-y-[0.5px] border-dashed translate-x-1/2 rounded-br-sm" />
                <motion.div className="h-5 xl:w-1/14 w-1/5 border-t border-l border-white/50 translate-y-[-0.5px] border-dashed -translate-x-1/2 rounded-tl-sm" />
              </motion.div>
              <div className="w-full py-6 flex flex-col bg-[#131313]">
                <TableRow
                  delay={0.2}
                  position="right-20 "
                  info="Working on various projects for clients. Basically living off energy drinks 🫩"
                  date="[Current]"
                  className="border-t "
                >
                  Freelance w/ various clients
                </TableRow>
                {/* <div className="flex flex-col w-full items-center">
                <div className="h-5 xl:w-1/6 w-1/2 border-b border-r border-white/50 translate-y-[0.5px] border-dashed translate-x-1/2 rounded-br-sm" />
                <div className="h-5 xl:w-1/6 w-1/2 border-t border-l border-white/50 translate-y-[-0.5px] border-dashed -translate-x-1/2 rounded-tl-sm" />
              </div> */}
                <TableRow
                  delay={0.3}
                  position="right-20 "
                  info="Worked on the internal design system team and got to experience corporate culture. Great Internship and made a ton of impact. 🗽"
                  date="[Summer 2025]"
                >
                  Design Engineer @ LMI
                </TableRow>
                {/* <div className="flex flex-col w-full items-center">
                <div className="h-5 xl:w-1/8 w-1/2 border-b border-r border-white/50 translate-y-[0.5px] border-dashed translate-x-1/2 rounded-br-sm" />
                <div className="h-5 xl:w-1/8 w-1/2 border-t border-l border-white/50 translate-y-[-0.5px] border-dashed -translate-x-1/2 rounded-tl-sm" />
              </div> */}
                <TableRow
                  delay={0.4}
                  position="right-20  "
                  info="Worked on the UX/UI for a mobile game commissioned by Tiger Snack Box. It was great learning about the mobile game development process. 🎮"
                  date="[Spring 2025]"
                >
                  UX Designer @ Tiger Snack Box
                </TableRow>
                {/* <div className="flex flex-col w-full items-center">
                <div className="h-5 xl:w-1/10 w-1/2 border-b border-r border-white/50 translate-y-[0.5px] border-dashed translate-x-1/2 rounded-br-sm" />
                <div className="h-5 xl:w-1/10 w-1/2 border-t border-l border-white/50 translate-y-[-0.5px] border-dashed -translate-x-1/2 rounded-tl-sm" />
              </div> */}
                <TableRow
                  delay={0.5}
                  position="right-20  "
                  info="My first internship at a local company! Was a very start up like experience, and really got to leverage both design and development skills in a real world setting. 🚀"
                  date="[Fall 2024]"
                >
                  SWE @ D&D Motor Systems
                </TableRow>
                {/* <div className="flex flex-col w-full items-center">
                <div className="h-5 xl:w-1/12 w-1/2 border-b border-r border-white/50 translate-y-[0.5px] border-dashed translate-x-1/2 rounded-br-sm" />
                <div className="h-5 xl:w-1/12 w-1/2 border-t border-l border-white/50 translate-y-[-0.5px] border-dashed -translate-x-1/2 rounded-tl-sm" />
              </div> */}
                <TableRow
                  delay={0.6}
                  position="right-20 "
                  info="Learned from mentors from FAANG companies and built a strong foundation in software engineering. 💻"
                  date="[Summer 2024]"
                >
                  SWE @ Headstarter
                </TableRow>
              </div>
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: "100%" }}
                transition={{ duration: 0.3, delay: 0.7 }}
                viewport={{ amount: 1, once: true }}
                className="flex flex-col w-full items-center"
              >
                <div className="h-5 xl:w-1/14 w-1/5 border-b border-r border-white/50 translate-y-[0.5px] border-dashed translate-x-1/2 rounded-br-sm" />
                <div className="h-5 xl:w-1/14 w-1/5 border-t border-l border-white/50 translate-y-[-0.5px] border-dashed -translate-x-1/2 rounded-tl-sm" />
              </motion.div>
              <div className="flex items-center px-6 flex-col gap-6">
                <Link
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
                </Link>
                <Link
                  href="resume.pdf"
                  target="_blank"
                  className="opacity-80 hover:opacity-100 transition-all duration-300"
                >
                  <p className="z-20 relative hover:italic">
                    [View Full Resume]
                  </p>
                </Link>
              </div>
            </div>
          </motion.div>

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
