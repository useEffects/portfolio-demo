"use client"

import { Button, Container } from "@mui/material"
import DarkModeSwitcher from "./darkmodeSwitch"
import Link from "next/link"
import { RainbowGradient } from "./rainbow-gradient"
import { usePathname } from "next/navigation"

const navItems = [
    {
        label: "home",
        href: "/"
    },
    {
        label: "projects",
        href: "/projects"
    },
    {
        label: "research",
        href: "/research"
    },
    {
        label: "blogs",
        href: "/blogs"
    },
    {
        label: "visitorlog",
        href: "/visitorlog"
    },
]

export const Navbar = () => {
    const pathname = usePathname()

    return <div className="py-4 flex flex-col gap-4 w-full">
        <Container className="w-full flex flex-col gap-4 md:flex-row-reverse md:justify-between md:items-center">
            <div className="flex gap-4 items-center">
                {navItems.filter(({ href }) => href !== pathname).map(({ label, href }, i) => <Button key={i} href={href} LinkComponent={Link}>
                    {label}
                </Button>)}
            </div>
            <DarkModeSwitcher />
        </Container>
        <RainbowGradient className="w-full h-[1px] rounded-full" />
    </div>
}