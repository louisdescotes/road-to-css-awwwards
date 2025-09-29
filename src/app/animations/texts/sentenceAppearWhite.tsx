import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';

type LineWrapperProps = {
    text: string;
    className?: string;
};

export default function SentenceAppearWhite({ text, className }: LineWrapperProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [lines, setLines] = useState<string[]>([]);

    useEffect(() => {
        if (!containerRef.current) return;

        const words = text.split(" ");
        const tempContainer = document.createElement("div");

        tempContainer.style.position = "absolute";
        tempContainer.style.visibility = "hidden";
        tempContainer.style.width = getComputedStyle(containerRef.current).width;
        tempContainer.style.font = getComputedStyle(containerRef.current).font;
        document.body.appendChild(tempContainer);

        let currentLine = "";
        let currentHeight = 0;
        const detectedLines: string[] = [];

        words.forEach((word, index) => {
            const testLine = currentLine ? `${currentLine} ${word}` : word;
            tempContainer.innerText = testLine;

            if (currentHeight === 0) currentHeight = tempContainer.offsetHeight;

            if (tempContainer.offsetHeight > currentHeight) {
                detectedLines.push(currentLine);
                currentLine = word;
                tempContainer.innerText = currentLine;
                currentHeight = tempContainer.offsetHeight;
            } else {
                currentLine = testLine;
            }

            if (index === words.length - 1) detectedLines.push(currentLine);
        });

        document.body.removeChild(tempContainer);
        setLines(detectedLines);
    }, [text]);

    return (
        <motion.div initial="initial"
            whileInView="hovered"
            viewport={{ once: true }} ref={containerRef} className={className}>
            {lines.map((line, index) => (
                <div
                    key={index} className="line block relative overflow-hidden">
                    {line}
                    <motion.div variants={{
                        initial: {  top: 0 },
                        hovered: {  top: "100%"},
                    }}
                        transition={{
                            duration: 1.2,
                            ease: [0.16, 1, 0.3, 1],
                            delay: index * .04,
                        }} className="absolute left-0 top-0 w-full h-full bg-white" />
                </div>
            ))}
        </motion.div>
    );
}
