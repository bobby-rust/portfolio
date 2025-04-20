import Link from "next/link";
import { Project } from "./projects";
import Image from "next/image";
import Accordion from "../ui/accordion";

export default function ProjectCard({
    title,
    url,
    githubUrl,
    description,
    extendedDescription,
    images,
    date,
}: Project) {
    return (
        <div className="p-5 flex flex-col gap-5 border-slate-500 border-2 rounded-lg">
            <div className="flex justify-between w-full">
                <div className="flex justify-center items-center gap-5">
                    <h3>
                        {url ? (
                            <Link
                                href={url}
                                rel="noreferrer"
                                target="_blank"
                                className="hover:cursor-pointer hover:underline"
                            >
                                {title}
                            </Link>
                        ) : (
                            <span>{title}</span>
                        )}
                    </h3>
                    {githubUrl && (
                        <span>
                            <Link
                                href={githubUrl}
                                rel="noreferrer"
                                target="_blank"
                                className="cursor-pointer"
                            >
                                <Image
                                    src="/github.svg"
                                    width="40"
                                    height="40"
                                    alt="github logo"
                                />
                            </Link>
                        </span>
                    )}
                </div>
                <p className="text-gray">{date}</p>
            </div>
            <p className="text-gray">{description}</p>
            <Image
                src={images[0]}
                width={1280}
                height={720}
                alt={`${title} page`}
                className="w-full h-auto"
            />
            <div>
                {extendedDescription && (
                    <Accordion heading="Read More" text={extendedDescription} />
                )}
            </div>
        </div>
    );
}
