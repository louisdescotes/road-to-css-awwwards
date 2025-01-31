"use client"

import TextAppear from "./animations/texts/textAppear";

export default function Home() {
  return (
    <section className="h-screen w-full flex flex-col gap-8 items-center justify-center">
      <p className="text-5xl font-bold">ROAD TO CSS AWWWARDS</p>
      <TextAppear style="flex items-center justify-center px-8 py-2 rounded-md border " link="labo">Labo</TextAppear>
    </section>
  );
}
