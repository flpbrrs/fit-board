import { ReactNode } from "react"

import Header from "./Header";

interface PageProps {
    children?: ReactNode;
}

export default function Page(props: PageProps) {
    return (
        <main className={`
            flex flex-col gap-2 p-2 
            sm:gap-3 sm:p-3
            lg:flex-row lg:gap-4 lg:p-4 lg:h-screen
        `}>
            <Header />
            <div className="w-full overflow-auto no-scrollbar">
                {props.children}
            </div>
        </main>
    )
}