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
		<div data-aos="fade-up" className="p-5 flex flex-col gap-5 border-slate-500 border-2 rounded-lg text-xs">
			<div className="flex flex-col sm:flex-row justify-between w-full">
				<div className="flex justify-between sm:justify-normal gap-2 w-full">
					<h3 className="text-base sm:text-lg">
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
						<span className="">
							<Link
								href={githubUrl}
								rel="noreferrer"
								target="_blank"
								className="cursor-pointer"
							>
								<Image
									src="/github.svg"
									width="30"
									height="30"
									alt="github logo"
								/>
							</Link>
						</span>
					)}
				</div>
				<p className="text-gray min-w-20">{date}</p>
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
