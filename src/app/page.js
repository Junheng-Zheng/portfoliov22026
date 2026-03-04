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
    }, 700); // small pause after reaching 100%

    return () => clearTimeout(t);
  }, [progressValue, unlocked]);

  return (
    <motion.div
      initial={{ maxHeight: "100dvh" }}
      animate={{ maxHeight: "auto" }}
      className={`w-full  ${unlocked ? "overflow-visible" : "overflow-hidden"}`}
    >
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
          <a
            href="mailto:jz7259@g.rit.edu"
            onClick={() => setMenuOpen(false)}
            className="w-full relative hover:italic overflow-hidden h-full flex flex-col items-center justify-center  bg-white/8 rounded-sm p-6 cursor-pointer"
          >
            <p className="z-2 uppercase">[EMAIL]</p>
            <Mail
              className="absolute bottom-1/2 right-1/2 w-80 h-80 opacity-2 translate-y-1/2 translate-x-1/2"
              strokeWidth={1}
            />
          </a>
          <Link
            href="https://www.linkedin.com/in/junhengzheng/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="w-full relative hover:italic overflow-hidden h-full flex items-center justify-center bg-white/8 rounded-sm p-6 cursor-pointer"
          >
            [LINKEDIN]
            <Linkedin
              className="absolute bottom-1/2 right-1/2 w-80 h-80 opacity-2  translate-y-1/2 translate-x-1/2"
              strokeWidth={1}
            />
          </Link>
          <Link
            href="/resume.png"
            target="_blank"
            onClick={() => setMenuOpen(false)}
            className="w-full relative hover:italic overflow-hidden h-full flex items-center justify-center bg-white/8 rounded-sm p-6 cursor-pointer"
          >
            [RESUME]
            <File
              className="absolute bottom-1/2 right-1/2 w-80 h-80 opacity-2  translate-y-1/2 translate-x-1/2"
              strokeWidth={1}
            />
          </Link>
          <Link
            href="https://dribbble.com/junheng-zheng"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="w-full relative hover:italic overflow-hidden h-full flex items-center justify-center bg-white/8 rounded-sm p-6 cursor-pointer"
          >
            [DRIBBBLE]
            <Dribbble
              className="absolute bottom-1/2 right-1/2 w-80 h-80 opacity-2  translate-y-1/2 translate-x-1/2"
              strokeWidth={1}
            />
          </Link>
          <Link
            href="https://github.com/Junheng-Zheng?tab=overview&from=2022-12-01&to=2022-12-31"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="w-full relative hover:italic overflow-hidden h-full flex items-center justify-center bg-white/8 rounded-sm p-6 cursor-pointer"
          >
            [GITHUB]
            <Github
              className="absolute bottom-1/2 right-1/2 w-80 h-80 opacity-2  translate-y-1/2 translate-x-1/2"
              strokeWidth={1}
            />
          </Link>
        </div>
      </div>
      <motion.div
        initial={{ maxHeight: "100dvh" }}
        animate={{ maxHeight: "fit-content" }}
        transition={{ duration: 0.5, delay: 1 }}
        className="w-full h-dvh  flex flex-col py-6 md:gap-10 gap-12 text-sm spacemono items-center"
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
              <Link href="/resume.png" target="_blank" className="hover:italic">
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
          <Link href="/resume.png" target="_blank" className="uppercase">
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
            ref.current?.scrollIntoView({ behavior: "smooth", block: "end" })
          }
          onKeyDown={(e) =>
            e.key === "Enter" &&
            ref.current?.scrollIntoView({ behavior: "smooth", block: "end" })
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
          <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-2 uppercase spacemono text-sm  text-center ">
            Bridging the gap between design and development
          </p>
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
        </div>
      </div>
      <div ref={textRef} className="h-[300vh]">
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
      {/* <div className="h-dvh flex items-center gap-4 text-sm overflow-x-scroll uppercase justify-start spacemono">
        <div className="flex w-fit px-8 gap-8 text-nowrap">
          <div className="flex flex-col w-fit gap-3">
            <div className="py-3 px-6 flex items-center bg-white/5 border border-white/10 justify-center gap-2">
              [D&D Motor Systems]
              <p className="opacity-50 text-xs">Fall 2024</p>
            </div>
            <p className="w-full text-wrap text-xs opacity-50 text-left">
              My First Internship at a local company. I worked on web redesign
              and analytics, really learning the basics of both design and
              development.
            </p>
          </div>
          <div className="flex flex-col w-fit gap-3">
            <div className="py-3 px-6 flex items-center bg-white/5 border border-white/10 justify-center gap-2">
              [D&D Motor Systems]
              <p className="opacity-50 text-xs">Fall 2024</p>
            </div>
            <p className="w-full text-wrap text-xs opacity-50 text-left">
              My First Internship at a local company. I worked on web redesign
              and analytics, really learning the basics of both design and
              development.
            </p>
          </div>
          <div className="flex flex-col w-fit gap-3">
            <div className="py-3 px-6 flex items-center bg-white/5 border border-white/10 justify-center gap-2">
              [D&D Motor Systems]
              <p className="opacity-50 text-xs">Fall 2024</p>
            </div>
            <p className="w-full text-wrap text-xs opacity-50 text-left">
              My First Internship at a local company. I worked on web redesign
              and analytics, really learning the basics of both design and
              development.
            </p>
          </div>
          <div className="flex flex-col w-fit gap-3">
            <div className="py-3 px-6 flex items-center bg-white/5 border border-white/10 justify-center gap-2">
              [D&D Motor Systems]
              <p className="opacity-50 text-xs">Fall 2024</p>
            </div>
            <p className="w-full text-wrap text-xs opacity-50 text-left">
              My First Internship at a local company. I worked on web redesign
              and analytics, really learning the basics of both design and
              development.
            </p>
          </div>
          <div className="flex flex-col w-fit gap-3">
            <div className="py-3 px-6 flex items-center bg-white/5 border border-white/10 justify-center gap-2">
              [D&D Motor Systems]
              <p className="opacity-50 text-xs">Fall 2024</p>
            </div>
            <p className="w-full text-wrap text-xs opacity-50 text-left">
              My First Internship at a local company. I worked on web redesign
              and analytics, really learning the basics of both design and
              development.
            </p>
          </div>
          <div className="flex flex-col w-fit gap-3">
            <div className="py-3 px-6 flex items-center bg-white/5 border border-white/10 justify-center gap-2">
              [D&D Motor Systems]
              <p className="opacity-50 text-xs">Fall 2024</p>
            </div>
            <p className="w-full text-wrap text-xs opacity-50 text-left">
              My First Internship at a local company. I worked on web redesign
              and analytics, really learning the basics of both design and
              development.
            </p>
          </div>
        </div>
      </div> */}
      {/* <div className="h-dvh flex flex-col gap-8 items-center justify-center mono text-sm relative uppercase spacemono">
        <Image
          src="/bridge.png"
          alt="hero"
          fill
          className="object-cover object-center opacity-2"
        />
        <div className="w-full h-fit flex flex-col relative gap-3  justify-center items-center">
          <h2 className="text-2xl font-bold spacegrotesk">Experience</h2>
        </div>
        <div className="w-full  h-fit">
          <TableRow
            delay={0}
            position="left-20 group-hover:rotate-3  "
            info="Working on various projects for clients. Basically living off energy drinks 🫩"
          >
            Freelance w/ various clients ✳ Current
          </TableRow>
          <TableRow
            delay={0}
            position="right-20 group-hover:-rotate-3 "
            info="Worked on the internal design system team and got to experience corporate culture. Great Internship and made a ton of impact. 🗽"
          >
            Design Engineer @ LMI ✳ Summer 2025
          </TableRow>
          <TableRow
            delay={0.1}
            position="left-30 group-hover:-rotate-3 "
            info="Worked on the UX/UI for a mobile game commissioned by Tiger Snack Box. It was great learning about the mobile game development process. 🎮"
          >
            UX Designer @ Tiger Snack Box ✳ Spring 2025
          </TableRow>
          <TableRow
            delay={0.2}
            position="right-30 group-hover:rotate-3 "
            info="My first internship at a local company! Was a very start up like experience, and really got to leverage both design and development skills in a real world setting. 🚀"
          >
            Design Engineer @ D&D Motor Systems ✳ Winter 2024
          </TableRow>
          <TableRow
            delay={0.2}
            position="left-40 group-hover:-rotate-5 "
            info="Learned from mentors from FAANG companies and built a strong foundation in software engineering. 💻"
          >
            SWE Fellowship @ Headstarter ✳ Summer 2024
          </TableRow>
        </div>
      </div> */}
      <Footer />
    </motion.div>
  );
}

const TableRow = ({ border = true, children, delay, position, info }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: delay, once: true }}
      className={`relative opacity-70 h-fit group hover:bg-[#1f1f1f] cursor-pointer hover:opacity-100 w-full flex items-center ${
        border ? "border-b border-white/20" : ""
      }`}
    >
      <div className="flex-2 py-3 text-center group-hover:italic  border-white/50 px-4">
        {children}
      </div>
      <div
        className={`absolute top-1/2 group-hover:opacity-100 opacity-0 scale-75 ${position} group-hover:scale-100 shadow-lg w-[300px] z-20 transition-all duration-300 -translate-y-1/2 p-3 text-xs  bg-[#1f1f1f]`}
      >
        {info}
      </div>
      {/* <div
        ref={cardRef}
        style={{ transform: "translate(-50%, -50%)" }}
        className="pointer-events-none absolute left-1/2 top-1/2 w-[400px] uppercase flex flex-col gap-4 bg-[#1f1f1f] p-4 text-xs border border-white/10 opacity-0 group-hover:opacity-100 scale-80 group-hover:scale-100 z-50"
      >
        &quot;It&apos;s rare to see a designer who can code and code who can
        design.&quot;
      </div> */}
    </motion.div>
  );
};
