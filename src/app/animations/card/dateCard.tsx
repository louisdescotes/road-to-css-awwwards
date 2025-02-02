import { CirclePlus, X } from "lucide-react"
import { motion } from "motion/react"
import { useState } from "react"
interface Props {
    name: string;
}
const DateCard = ({ name } : Props) => {
    const [open, setOpen] = useState(false)

    return (
        <section className="flex flex-col gap-4 min-w-96 border bg-gray-800 border-gray-700 rounded-lg p-4">
            <div className="flex items-center justify-between min-h-12">
                <p className="text-xl font-bold">{name}</p>
                <Switch open={open} setOpen={setOpen} name={""}/>
            </div>
            <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                    <label className="font-bold " htmlFor="from">From</label>
                    <input className=" rounded-md bg-transparent border-gray-500 border pl-2 px-1 py-1" type="text" name="from" id="from" />
                </div>
                <div className="flex items-center gap-2">
                    <label className="font-bold " htmlFor="from">To</label>
                    <input className=" rounded-md bg-transparent border-gray-500 border pl-2 px-1 py-1" type="text" name="from" id="from" />
                </div>
                <div className="w-fit h-full p-0.5 rounded-md bg-gray-300 cursoir-pointer">
                    <X color="#1f2937" size={20}/>
                </div>
            </div>
            {open && (
                <aside className="bg-gray-300 hover:bg-gray-400 font-medium cursor-pointer flex gap-2 items-center justify-center text-gray-600 rounded-lg py-3">
                    <CirclePlus size={20}/>
                    Add More
                </aside>
            )}
        </section>
    )
}
export default DateCard
interface Props {
    open: boolean;
    setOpen: (open: boolean) => void;
}
function Switch({ open, setOpen} : Props) {
    return (
        // biome-ignore lint/a11y/useButtonType: <explanation>
        <button
            className={`${open ? "justify-end bg-gray-700" : "justify-start bg-gray-400"} w-[60px] h-[30px]  rounded-full px-1.5 flex items-center`}
            onClick={() => setOpen(!open)}
        >
            <motion.div
                className="w-6 h-6 bg-gray-100 rounded-full"
                layout
                transition={{
                    type: "spring",
                    visualDuration: 0.2,
                    bounce: 0.2,
                }}
            />
        </button>
    )
}

