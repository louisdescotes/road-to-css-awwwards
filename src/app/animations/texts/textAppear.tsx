import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

const TextAppear = ({
    style,
    link,
    children,
}: {
    style ?: string;
    link: string;
    children: ReactNode;
}) => {
  const DURATION = 0.5;
  const STAGGER = 0.025;

  return (
    <motion.a
      href={link}
      initial="initial"
      whileHover="hovered"
      className={`${style} relative block overflow-hidden whitespace-nowrap leading-0.5`}
    >
      {typeof children === 'string' && children.split("").map((l: string, i: number) => (
        <motion.span
          variants={{
            initial: { y: 0 },
            hovered: { y: "-100%", opacity: 0 },
          }}
          transition={{
            duration: DURATION,
            ease: [0.76, 0, 0.24, 1],
            delay: STAGGER * i,
          }}
          className="inline-block"
          // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
          key={i}
        >
          {l}
        </motion.span>
      ))}
      <div className={`${style} absolute inset-0`}>
        {typeof children === 'string' && children.split("").map((l: string, i: number) => (
          <motion.span
            variants={{
              initial: {
                opacity: 0,
                y: "100%",
              },
              hovered: {
                opacity: 1,
                y: "0%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: [0.76, 0, 0.24, 1],
              delay: STAGGER * i,
            }}
            className="inline-block"
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default TextAppear;