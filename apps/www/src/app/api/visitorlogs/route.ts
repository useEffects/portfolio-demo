import { owner, repo, visitorLogIssueNumber } from "@/lib/contants"
import { NextResponse } from "next/server"

export async function GET() {
    const token = process.env.GITHUB_PAT
    const data = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues/${visitorLogIssueNumber}/comments`, {
        headers: {
            "Authorization": `Bearer ${token}`
        }
    }).then(res => res.json())
    return NextResponse.json(data)
}

export async function POST(req: Request) {
    const { message, token } = await req.json()
    const res = await fetch(`https://api.github.com/repos/${owner}/${repo}/issues/${visitorLogIssueNumber}/comments`, {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
            body: message
        })
    }).then(res => res.json())
    return NextResponse.json(res)
}