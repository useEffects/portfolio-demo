"use client"

import "@wethegit/react-autoplay-video/style.css"
import { AutoplayVideo } from "@wethegit/react-autoplay-video"

export default function A2APointVideo() {
    return <AutoplayVideo
        src="https://a2apoint-misc.nyc3.digitaloceanspaces.com/app/Finalized_Out.mp4"
        className="w-full object-contain"
    />
}