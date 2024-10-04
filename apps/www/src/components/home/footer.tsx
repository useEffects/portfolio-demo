"use client"

import { CatppuccinContext } from "@/context/catppuccin"
import { useContext } from "react"

const footerItems = [
    {
        label: "Theme",
        value: "Catppuccin",
    },
    {
        label: "Kitty Chatbot",
        value: "AIML (Artificial Intelligence Markup Language)"
    }, {
        label: "Guestwall",
        value: "GitHub Issues section"
    }
]

export const Footer = () => {
    const colors = useContext(CatppuccinContext);
    const colorStops = [
        { color: colors.red, stop: 0 },
        { color: colors.peach, stop: 100 / 7 },
        { color: colors.yellow, stop: (100 / 7) * 2 },
        { color: colors.green, stop: (100 / 7) * 3 },
        { color: colors.blue, stop: (100 / 7) * 4 },
        { color: colors.mauve, stop: (100 / 7) * 5 },
        { color: colors.lavender, stop: (100 / 7) * 6 },
    ];
    const gradient = colorStops.map(({ color, stop }) => `${color} ${stop}%`).join(', ');

    return <div className="flex flex-col gap-4 py-12">
        <p> Made with great <del className="text-red"> love</del> <span className="text-blue"> pain </span> by myself</p>
        {/* <div className="flex flex-col gap-2">
            {footerItems.map((item, i) => <div key={i} className="flex gap-2">
                <p className="text-sm text-subtext0 w-24"> {item.label} </p>
                <p className="text-sm text-subtext0"> {item.value} </p>
            </div>)}
        </div> */}
    </div>
};