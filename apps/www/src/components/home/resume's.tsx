import { faDownload } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Button } from "@mui/material"

const resumes = [
    {
        label: "AI / DL",
        href: ""
    },
    {
        label: "FullStack",
        href: ""
    },
    {
        label: "Software",
        href: ""
    },
    {
        label: "Devops and IT",
        href: ""
    },
    {
        label: "Flutter",
        href: ""
    },
]


export const ResumeButtons = () => {
    return <div className="flex flex-wrap gap-2">
        {resumes.map((resume, i) => <a href={resume.href} key={i} className="text-primary no-underline">
            <Button variant="outlined" className="rounded-full flex gap-4">
                <span> {resume.label} </span>
                <FontAwesomeIcon className="text-primary w-4 h-4" icon={faDownload} />
            </Button>
        </a>)}
    </div>
}