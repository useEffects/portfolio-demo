"use client"

import { Button, Container, Divider, IconButton, Input, TextField, dividerClasses } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import GithubIcon from '@mui/icons-material/GitHub';
import { signIn, signOut, useSession } from "next-auth/react";
import { Session } from "inspector";
import { useState } from "react";
import { RestEndpointMethodTypes } from "@octokit/rest";

export type VisitorLogRes = RestEndpointMethodTypes["issues"]["listComments"]["response"]["data"]

export default function VistiorLog({ visitorLogs: initialVisitorLogs }: { visitorLogs: VisitorLogRes }) {
    const { data: session } = useSession() as { data: Session & { access_token: string, id: number, user: { name: string, image: string } } | null };
    const [visitorLogs, setVisitorLogs] = useState<VisitorLogRes>(initialVisitorLogs)
    const [message, setMessage] = useState("")

    const handleSend = async () => {
        if (!message) return
        const res = await fetch("/api/visitorlogs", {
            method: "POST",
            body: JSON.stringify({
                message: message,
                token: session?.access_token
            })
        }).then(res => res.json())
        setVisitorLogs([...visitorLogs, res])
        setMessage("")
    }

    return <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
            {session ? <div className="flex items-center gap-2">
                <img className="w-8 h-8 rounded-full" src={session.user.image} />
                <Button size="small" onClick={() => signOut()}>Sign Out</Button>
            </div> : <IconButton onClick={() => signIn("github")}>
                <GithubIcon />
            </IconButton>}
            <TextField onKeyDown={(e) => e.code === "Enter" ? handleSend() : null} value={message} onChange={e => setMessage(e.currentTarget.value)} className="flex-1" size="small" InputProps={{
                style: {
                    borderRadius: "9999px"
                }
            }} />
            <IconButton disabled={!Boolean(session)} onClick={handleSend}>
                <SendIcon />
            </IconButton>
        </div>
        <div className="mt-16 flex flex-col gap-4">
            {typeof visitorLogs.map === "function" && visitorLogs.map((item, i) => <div key={i} className="flex flex-col gap-2">
                <div className="flex gap-4 items-center">
                    <div className="flex items-center gap-2">
                        <img className="w-4 h-4 rounded-full" src={item.user?.avatar_url} alt="" />
                        <span className="text-subtext0 text-sm"> {item.user?.login}: </span>
                    </div>
                    <p className="text-sm"> {item.body} </p>
                </div>
                {i !== visitorLogs.length - 1 && <Divider />}
            </div>)}
        </div>
    </div>
}