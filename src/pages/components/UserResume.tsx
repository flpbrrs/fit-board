import { User } from "@/types/User"
import Image from "next/image";

interface UserResumeProps {
    user: User
}

export default function UserResume(props: UserResumeProps) {
    let currentDate = new Date();
    return (
        <div className="flex justify-center items-center gap-4 overflow-hidden">
            <div className="
                w-16 h-16 bg-green-500 rounded-full
                text-4xl text-white
                flex justify-center items-center
                shadow-sm
                lg:h-20 lg:w-20
            ">
                {props.user.name.toUpperCase().charAt(0)}
            </div>
            <div className="flex-1">
                <p className="
                    text-zinc-500 text-xs
                    sm:text-base
                    lg:text-lg
                ">{`
                    ${currentDate.toLocaleDateString('pt-BR', { weekday: 'long'})},
                    ${currentDate.toLocaleDateString()}
                `}</p>
                <p className="
                    text-md mb-2 font-bold
                    sm:text-lg sm:mb-0
                    lg:text-xl
                ">
                    {`Olá, ${props.user.name}!`}
                </p>
                <p className="
                    text-zinc-600 text-xs flex gap-2 flex-wrap justify-items-center
                    sm:text-base
                    lg:text-lg
                ">
                    <span>
                        <strong>Peso:</strong> {props.user.weight} kg
                    </span>

                    <span>
                        <strong>Altura:</strong> {props.user.height} cm
                    </span>

                    <span>
                        <strong>IMC:</strong> {props.user.weight}
                    </span>
                </p>
            </div>
            <Image
                priority
                className="hidden md:inline-block md:self-start"
                src="/pt.svg"
                width={120}
                height={120}
                alt="Picture of the author"
            />
        </div>
    )
}