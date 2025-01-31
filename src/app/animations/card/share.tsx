"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Copy, Globe, Send, UserRoundPlus } from "lucide-react";
import { div } from "motion/react-client";
import Link from "next/link";
import { useState } from "react";

const Share = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="flex flex-col w-full  border p-4 rounded-xl flex-1 bg-gray-300 bg-opacity-40">
      <p className="text-3xl font-bold pb-2">Share</p>
      <aside className="flex gap-3 flex-col items-start justify-between bg-gray-300 w-full h-fit p-4 rounded-lg mb-4">
        <div className="flex justify-between gap-12 w-full ">
          <div className="flex h-full gap-3">
            <div className="bg-white w-fit h-full p-1.5 rounded-lg">
              <Globe size={20} color="#6b7280" />
            </div>
            <div className="flex flex-col ">
              <p className="text-lg font-bold leading-none text-gray-950">
                Anyone
              </p>
              <p className="text-sm leading-5 font-semibold text-gray-600">
                Everyone with link can access
              </p>
            </div>
          </div>
          <Switch open={open} setOpen={setOpen} />
        </div>
        <div className="relative flex items-center w-full">
          <input
            type="text"
            className="placeholder:text-gray-500 text-gray-500 border-gray-400 focus:outline-none focus:ring-0 w-full rounded-lg border bg-gray-100 pl-2 py-2"
            placeholder="Enter email to share"
          />
          <motion.div
          whileTap={{ scale: .8}}
          className="absolute right-1 cursor-pointer rounded-full p-1.5 hover:bg-gray-200 duration-100"
          >
            <Copy  size={20} color="#6b7280" />
          </motion.div>
        </div>
      </aside>
      <AnimatePresence>
        {open && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={{
              hidden: { opacity: 0, height: 0 },
              visible: {
                opacity: 1,
                height: "auto",
                transition: {
                  duration: 0.5,
                  ease: [0.76, 0, 0.24, 1],
                  staggerChildren: 0.1,
                },
              },
            }}
            className="relative flex flex-col gap-2 overflow-hidden "
          >
            <motion.p
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="text-2xl font-bold"
            >
              Invite
            </motion.p>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="relative flex items-center"
            >
              <input
                type="text"
                className="focus:outline-none focus:ring-0 w-full rounded-lg border bg-transparent pl-10 py-3.5"
                placeholder="Enter email to share"
              />
              <UserRoundPlus size={20} className="absolute left-3" />
              <Button />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
export default Share;

function Button() {
  return (
    <Link href="/" className="absolute right-1">
      <motion.div
        initial="default"
        whileHover="hover"
        className="relative flex items-center gap-2 bg-white text-black font-semibold py-2.5 px-5 rounded-lg"
      >
        Invite
        <div className="relative flex flex-col items-center overflow-hidden">
          <motion.div
            variants={{
              default: { x: 0, y: 0 },
              hover: { x: "100%", y: "-100%" },
            }}
            transition={{
                duration: .5,
                ease: [0.76, 0, 0.24, 1],
            }}
            className="relative"
          >
            <Send className="inline-block" size={20} />
          </motion.div>
          <motion.div
            className="absolute"
            initial={{ x: "-100%", y:"100%"}}
            variants={{
              hover: { x: 0, y: 0 },
            }}
            transition={{
                duration: .5,
                ease: [0.76, 0, 0.24, 1],
            }}
          >
            <Send className="inline-block" size={20} />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
}

interface Props {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function Switch({ open, setOpen }: Props) {
  return (
    // biome-ignore lint/a11y/useButtonType: <explanation>
    <button
      onClick={() => setOpen(!open)}
      role="switch"
      aria-checked={open}
      className={`relative flex items-center w-12 h-6 p-1 rounded-full transition-all duration-200
            ${open ? "bg-gray-950" : "bg-gray-400"}`}
    >
      <div
        className="bg-white rounded-full size-4 transition-transform duration-200"
        style={{ transform: `translateX(${open ? "150%" : "0"})` }}
      />
    </button>
  );
}
