import { Code, Binary } from "lucide-react";
import Tag from "./tag";

const SKILLS = [
    "JavaScript",
    "HTML",
    "CSS",
    "TypeScript",
    "React",
    "NextJS",
    "TailwindCSS",
    "Golang",
    "Java",
    "Express",
    "MongoDB",
    "PostgreSQL",
    "Shopify",
    "Wordpress",
    "WooCommerce",
];

export default function SkillsCard() {
    return (
        <div className="border-2 rounded-xl shadow-xl border-gray-400 p-5 w-72 xs:w-96 lg:w-1/2 max-w-lg">
            <h3 className="flex items-center gap-2">
                <Code size={30} /> Skills
            </h3>
            <div className="p-2 flex flex-col gap-4">
                <p className="">
                    I&apos;m a <b>full-stack developer</b> and{" "}
                    <b>software engineer</b> passionate about solving tech
                    challenges and building <b>custom websites.</b> With
                    expertise in React, Next.js, TypeScript, and more, I turn
                    ideas into <b>seamless digital experiences.</b>
                    Whether it&apos;s creating a new website or providing{" "}
                    <b>tech support</b>, I&apos;m here to help you succeed.
                </p>
                <h3 className="flex items-center gap-2">
                    <Binary size={30} /> Technologies
                </h3>
                <div className="flex gap-2 flex-wrap">
                    {SKILLS.map((skill, i) => {
                        return <Tag key={i} tag={skill} />;
                    })}
                </div>
            </div>
        </div>
    );
}
