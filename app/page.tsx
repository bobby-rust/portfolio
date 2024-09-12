import Card from "./components/Card";
import { BackgroundBoxesHero } from "./components/BackgroundBoxesHero";
import { BackgroundBeamsHero } from "./components/navbar/BackgroundBeamsHero";
import { FeaturesGrid } from "./components/features/FeaturesGrid";

export default function Home() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <main className="w-full flex flex-col justify-center items-center">
                <BackgroundBoxesHero />

                {/* <BackgroundBeamsHero /> */}
                {/* <Card /> */}
                <FeaturesGrid />
            </main>
        </div>
    );
}
