import Link from "next/link";
import { Project } from "./projects";
import Image from "next/image";

export default function ProjectCard({
    title,
    url,
    description,
    images,
    date,
}: Project) {
    return (
        <div className="p-5 border-slate-500 border-2 rounded-lg">
            <div className="flex justify-between w-full">
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
                <p className="text-gray">{date}</p>
            </div>
            <p className="text-gray">{description}</p>
            <Image
                src={images[0]}
                width={1280}
                height={720}
                alt={`${title} page`}
            />
        </div>
    );
}
