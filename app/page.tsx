import Hero from "./components/hero";
import FeaturesGrid from "./components/features/features-grid";
import Navbar from "./components/navbar/navbar";
import HowICanHelp from "./components/services/how-i-can-help";
// import Projects from "./components/projects/projects";
import MyWork from "./components/my-work/my-work";
import Image from "next/image";

export default function Home() {
    return (
        <div className="w-full flex flex-col justify-center items-center">
            <Navbar />
            <main className="w-full flex flex-col gap-48 justify-center items-center lg:p-20">
                <div className="flex justify-center items-center w-3/4 relative">
                    <Image
                        src="/blob1.svg"
                        alt="blob 1"
                        width={100}
                        height={100}
                        className="absolute top-0 left-[-10%] z-0"
                    />
                    <Image
                        src="/blob2.svg"
                        alt="blob 1"
                        width={100}
                        height={100}
                        className="absolute top-0 right-0 z-0"
                    />
                    <Image
                        src="/blob3.svg"
                        alt="blob 1"
                        width={100}
                        height={100}
                        className="absolute bottom-0 right-0 z-0"
                    />
                    <Image
                        src="/blob4.svg"
                        alt="blob 1"
                        width={100}
                        height={100}
                        className="absolute bottom-0 left-0 z-0"
                    />

                    <Hero />
                </div>
                <div className="bg-multi-wave bg-cover flex justify-center items-center w-screen">
                    <HowICanHelp />
                </div>
                <MyWork />
                <FeaturesGrid />
                {/* <Projects /> */}

                {/* - I have an associate's degree in computer science and in my senior year of completing my bachelor's of science in computer
                 *    Science, I have 4 years experience building projects both in school and personal projects.
                 * - include testimonials from eldenforge, QueueSocial design.
                 * - Rock-solid fundamentals with a dash of unique creativity to make your site stand out.
                 * - Results oriented. SEO brings your page to the top of Google Search to get your business in the eyes
                 *   of more clients than ever.
                 * -
                 */}
            </main>
        </div>
    );
}
