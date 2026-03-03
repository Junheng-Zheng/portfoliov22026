"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
const Pack = () => {
  return (
    <div className="flex flex-col gap-4 py-6  spacemono">
      <div className="flex flex-col px-6 text-sm opacity-90  uppercase gap-7">
        <Link className="cursor-pointer text-xs  hover:italic" href="/">
          [Back to Home]
        </Link>
        <h1 className="text-4xl font-bold spacegrotesk">PACK! Mobile Game</h1>
        <div className="flex w-full flex-col gap-8  lg:justify-between items-start ">
          <div className="flex flex-col w-full lg:w-1/3 gap-3">
            <p className="text-sm spacemono   uppercase">
              Commissioned by Tiger Snack Box, PACK! is a single player puzzle
              game focused on improving brand visibility.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:items-end  w-full">
            <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 ">
              <div className="flex flex-col gap-2">
                <p className="text-xs spacemono">[Role]</p>
                <p>Lead Designer</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs spacemono">[Duration]</p>
                <p>2 Months</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xs spacemono">[Tools]</p>
                <p>Figma, Qualtrics </p>
              </div>
            </div>
            <div className="flex text-xs gap-3 w-full lg:w-auto">
              <p className="hover:italic cursor-pointer">
                [Full Process (Coming Soon)]{" "}
              </p>
              <p className="hover:italic cursor-pointer">[Figma]</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 lg:px-6"></div>
      <div className="w-full lg:gap-3 grid grid-cols-2">
        <div className="w-full h-[280px] lg:h-[600px] relative  col-span-2 bg-gray-100">
          <Image
            src="/pack/pack1.png"
            alt="cover"
            fill
            className="object-cover object-center"
          />
        </div>

        <div className="w-full h-full relative row-span-2 col-span-1 bg-gray-100">
          <Image
            src="/pack/pack2.png"
            alt="1"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="w-full h-[200px]  lg:h-[500px] relative row-span-1 col-span-1 bg-gray-100">
          <Image
            src="/pack/pack3.png"
            alt="2"
            fill
            className="object-cover object-center"
          />
        </div>
        <div className="w-full h-[200px] lg:h-[500px] relative row-span-1 col-span-1 bg-gray-100">
          <Image
            src="/pack/pack4.png"
            alt="3"
            fill
            className="object-cover object-bottom"
          />
        </div>
        <div className="w-full h-[280px] lg:h-[600px] relative  col-span-2 bg-gray-100">
          <Image
            src="/pack/pack5.png"
            alt="4"
            fill
            className="object-cover object-top"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Pack;
