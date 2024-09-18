import Hero from "./components/hero";
// import FeaturesGrid from "./components/features/FeaturesGrid";
import Navbar from "./components/navbar/navbar";
// import Projects from "./components/projects/Projects";

export default function Home() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Navbar />
            <main className="w-full flex flex-col justify-center items-center">
                <Hero />
                {/* <FeaturesGrid /> */}
                {/* <Projects /> */}
            </main>
        </div>
    );
}
