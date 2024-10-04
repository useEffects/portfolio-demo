import { Container } from "@mui/material";
import MessageWall from "../../components/visitorlog/message-wall";
import { owner, repo, visitorLogIssueNumber } from "@/lib/contants"

const token = process.env.GITHUB_PAT

export default async function VistiorLog() {
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues/${visitorLogIssueNumber}/comments`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then(res => res.json())

    return <Container className="flex-col flex gap-4">
        <p> Sign my visitorlog! </p>
        <MessageWall visitorLogs={res} />
    </Container>
}

export const revalidate = 60