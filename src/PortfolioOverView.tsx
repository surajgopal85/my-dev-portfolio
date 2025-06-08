import { WorkCard } from "./WorkCard"

export const PortfolioOverview: React.FC = () => {
    return (
        <div className="w-dvh flex justify-around">
            <WorkCard />
            <WorkCard />
            <WorkCard />
        </div>
    )
}