"use client";

import { motion } from "framer-motion";
import { Flag, Inbox, Menu, MessageCircle, PenLine, Share } from "lucide-react";
import { useState } from "react";

const ToolbarHover = () => {
  const [isHover, setIsHover] = useState<string | null>(null);

  console.log(isHover)

  return (
    <section className="relative py-28">
      <div className="flex justify-center ">
        <Card
          isHover={isHover}
          title="Comment"
          color="#1373f4"
          style="top-0 left-0 -rotate-12"
        />
        <Card
          isHover={isHover}
          title="Inbox"
          color="#fd990c"
          style="top-0 rotate-6"
        />
        <Card
          isHover={isHover}
          title="Flag"
          color="#45a656"
          style="top-0 right-0 rotate-12"
        />
        <Card
          isHover={isHover}
          title="Penline"
          color="#1ca595"
          style="bottom-0 left-0 rotate-12"
        />
        <Card
          isHover={isHover}
          title="Share"
          color="#e5484d"
          style="bottom-0 -rotate-12"
        />
        <Card
          isHover={isHover}
          title="Menu"
          color="#8d4ec5"
          style="bottom-0 right-0 -rotate-12"
        />
      </div>
      <aside className=" flex gap-8 items-center bg-gray-800 border border-gray-700 w-full p-5 rounded-full cursor-pointer">
        <div
          onMouseEnter={() => setIsHover("Comment")}
          onMouseLeave={() => setIsHover(null)}
          className="relative rounded-full bg-transparent hover:bg-gray-700 hover:shadow-[0_0_0px_12px_rgba(55,65,81,1)] transition-all"
        >
          <MessageCircle />
          {isHover === "Comment" && (
            <motion.div
              initial={{ opacity: 0, y: "100%", x: "40%" }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bg-gray-800 px-3 py-1.5 rounded-md translate-x-1/4 right-0 -top-[4.1rem]"
            >
              Comment
            </motion.div>
          )}
        </div>
        <div
          onMouseEnter={() => setIsHover("Inbox")}
          onMouseLeave={() => setIsHover(null)}
          className="relative rounded-full bg-transparent hover:bg-gray-700 hover:shadow-[0_0_0px_12px_rgba(55,65,81,1)] transition-all"
        >
          <Inbox />
          <div className="absolute -top-0.5 -right-1 size-3 bg-blue-500 rounded-full border-2 border-gray-800" />
          {isHover === "Inbox" && (
            <motion.div
              initial={{ opacity: 0, y: "100%", x: "40%" }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bg-gray-800 px-3 py-1.5 rounded-md translate-x-1/4 right-0 -top-[4.1rem]"
            >
              Inbox
            </motion.div>
          )}
        </div>
        <div
          onMouseEnter={() => setIsHover("Flag")}
          onMouseLeave={() => setIsHover(null)}
          className="relative rounded-full bg-transparent hover:bg-gray-700 hover:shadow-[0_0_0px_12px_rgba(55,65,81,1)] transition-all"
        >
          {" "}
          <Flag />
          {isHover === "Flag" && (
            <motion.div
              initial={{ opacity: 0, y: "100%", x: "40%" }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bg-gray-800 px-3 py-1.5 rounded-md translate-x-1/4 right-0 -top-[4.1rem]"
            >
              Flag
            </motion.div>
          )}
        </div>
        <div
          onMouseEnter={() => setIsHover("Penline")}
          onMouseLeave={() => setIsHover(null)}
          className="relative rounded-full bg-transparent hover:bg-gray-700 hover:shadow-[0_0_0px_12px_rgba(55,65,81,1)] transition-all"
        >
          {" "}
          <PenLine />
          {isHover === "Penline" && (
            <motion.div
              initial={{ opacity: 0, y: "100%", x: "40%" }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bg-gray-800 px-3 py-1.5 rounded-md translate-x-1/4 right-0 -top-[4.1rem]"
            >
              Penline
            </motion.div>
          )}
        </div>
        <div
          onMouseEnter={() => setIsHover("Share")}
          onMouseLeave={() => setIsHover(null)}
          className="relative rounded-full bg-transparent hover:bg-gray-700 hover:shadow-[0_0_0px_12px_rgba(55,65,81,1)] transition-all"
        >
          {" "}
          <Share />
          {isHover === "Share" && (
            <motion.div
              initial={{ opacity: 0, y: "100%", x: "40%" }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bg-gray-800 px-3 py-1.5 rounded-md translate-x-1/4 right-0 -top-[4.1rem]"
            >
              Share
            </motion.div>
          )}
        </div>
        <div
          onMouseEnter={() => setIsHover("Menu")}
          onMouseLeave={() => setIsHover(null)}
          className="relative rounded-full bg-transparent hover:bg-gray-700 hover:shadow-[0_0_0px_12px_rgba(55,65,81,1)] transition-all"
        >
          {" "}
          <Menu />
          <div className="absolute -top-0.5 -right-1 size-3 bg-blue-500 rounded-full border-2 border-gray-800" />
          {isHover === "Menu" && (
            <motion.div
              initial={{ opacity: 0, y: "100%", x: "40%" }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bg-gray-800 px-3 py-1.5 rounded-md translate-x-1/4 right-0 -top-[4.1rem]"
            >
              Menu
            </motion.div>
          )}
        </div>
      </aside>
    </section>
  );
};
export default ToolbarHover;

interface Props {
  title: string;
  color: string;
  style?: string;
  isHover: string | null;
}
interface Props {
    title: string;
    color: string;
    style?: string;
    isHover: string | null;
  }
  
  function Card({ title, color, style, isHover }: Props) {
    const cardClass = `${style} w-fit rounded-md absolute ${
      isHover !== null && title !== isHover ? "grayscale blur-sm" : ""
    }`;
  
    return (
      <div className={cardClass} style={{ background: color }}>
        <p className="font-bold py-1 px-2 text-base">{title}</p>
      </div>
    );
  }
  
