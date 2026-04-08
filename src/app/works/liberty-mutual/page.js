"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
import { useState } from "react";
import { ArrowUpLeft, ArrowUpRight } from "lucide-react";
const Pack = () => {
  const [password, setPassword] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    if (password === "Junlovesdesign") {
      setIsCorrect(true);
      setError("");
    } else {
      setError("Incorrect password");
      setPassword("");

      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };
  return (
    <div className="p-12 flex flex-col items-center gap-24">
      <div className="flex flex-col w-1/2  gap-4">
        <Link
          href="/"
          className="hover:italic gap-1 w-fit opacity-50 hover:opacity-100 flex items-center justify-center  bg-black spacemono text-sm uppercase "
        >
          <ArrowUpLeft className="inline-block w-4 h-4 t" />
          Back
        </Link>
        <h1 className="text-4xl font-medium spacegrotesk uppercase">
          Consolidating Internal Design Inconsistencies into a Unified System @
          Liberty Mutual
        </h1>
        <p className="opacity-70 text-sm spacegrotesk">
          Design Engineer @ IBM Research ✦ 5 Min Read
        </p>
        <div className="w-full h-[400px] relative overflow-hidden rounded-md  bg-gray-100">
          <Image
            src="/limi.gif"
            alt="liberty-mutual"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex p-12 bg-white/5 flex-col gap-4 w-1/2">
        <p className="opacity-70 text-sm spacegrotesk">
          Internal Enterpise Work
        </p>
        <p>
          For the full process, please send me a message for the password to
          access the full case study.
        </p>
        <div className="flex rounded-sm overflow-hidden">
          <input
            type="text"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter Password"
            className="w-full bg-black  px-3 py-2 focus:outline-none focus:ring-0 "
          />
          <button
            onClick={handleSubmit}
            className="border-l border-white/20 hover:italic cursor-pointer text-white px-3 py-2 z-2 bg-black  "
          >
            Access
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-1/2">
        <p className="opacity-70 text-sm spacegrotesk">Synopsis</p>
        <p>
          During the summer of 2025, I worked as a Design Engineer at Liberty
          Mutual for the summer of 2025. During the time, I worked on an
          internal design system on the Enterprise User Interface team.
        </p>
      </div>
      <div className="flex flex-col gap-4 w-1/2">
        <p className="opacity-70 text-sm spacegrotesk">What I Learned</p>
        <p>
          I walked away with a deeper understanding of designing and creating
          components at scale. From utilizing efficient autolayouts and
          variables when designing components and utilizing, to developing
          components in React that were both intuitive and responive.
        </p>
      </div>
    </div>
  );
};

export default Pack;

// {/* <div className="flex flex-col bg-[#131313]  text-sm uppercase spacemono">
//   {/* <div className="flex flex-col pb-6 px-6 text-sm opacity-90  uppercase gap-7">
//         <Link className="cursor-pointer text-xs  hover:italic" href="/">
//           [Back to Home]
//         </Link>
//         <h1 className="text-4xl font-bold spacegrotesk">
//           DESIGN ENGINEERING @ LMI
//         </h1>
//         <div className="flex w-full flex-col gap-8  lg:justify-between items-start ">
//           <div className="flex flex-col w-full lg:w-1/3 gap-3">
//             <p className="text-sm spacemono   uppercase">
//               Worked as a Design Engineer at Liberty Mutual for the summer of
//               2025. During the time, I worked on an internal design system on
//               the Enterprise User Interface team.
//             </p>
//           </div>
//           <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:items-end  w-full">
//             <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 ">
//               <div className="flex flex-col gap-2">
//                 <p className="text-xs spacemono">[Role]</p>
//                 <p>Design Engineer</p>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <p className="text-xs spacemono">[Duration]</p>
//                 <p>3 Months</p>
//               </div>
//               <div className="flex flex-col gap-2">
//                 <p className="text-xs spacemono">[Tools]</p>
//                 <p>Figma, React, Storybook, TypeScript, Lucidcharts </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> */}

//   <div className="w-full h-dvh bg-[#131313]  flex-col text-sm gap-3 flex justify-center relative items-center">
//     <div className="flex flex-col  items-center gap-5 ">
//       <p>Want to learn more? Enter with password. </p>
//       <form
//         onSubmit={handleSubmit}
//         className="flex border relative text-sm border-white/10 "
//       >
//         <input
//           onChange={(e) => setPassword(e.target.value)}
//           type="text"
//           placeholder="Enter Password"
//           className="w-full bg-white/10 placeholder:uppercase px-3 py-2 focus:outline-none focus:ring-0 "
//         />
//         <button
//           type="submit"
//           className="uppercase hover:italic cursor-pointer text-white px-3 py-2 z-2 bg-orange-600  "
//         >
//           [ACCESS]
//         </button>
//         {error && (
//           <p className="text-red-400 text-xs absolute -bottom-4 translate-x-1/2 right-1/2 translate-y-full ">
//             {error}
//           </p>
//         )}
//       </form>
//       <Link className="cursor-pointer text-xs opacity-50 hover:italic" href="/">
//         [Back to Home]
//       </Link>
//     </div>
//   </div>
//   <Footer />
// </div>; */}
