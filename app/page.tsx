import { BackgroundBoxesHero } from "./components/BackgroundBoxesHero";
import { FeaturesGrid } from "./components/features/FeaturesGrid";
import Projects from "./components/projects/Projects";
import Typewriter from "./components/Typewriter";

export default function Home() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <main className="w-full flex flex-col justify-center items-center">
                <BackgroundBoxesHero />
                <FeaturesGrid />
                <Projects />
            </main>
        </div>
    );
}
