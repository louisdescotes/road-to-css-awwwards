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
                <SentenceAppear fontSize={18} text="Je suis la phrase numéro une, je suis la phrase numéro deux, je suis la phrase numéro trois, je suis la dernière phrase" className="w-full" />
            </div>
        </section>

    )
}
export default Labo