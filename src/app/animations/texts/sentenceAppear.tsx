import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type SentenceAppearProps = {
  text: string;
  fontSize?: number;
  className?: string;
};

export default function SentenceAppear({ text, fontSize = 16, className }: SentenceAppearProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [lines, setLines] = useState<string[]>([]);

  const splitTextByLines = (container: HTMLElement, text: string) => {
    const range = document.createRange();
    const tempSpan = document.createElement("span");
    container.innerText = "";
    container.appendChild(tempSpan);

    const words = text.split(" ");
    const lines: string[] = [];
    let currentLine: string[] = [];

    words.forEach((word) => {
      tempSpan.innerText = currentLine.concat(word).join(" ");
      range.selectNodeContents(tempSpan);
      const rects = range.getClientRects();

      if (rects.length > 1) {
        lines.push(currentLine.join(" "));
        currentLine = [word];
      } else {
        currentLine.push(word);
      }
    });

    if (currentLine.length) lines.push(currentLine.join(" "));
    container.removeChild(tempSpan);
    return lines;
  };

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    container.style.fontSize = fontSize + "px";
    const newLines = splitTextByLines(container, text);
    setLines(newLines);
  }, [text, fontSize]);

  return (
    <motion.div
      ref={containerRef}
      className={className}
      initial="initial"
      whileInView="hovered"
      viewport={{ once: true }}
    >
      {lines.map((line, index) => (
        <span
          key={index}
          className="block relative overflow-hidden font-semibold"
          style={{
            fontSize: fontSize + "px",
            lineHeight: 1.2 * fontSize + "px",
            height: "1.2em",
          }}
        >
          <motion.p
            className="absolute"
            style={{ width: "100%" }}
            variants={{
              initial: { top: "220%", transform: "rotate(0deg)" },
              hovered: { top: "0%", transform: "rotate(0deg)" },
            }}
            transition={{
              duration: 1.4,
              ease: [0.16, 1, 0.3, 1],
              delay: index * 0.04,
            }}
          >
            {line}
          </motion.p>
        </span>
      ))}
    </motion.div>
  )
}