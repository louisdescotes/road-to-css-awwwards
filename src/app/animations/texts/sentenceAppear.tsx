import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';

type LineWrapperProps = {
    text: string;
    fontSize?: number;
    className?: string;
};

export default function SentenceAppear({ text, fontSize, className }: LineWrapperProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [lines, setLines] = useState<string[]>([]);


  useEffect(() => {
    if (!containerRef.current) return;

    const words = text.split(" ");

    const tempContainer = document.createElement("div");
    Object.assign(tempContainer.style, {
      position: "absolute",
      visibility: "hidden",
      width: getComputedStyle(containerRef.current).width,
      whiteSpace: "normal",
      fontSize: fontSize
    });
    document.body.appendChild(tempContainer);

    const detectedLines: string[] = [];
    let currentLine = "";
    let currentHeight = 0;

    words.forEach((word, index) => {
      const testLine = currentLine ? `${currentLine} ${word}` : word;
      tempContainer.innerText = testLine;

      if (tempContainer.offsetHeight > currentHeight) {
        if (currentLine) detectedLines.push(currentLine);
        currentLine = word;
        currentHeight = tempContainer.offsetHeight;
      } else {
        currentLine = testLine;
      }

      if (index === words.length - 1) {
        detectedLines.push(currentLine);
      }
    });

    document.body.removeChild(tempContainer);
    setLines(detectedLines);
  }, [text]);



    return (
        <div className="max-w-lg w-full">
        {/* APPARITION PLUS LENTE */}
         {/* <motion.div initial="initial"
            whileInView="hovered"
            viewport={{ once: true }} ref={containerRef} className={className}>
            {lines.map((line, index) => (
                <span
                key={index} className="line block relative h-6 overflow-hidden font-semibold text-xl">
                        <motion.p variants={{
                            initial: { top: "120%", },
                            hovered: { top: "0" },
                        }}
                        transition={{
                            duration: 1.5,
                            ease: [0.76, 0, 0.24, 1],
                            delay: index * .05,
                        }} className="absolute"> {line}</motion.p>
                </span>
            ))}
        </motion.div> */}

         <motion.div initial="initial"
            whileInView="hovered"
            viewport={{ once: true }} ref={containerRef} className={`${className} h-full `}>
            {lines.map((line, index) => (
                <span
                key={index} className="line block h-7 relative overflow-hidden font-semibold" style={{ fontSize: fontSize}}>
                        <motion.p variants={{
                            initial: { top: "120%",  },
                            hovered: { top: "0", },
                        }}
                        transition={{
                            duration: 1.4,
                            ease: [0.16, 1, 0.3, 1],
                            delay: index * .04,
                        }} className="inline-block relative"> {line}</motion.p>
                </span>
            ))}
        </motion.div>
            </div>
    );
}
