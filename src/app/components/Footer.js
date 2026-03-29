import Link from "next/link";
import Juntext from "./Juntext";
import AskeRandomizerGrid from "./AskeRandomizerGrid";

const Footer = () => {
  return (
    <div className="w-full flex flex-col  overflow-hidden gap-14 pt-24 opacity-90 text-white uppercase spacemono relative bg-black text-sm">
      <AskeRandomizerGrid cols={120} rows={8} />
      {/* <div className="p-6 flex flex-col gap-6">
        <Juntext />
      </div> */}
      {/* <Image src="/bridge.png" alt="hero" fill className="object-cover object-center opacity-10" /> */}
      {/* 
         <div className = "w-full relative z-10   overflow-hidden flex flex-col  border-t border-white/50 ">
           <TableRow />
            <TableRow />
              <TableRow />
                <TableRow />
                <TableRow />
         </div> */}
      <div className="hidden md:flex flex-col gap-3 md:flex-row items-center p-6 justify-between">
        <p>All rights reserved. Junheng Zheng 2026</p>
        <button className="uppercase hover:italic cursor-pointer text-white   ">
          [Back to Top]
        </button>
      </div>
    </div>
  );
};

export default Footer;
