import { useEffect, useRef, useState } from "react";
import { motion } from 'framer-motion';

type ImagesRevealProps = {
    image: string;
    className?: string;
};

export default function ImagesReveal({ image, className }: ImagesRevealProps) {

    return (
        <motion.div initial="initial"
            whileInView="hovered"
            viewport={{ once: true }} className={className}>
            <div
                className="block relative">
                <div
                    className="overflow-hidden">
                    <motion.img
                        variants={{
                            initial: { opacity: 0, scale: 1.6 },
                            hovered: { opacity: 1, scale: 1 },
                        }}
                        transition={{
                            opacity: { duration: 1, ease: [0.16, 1, 0.3, 1] },
                            scale: { delay: -.4, duration: 1.2, ease: [0.76, 0, 0.24, 1] }
                        }}
                        className="w-full h-auto object-cover" src={`/${image}`} alt="" />
                </div>
                <motion.div variants={{
                    initial: { left: 0 },
                    hovered: { left: "100%" },
                }}
                    transition={{
                        duration: .8,
                        ease: [0.76, 0, 0.24, 1],
                    }} className="hidden absolute left-0 top-0 w-full h-full bg-white" />
            </div>
        </motion.div>
    );
}
