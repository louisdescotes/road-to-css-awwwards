import Image from "next/image"

export default function LaboLayout({
    children
}:Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <section className="h-screen w-full bg-[url('/bg.png')] bg-center bg-cover text-white">
            <div className="fixed w-full flex items-center justify-center pt-4">
                <p className="apoc font-bold text-xl">Nav Animation</p>
            </div>
            <div className="fixed bottom-0 w-full flex items-center justify-center pb-4">
                <p className="apoc font-bold text-base">@ldescotes1 - Inspiration @ln_dev7</p>
            </div>
            <div className="absolute flex items-center justify-center w-full h-full select-none">
                <Image draggable={false} src="/logo.svg" height={500} width={500} alt="logo" className="fixed mix-blend-difference opacity-10"/>
            </div>
            {children}
        </section>
    )
}