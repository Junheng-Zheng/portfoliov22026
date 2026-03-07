"use client";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/Footer";
const Pack = () => {
  return (
    <div className="flex flex-col gap-4 py-6 bg-[#131313]   spacemono">
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
      <div className="flex flex-col gap-3 lg:px-6">
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
      </div>
      {/* <div className="flex flex-col gap-24 pb-24 items-center">
        <div className="w-full h-[12px] bg-orange-600 sticky top-0"></div>
        <Paragraph title="Overview">
          Tiger Snack Box is a company that makes sells international snacks to
          US consumers. I was commissioned as a lead designer for a mobile game
          with the goal of improving brand visibility.
        </Paragraph>
        <Paragraph title="Requirements Gathering">
          Our instructions were direct. We were given gameplay mechanics,
          constraints, brand identity, and what they wanted out of the game. The
          rest was up to us.
        </Paragraph>
        <Paragraph title="Question">
          How can we create a mobile game that increase both brand visibility
          and engagement while coinciding with stakeholders&apos; goals?
        </Paragraph>
        <Paragraph title="Discovery">
          To tackle the question, we analyzed the constraints and guidelines
          given to us.
        </Paragraph>
        <div className="flex gap-4 ">
          <div className="flex flex-col w-[400px] border border-white/50  h-fit">
            <div className="w-full px-3 py-2 border-b border-white/50">
              Constraints
            </div>
            <div className="w-full px-3 py-2 gap-2 flex flex-col  border-b border-white/50">
              Gameplay
              <div className="pl-4 text-xs flex flex-col gap-2">
                <p>Single player</p>
                <p>Puzzle game</p>
                <p>2D</p>
                <p>Mobile</p>
              </div>
            </div>
            <div className="w-full px-3 py-2 gap-2 flex flex-col  border-b border-white/50">
              Gameplay
              <div className="pl-4 text-xs flex flex-col gap-2">
                <p>Single player</p>
                <p>Puzzle game</p>
                <p>2D</p>
                <p>Mobile</p>
              </div>
            </div>
            <div className="w-full px-3 py-2 gap-2 flex flex-col  border-b border-white/50">
              Gameplay
              <div className="pl-4 text-xs flex flex-col gap-2">
                <p>Single player</p>
                <p>Puzzle game</p>
                <p>2D</p>
                <p>Mobile</p>
              </div>
            </div>
            <div className="w-full px-3 py-2 gap-2 flex flex-col  border-b border-white/50">
              Gameplay
              <div className="pl-4 text-xs flex flex-col gap-2">
                <p>Single player</p>
                <p>Puzzle game</p>
                <p>2D</p>
                <p>Mobile</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[400px] border border-white/50  h-fit">
            <div className="w-full px-3 py-2 border-b border-white/50">
              Constraints
            </div>
            <div className="w-full px-3 py-2 gap-2 flex flex-col  border-b border-white/50">
              Gameplay
              <div className="pl-4 text-xs flex flex-col gap-2">
                <p>Single player</p>
                <p>Puzzle game</p>
                <p>2D</p>
                <p>Mobile</p>
              </div>
            </div>
            <div className="w-full px-3 py-2 gap-2 flex flex-col  border-b border-white/50">
              Gameplay
              <div className="pl-4 text-xs flex flex-col gap-2">
                <p>Single player</p>
                <p>Puzzle game</p>
                <p>2D</p>
                <p>Mobile</p>
              </div>
            </div>
            <div className="w-full px-3 py-2 gap-2 flex flex-col  border-b border-white/50">
              Gameplay
              <div className="pl-4 text-xs flex flex-col gap-2">
                <p>Single player</p>
                <p>Puzzle game</p>
                <p>2D</p>
                <p>Mobile</p>
              </div>
            </div>
            <div className="w-full px-3 py-2 gap-2 flex flex-col  border-b border-white/50">
              Gameplay
              <div className="pl-4 text-xs flex flex-col gap-2">
                <p>Single player</p>
                <p>Puzzle game</p>
                <p>2D</p>
                <p>Mobile</p>
              </div>
            </div>
          </div>
        </div>
        <Paragraph title="Market Research">
          With constraints and guidelines in mind, we conducted market research.
          This stage was split up into two parts: a competitor analysis for
          qualitative data and user reviews for quantitative data.
        </Paragraph>
        <Paragraph title="Competitor Analysis">
          We analyzed competitors in the puzzle game genre to understand their
          strengths and weaknesses.
        </Paragraph>
        <div className="grid grid-cols-2 gap-4 ">
          <div className="flex flex-col w-[400px] border border-white/50  h-fit">
            <div className="w-full px-3 py-2 border-b border-white/50">
              Constraints
            </div>
            <div className="w-full px-3 py-2 gap-2 flex flex-col  border-b border-white/50">
              Gameplay
              <div className="pl-4 text-xs flex flex-col gap-2">
                <p>Single player</p>
                <p>Puzzle game</p>
                <p>2D</p>
                <p>Mobile</p>
              </div>
            </div>
            <div className="w-full px-3 py-2 gap-2 flex flex-col  border-b border-white/50">
              Gameplay
              <div className="pl-4 text-xs flex flex-col gap-2">
                <p>Single player</p>
                <p>Puzzle game</p>
                <p>2D</p>
                <p>Mobile</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[400px] border border-white/50  h-fit">
            <div className="w-full px-3 py-2 border-b border-white/50">
              Constraints
            </div>
            <div className="w-full px-3 py-2 gap-2 flex flex-col  border-b border-white/50">
              Gameplay
              <div className="pl-4 text-xs flex flex-col gap-2">
                <p>Single player</p>
                <p>Puzzle game</p>
                <p>2D</p>
                <p>Mobile</p>
              </div>
            </div>
            <div className="w-full px-3 py-2 gap-2 flex flex-col  border-b border-white/50">
              Gameplay
              <div className="pl-4 text-xs flex flex-col gap-2">
                <p>Single player</p>
                <p>Puzzle game</p>
                <p>2D</p>
                <p>Mobile</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[400px] border border-white/50  h-fit">
            <div className="w-full px-3 py-2 border-b border-white/50">
              Constraints
            </div>
            <div className="w-full px-3 py-2 gap-2 flex flex-col  border-b border-white/50">
              Gameplay
              <div className="pl-4 text-xs flex flex-col gap-2">
                <p>Single player</p>
                <p>Puzzle game</p>
                <p>2D</p>
                <p>Mobile</p>
              </div>
            </div>
            <div className="w-full px-3 py-2 gap-2 flex flex-col  border-b border-white/50">
              Gameplay
              <div className="pl-4 text-xs flex flex-col gap-2">
                <p>Single player</p>
                <p>Puzzle game</p>
                <p>2D</p>
                <p>Mobile</p>
              </div>
            </div>
          </div>
        </div>
        <Paragraph title="User Reviews">
          We also collected 50 reviews from each compeitor app to understand how
          users perceive the games.
        </Paragraph>
        <div className="grid grid-cols-2 gap-4 ">
          <div className="flex flex-col w-[400px]  p-6 gap-2 text-xs  border border-white/50  h-fit">
            <p className="spacegrotesk font-bold text-lg">78%</p>
            <p>Love the illustrative and cosy feel of Cats & Soup</p>
          </div>
          <div className="flex flex-col w-[400px]  p-6 gap-2 text-xs  border border-white/50  h-fit">
            <p className="spacegrotesk font-bold text-lg">78%</p>
            <p>Love the illustrative and cosy feel of Cats & Soup</p>
          </div>
          <div className="flex flex-col w-[400px]  p-6 gap-2 text-xs  border border-white/50  h-fit">
            <p className="spacegrotesk font-bold text-lg">78%</p>
            <p>Love the illustrative and cosy feel of Cats & Soup</p>
          </div>
          <div className="flex flex-col w-[400px]  p-6 gap-2 text-xs  border border-white/50  h-fit">
            <p className="spacegrotesk font-bold text-lg">78%</p>
            <p>Love the illustrative and cosy feel of Cats & Soup</p>
          </div>
        </div>
        <Paragraph title="Insight Summary">
          We created summaries of our insights to help us understand the market
          and the users.
        </Paragraph>
        <div className="grid grid-cols-2 gap-4 ">
          <div className="flex flex-col w-[400px]  p-6 gap-3 text-xs  border border-white/50  h-fit">
            <p className="spacegrotesk font-bold leading-tight text-lg">
              Use hand drawn textures and pastel, retro colors
            </p>
            <p>Love the illustrative and cosy feel of Cats & Soup</p>
          </div>
          <div className="flex flex-col w-[400px]  p-6 gap-3 text-xs  border border-white/50  h-fit">
            <p className="spacegrotesk font-bold leading-tight text-lg">
              Use hand drawn textures and pastel, retro colors
            </p>
            <p>Love the illustrative and cosy feel of Cats & Soup</p>
          </div>
          <div className="flex flex-col w-[400px]  p-6 gap-3 text-xs  border border-white/50  h-fit">
            <p className="spacegrotesk font-bold leading-tight text-lg">
              Use hand drawn textures and pastel, retro colors
            </p>
            <p>Love the illustrative and cosy feel of Cats & Soup</p>
          </div>
          <div className="flex flex-col w-[400px]  p-6 gap-3 text-xs  border border-white/50  h-fit">
            <p className="spacegrotesk font-bold leading-tight text-lg">
              Use hand drawn textures and pastel, retro colors
            </p>
            <p>Love the illustrative and cosy feel of Cats & Soup</p>
          </div>
        </div>
        <Paragraph title="Personas">
          We created four different personas based on insights and user reviews.
        </Paragraph>
        <Paragraph title="Solution & Metric of Success">
          We created four different personas based on insights and user reviews.
        </Paragraph>
        <Paragraph title="User Flows">
          We created four different personas based on insights and user reviews.
        </Paragraph>
        <Paragraph title="Low Fidelity Wireframes">
          We created four different personas based on insights and user reviews.
        </Paragraph>
        <Paragraph title="Design Tokens">
          We created four different personas based on insights and user reviews.
        </Paragraph>
        <Paragraph title="High Fidelity Wireframes">
          We created four different personas based on insights and user reviews.
        </Paragraph>
        <Paragraph title="Details and Design Choices">
          We created four different personas based on insights and user reviews.
        </Paragraph>
        <Paragraph title="User Flows & Prototyping">
          We created four different personas based on insights and user reviews.
        </Paragraph>
        <Paragraph title="Delievery & Final Thoughts">
          We created four different personas based on insights and user reviews.
        </Paragraph>
      </div> */}
      <Footer />
    </div>
  );
};

export default Pack;

const Paragraph = ({ children, title }) => {
  return (
    <div className="flex flex-col gap-2 w-1/3 px-6">
      <h2 className="text-lg uppercase font-bold spacegrotesk">{title}</h2>
      <p className="text-sm spacemono  ">{children}</p>
    </div>
  );
};
