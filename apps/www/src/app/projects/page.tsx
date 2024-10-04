import { Button, Container } from "@mui/material"
import { cn } from "cn-func"
import Image from "next/image"
import goImage from "@/assets/go-svgrepo-com.svg"
import gopherImage from "@/assets/gopher.png"

import { getRandomColor } from "@/lib/helpers"

const ProjectCard = ({ project }: { project: Project }) => {
    return <div style={{ borderColor: `hsl(var(--twc-${getRandomColor()}))` }} className="w-full flex flex-row gap-4 bg-mantle hover:bg-base border border-solid rounded-3xl p-4 h-[475px]">
        <Image src={project.thumbNail} width={80} height={80} className={cn("object-cover", project.thumbNailClassName)} alt="" />
        <div className="flex-grow flex flex-col gap-4">
            <div className="w-full flex flex-col justify-center gap-2">
                <p className="text-xl font-bold">{project.title}</p>
                <p className="text-subtext0">{project.subTitle}</p>
                {project.github && <Button className="rounded-full self-start" href={project.github}>GitHub</Button>}
            </div>
            <div className="flex-grow flex flex-col gap-4 justify-between">
                <p className="">{project.description}</p>
                <div className="flex flex-col gap-4">
                    <div className="flex gap-4">
                        {project.icons.map((icon, i) => <Image style={{ borderColor: `hsl(var(--twc-${getRandomColor()}))` }}
                            key={i} src={icon} alt={icon} width={48} height={48} className={cn("p-2 rounded-full border border-solid bg-base")}
                        />)}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default function ProjectsPage() {
    return <Container className="flex flex-col gap-12 py-4">
        {sections.map((section, i) => <div key={i} className="flex flex-col gap-12 py-4">
            <div className="flex flex-col gap-4">
                <p className="text-3xl font-bold"> {section.title} </p>
                <p>{section.description}</p>
            </div>
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                {section.projects.map((project, j) => <ProjectCard key={j} project={project} />)}
            </div>
        </div>)}
    </Container>
}


const projects: Project[] = [
    {
        title: "DoeLang",
        subTitle: "Go implementation of a custom programming language",
        description: "Built from the concepts in the book 'Building Interpreters'.",
        demo: "",
        github: "https://github.com/johndoe/doelang",
        icons: [goImage],
        thumbNail: gopherImage.src,
        thumbNailClassName: "rounded-full"
    },
]

export type Project = {
    title: string,
    subTitle: string,
    description: string,
    github: string,
    demo: string,
    icons: any[]
    thumbNail: string,
    thumbNailClassName?: string
}

const sections = [
    {
        title: "Personal Projects",
        description: "Discover personal projects where I applied my skills.",
        projects: projects
    }
]
