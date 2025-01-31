"use client"

import TextAppear from "../animations/texts/textAppear"
import ViewApparitionSentence from "../animations/texts/viewApparitionSentence"

const Labo = () => {
    return (
        <section className="w-full h-full flex items-center justify-center z-50">
            <div className="w-fit flex justify-center items-center flex-col gap-4">
                <ViewApparitionSentence delay={0} style="text-5xl">Ceci est un bouton</ViewApparitionSentence>
                <TextAppear style="flex items-center justify-center px-8 py-2 rounded-md border " link="/">Button</TextAppear>
            </div>
        </section>
       
    )
}
export default Labo