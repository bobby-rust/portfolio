import { BackgroundBoxesHero } from "./components/BackgroundBoxesHero";
import { FeaturesGrid } from "./components/features/FeaturesGrid";

export default function Home() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <main className="w-full flex flex-col justify-center items-center">
                <BackgroundBoxesHero />
                <FeaturesGrid />
            </main>
        </div>
    );
}
