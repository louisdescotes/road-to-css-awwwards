"use client"

import Share from "../animations/card/share"
import ToolbarHover from "../animations/nav/ToolbarHover"
import SentenceAppear from "../animations/texts/sentenceAppear"
import SentenceAppearWhite from "../animations/texts/sentenceAppearWhite"
import TextAppear from "../animations/texts/textAppear"
import ViewApparitionSentence from "../animations/texts/viewApparitionSentence"

const Labo = () => {
    return (
        <section className="w-full h-full flex items-center justify-center z-50">
            <div className=" flex justify-center items-center flex-col gap-4 z-50 flex-1 max-w-lg">
                <SentenceAppear fontSize={18} text="Dans un petit village niché au cœur des montagnes, où les rivières scintillaient sous le soleil et les oiseaux chantaient des mélodies enchanteresses, les habitants, unis par des traditions séculaires, se rassemblaient chaque année pour célébrer la fête de la moisson" className="w-full" />
            </div>
        </section>

    )
}
export default Labo