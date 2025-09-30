"use client"

import { motion } from 'framer-motion';
import { useState } from "react"
import Share from "../animations/card/share"
import ImagesReveal from "../animations/images/ImagesReveal"
import ToolbarHover from "../animations/nav/ToolbarHover"
import SentenceAppear from "../animations/texts/sentenceAppear"
import TextAppear from "../animations/texts/textAppear"
import ViewApparitionSentence from "../animations/texts/viewApparitionSentence"

const Labo = () => {
    const [useImage, setUseImage] = useState("8.jpg")
    const [hovered, setHovered] = useState(false);

    return (
        <section className="w-full h-full z-50">
            <div className="flex flex-col lg:flex-row items-end w-full h-screen ">
                <section className="flex-col lg:flex-row px-5 py-5 w-full h-full flex gap-4 md:gap-8 lg:gap-24 items-start lg:items-center md:justify-between">
                    <aside className="flex flex-col gap-1 w-full md:max-w-sm">
                        <SentenceAppear fontSize={18} text="Léanne" className="w-full" />
                        <SentenceAppear fontSize={12} text="Ce projet est une séance photo dédiée à Léanne, visant à capturer son authenticité, ses émotions et son univers personnel à travers des portraits modernes et expressifs. L’objectif est de créer une série d’images qui mêlent naturel et créativité, en jouant avec la lumière, les couleurs et les mises en scène pour raconter une histoire visuelle." className="w-full" />
                    </aside>
                    <div className="w-full lg:flex-1 lg:min-w-[42rem]">
                        <ImagesReveal key={useImage} image={useImage} />
                    </div>
                    <div className="grid grid-cols-4 lg:flex lg:items-center lg:flex-wrap w-full gap-2 lg:max-w-sm">
                        <div className="lg:max-w-20 w-full h-auto cursor-pointer" onMouseEnter={() => setUseImage("2.jpg")} onClick={() => setUseImage("2.jpg")}>
                            <ImagesReveal image="2.jpg" />
                        </div>
                        <div className="lg:max-w-20 w-full h-auto cursor-pointer" onMouseEnter={() => setUseImage("3.jpg")} onClick={() => setUseImage("3.jpg")}>
                            <ImagesReveal image="3.jpg" />
                        </div>
                        <div className="lg:max-w-20 w-full h-auto cursor-pointer" onMouseEnter={() => setUseImage("4.jpg")} onClick={() => setUseImage("4.jpg")}>
                            <ImagesReveal image="4.jpg" />
                        </div>

                        <div className="lg:max-w-20 w-full h-auto cursor-pointer" onMouseEnter={() => setUseImage("5.jpg")} onClick={() => setUseImage("5.jpg")}>
                            <ImagesReveal image="5.jpg" />
                        </div>
                        <div className="lg:max-w-20 w-full h-auto cursor-pointer" onMouseEnter={() => setUseImage("6.jpg")} onClick={() => setUseImage("6.jpg")}>
                            <ImagesReveal image="6.jpg" />
                        </div>
                        <div className="lg:max-w-20 w-full h-auto cursor-pointer" onMouseEnter={() => setUseImage("7.jpg")} onClick={() => setUseImage("7.jpg")}>
                            <ImagesReveal image="7.jpg" />
                        </div>

                        <div className="lg:max-w-20 w-full h-auto cursor-pointer" onMouseEnter={() => setUseImage("14.jpg")} onClick={() => setUseImage("14.jpg")}>
                            <ImagesReveal image="14.jpg" />
                        </div>
                        <div className="lg:max-w-20 w-full h-auto cursor-pointer" onMouseEnter={() => setUseImage("10.jpg")} onClick={() => setUseImage("10.jpg")}>
                            <ImagesReveal image="10.jpg" />
                        </div>
                        <div className="lg:max-w-20 w-full h-auto cursor-pointer" onMouseEnter={() => setUseImage("9.jpg")} onClick={() => setUseImage("9.jpg")}>
                            <ImagesReveal image="9.jpg" />

                        </div>

                        <div className="lg:max-w-20 w-full h-auto cursor-pointer" onMouseEnter={() => setUseImage("15.jpg")} onClick={() => setUseImage("15.jpg")}>
                            <ImagesReveal image="15.jpg" />
                        </div>
                        <div className="lg:max-w-20 w-full h-auto cursor-pointer" onMouseEnter={() => setUseImage("8.jpg")} onClick={() => setUseImage("8.jpg")}>
                            <ImagesReveal image="8.jpg" />
                        </div>
                    </div>
                    <div className="relative lg:absolute flex justify-center w-full h-fit bottom-8 left-0">
                        <motion.div
                            className="absolute inline-flex justify-center w-32"
                            initial="initial"
                            animate={hovered ? "hovered" : "initial"}
                        >
                            <motion.img
                                variants={{
                                    initial: { opacity: 0, y: 10, scale: .8 },
                                    hovered: { opacity: 1, y: 0, scale: 1 },
                                }}
                                transition={{
                                    duration: .4, ease: [0.76, 0, 0.24, 1],
                                }}
                                className="absolute w-20 h-auto mx-auto z-30"
                                src="/16.jpg"
                                alt=""
                            />
                            <motion.img
                                variants={{
                                    initial: { opacity: 0, y: 0, scale: .8 },
                                    hovered: { opacity: 1, y: -16, x: 32, rotate: 6, scale: 1 },
                                }}
                                transition={{
                                                                        duration: .4, ease: [0.76, 0, 0.24, 1],

                                }}
                                className="absolute w-20 h-auto z-20"
                                src="/17.jpg"
                                alt=""
                            />
                            <motion.img
                                variants={{
                                    initial: { opacity: 0, y: 0, scale: .8 },
                                    hovered: { opacity: 1, y: -24, x: -32, rotate: -6, scale: 1 },
                                }}
                                transition={{
                                                                        duration: .4, ease: [0.76, 0, 0.24, 1],

                                }}
                                className="absolute w-20 h-auto z-10"
                                src="/18.jpg"
                                alt=""
                            />
                        </motion.div>

                        <motion.p
                            className="next relative block overflow-hidden cursor-pointer pt-14"
                            onMouseEnter={() => setHovered(true)}
                            onMouseLeave={() => setHovered(false)}
                        >
                            Suivant
                        </motion.p>
                    </div>
                </section>
            </div>
            <div className="flex items-end w-full h-screen px-5 py-5">
                <div className="flex items-start gap-10 w-full max-w-[750px]">
                    <ImagesReveal image="bidibou.jpg" />
                    <SentenceAppear fontSize={18} text="Passionnée par l’art de raconter des histoires, je transforme chaque instant en image captivante. Spécialiste du montage vidéo et photo, elle capture, sublime et assemble les moments avec sensibilité et créativité. Que ce soit derrière la caméra ou devant son écran, elle donne vie à chaque projet avec précision et passion, pour que chaque image parle d’elle-même" className="w-full" />
                </div>
            </div>
        </section>

    )
}
export default Labo