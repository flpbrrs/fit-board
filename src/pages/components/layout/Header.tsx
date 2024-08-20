import { IconBarbell, IconMenu2 } from "@tabler/icons-react";

export default function Header() {
    return (
        <header className={`
            bg-white p-4 rounded-md shadow-lg
            flex items-center gap-2
            lg:flex-col
        `}>
            <i className={`lg:border-b-2 lg:border-gray-400 lg:pb-2`}>
                <IconBarbell size={32} stroke={1}/>
            </i>
            <p className="text-xl font-semibold lg:hidden">
                FitBoard
            </p>
        </header>
    )
}