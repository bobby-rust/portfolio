import Link from "next/link";
import { Project } from "./projects";

export default function ProjectCard({ title, url, description }: Project) {
    return (
        <div className="p-5 border-slate-500 border-2 rounded-lg">
            <h3>
                <Link
                    href={url}
                    rel="noreferrer"
                    target="_blank"
                    className="hover:cursor-pointer hover:underline"
                >
                    {title}
                </Link>
            </h3>
            <p>{description}</p>
        </div>
    );
}
