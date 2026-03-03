import Link from "next/link";
import Juntext from "./Juntext";

const Footer = () => {
  return (
    <div className="w-full flex flex-col gap-14 opacity-90 text-white uppercase spacemono relative bg-black text-sm">
      <div className="p-6 flex flex-col gap-6">
        <Juntext />
        <div className="flex w-full  gap-3 opacity-90  uppercase items-center justify-between ">
          <Link
            href="/resume.png"
            target="_blank"
            className="uppercase hover:italic"
          >
            [Resume]
          </Link>
          <a href="mailto:jz7259@g.rit.edu" className="uppercase hover:italic">
            [Email]
          </a>
          <Link
            href="https://www.linkedin.com/in/junhengzheng/"
            target="_blank"
            rel="noopener noreferrer"
            className="uppercase hover:italic"
          >
            [LinkedIn]
          </Link>
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
  );
};

export default Footer;
