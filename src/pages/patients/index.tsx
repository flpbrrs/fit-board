import Page from "../components/layout";
import UserResume from "../components/UserResume";
import { User } from "@/types/User";

export default function Patient() {
    const user: User = {
        name: "Felipe Jonathan",
        height: 173,
        weight: 88
    }

    return (
        <Page>
            <div className="
                grid grid-cols-1 gap-2
                sm:grid-cols-2 sm:grid-rows-[reapeat(6, auto)] sm:gap-3
                lg:grid-cols-12 lg:grid-rows-[repeat(4, auto)] lg:gap-4
            ">
                <div className="card sm:col-span-2 lg:col-span-12">
                    <UserResume user={user}/>
                </div>
                <div className="card lg:col-span-3">
                    <div>Graf. Peso ao longo do tempo</div>
                </div>
                <div className="card lg:col-span-3">
                    <div>Graf. Composição corporal</div>
                </div>
                <div className="card lg:col-span-3">
                    <div>Graf. Macronutrientes</div>
                </div>
                <div className="card lg:col-span-3">
                    <div>Graf. Consumo de água</div>
                </div>
                <div className="card sm:col-span-2 lg:col-span-4">
                    <div>Objetivos e metas</div>
                </div>
                <div className="card lg:col-span-4">
                    <div>Recomendações de atv. físicas</div>
                </div>
                <div className="card lg:col-span-4">
                    <div>Próximas consultas</div>
                </div>
                <div className="card sm:col-span-2 lg:col-span-12">
                    <div style={{ height: '800px'}}>Tabela dieta</div>
                </div>
            </div>
        </Page>
    )
}