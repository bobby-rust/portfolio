import { GraduationCap, Star } from "lucide-react";
import Tag from "./tag";

const COURSES = [
    "Data Structures & Algorithms",
    "Discrete Math",
    "Calculus",
    "Linear Algebra",
    "Computational Graphics and Visualization",
    "Client/Server Development",
    "Software Test, Automation QA",
    "Software Security",
    "UI/UX Design and Development",
    "System Analysis and Design",
    "Structured Database Environments",
];

export default function EducationCard() {
    return (
        <div className="relative rounded-xl shadow-xl border-gray-400 p-5 w-72 xs:w-96 lg:w-auto max-w-2xl">
            <h3 className="flex items-center gap-2">
                <GraduationCap size={30} /> Education
            </h3>
            {/* Card Body */}
            <div className="p-2 flex flex-col gap-4">
                <div>
                    <h4 className="font-medium">
                        Bachelor of Science in Computer Science, Southern New
                        Hampshire University
                    </h4>
                    <p className="text-gray-600">January 2022 - January 2026</p>
                </div>
                <p className="flex gap-2">
                    <span className="font-medium">GPA - 3.96 </span>
                    <span className="flex">
                        <Star fill="yellow" color="yellow" />
                        <Star fill="yellow" color="yellow" />
                        <Star fill="yellow" color="yellow" />
                        <Star fill="yellow" color="yellow" />
                    </span>
                </p>
                <h4 className="font-semibold">Completed Courses</h4>
                <div className="flex gap-2 flex-wrap">
                    {COURSES.map((course, i) => {
                        return <Tag key={i} tag={course} />;
                    })}
                </div>
            </div>
        </div>
    );
}
