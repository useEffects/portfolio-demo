"use client"

import { CircularProgress, IconButton, Input } from "@mui/material"
import { useState, useEffect } from "react"
import { Kittysay } from "react-kittysay"
import SendIcon from '@mui/icons-material/Send';
import { aimlAPIUrl } from "@/lib/contants";
import chunk from "chunk-text"
import Typewriter from 'typewriter-effect';

export const KittyChat = () => {
    const [res, setRes] = useState("What does the kitty say?")
    const [text, setText] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch(aimlAPIUrl, {
            method: "POST", 
            body: JSON.stringify({ question: "ping" })
        })
    }, [])

    const handleSend = async () => {
        setLoading(true)
        if (loading || !text) return
        const { response } = await fetch(aimlAPIUrl, {
            method: "POST",
            body: JSON.stringify({ question: text }),
        }).then(res => res.json())
        setRes(chunk(response, 30).join("<br />"))
        setText("")
        setLoading(false)
    }

    return <div className="flex flex-col gap-4 w-full">
        <Kittysay
            asciiClassName="my-0 text-4xl -mt-20 text-primary font-light"
            textBubbleClassName="my-0 !font-mono text-center"
            containerClassName="flex flex-col items-end w-full"
            arrowClassName="my-0 text-xl" text={res}
            // textClassName="!font-mono text-center my-0"
            textComponent={() => <Typewriter options={{
                autoStart: true,
                strings: res,
                delay: 25, cursor: "",
                wrapperClassName: "!font-mono text-sm",
            }}
            />}
        />
        <div className="flex gap-2 items-center">
            <Input disabled={loading} size="small" className="text-sm" onKeyDown={(e) => e.code === "Enter" ? handleSend() : null} fullWidth placeholder="Chat with kitty!" value={text} onChange={(e) => setText(e.target.value)} />{
                loading ? <CircularProgress className="mx-2" /> :
                    <IconButton disabled={loading || !text} onClick={handleSend}>
                        <SendIcon />
                    </IconButton>
            }
        </div>
    </div>
}