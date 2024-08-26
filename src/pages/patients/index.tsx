import Page from "../components/layout";
import UserResume from "../components/UserResume";
import ChartTitle from "../components/charts/ChartTitle";
import WaterChart from "../components/charts/WaterResume";
import WeightChart from "../components/charts/WeightResume";

import { User } from "@/types/User";
import BodyCompositionChart from "../components/charts/BodyCompositionResume";
import MacronutrientChart from "../components/charts/MacroResume";

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
                <div className="card lg:col-span-6 xl:col-span-3">
                    <ChartTitle
                        title="Peso(Kg) x Tempo"
                        subtitle="Variação do peso ao longo dos meses"
                    />
                    <WeightChart />
                </div>
                <div className="card lg:col-span-6 xl:col-span-3">
                    <ChartTitle
                        title="Composição corporal (Kg)"
                        subtitle="Como está a disposição de gordura e musculos"
                    />
                    <BodyCompositionChart />
                </div>
                <div className="card lg:col-span-6 xl:col-span-3">
                    <ChartTitle
                        title="Macronutrientes"
                        subtitle="Distribuição de nutrientes na dieta"
                    />
                    <MacronutrientChart />
                </div>
                <div className="card lg:col-span-6 xl:col-span-3">
                    <ChartTitle
                        title="Consumo de água diário (L)"
                        subtitle="Acompanhamento da hidratação"
                    />
                    <WaterChart />
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