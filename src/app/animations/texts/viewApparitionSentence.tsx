import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  style ?: string;
  delay: number;
  children: ReactNode
}

const ViewApparitionSentence = ({ style, delay, children }: Props) => {
  const DURATION = 1;
  const STAGGER = 0.01;

  return (
    <motion.p
      initial="initial"
      whileInView="hovered"
      viewport={{ once: true }}
      transition={{ delay: delay }}
      className={`${style} relative block overflow-hidden whitespace-wrap leading-0.5`}
    >
        {typeof children === "string" && children.split(/(\s+)/).map((l, i) => {
          return l.trim() === "" ? (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <span key={i}>&nbsp;</span>
          ) : (
            <motion.span
              variants={{
                initial: { opacity:0, y: "100%" },
                hovered: { opacity:1, y: 0 },
              }}
              transition={{
                duration: DURATION,
                ease: [0.76, 0, 0.24, 1],
                delay: STAGGER * i + delay,
              }}
              className="inline-block "
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={i}
            >
              {l}
            </motion.span>
          );
        })}
    </motion.p>
  );
};
export default ViewApparitionSentence;
