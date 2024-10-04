import { IconButton } from "@mui/material"
import { FastRewind, FastForward } from "@mui/icons-material"
import dinoImg from "@/assets/dino.png"

export const webrings = [
    {
        logo: dinoImg.src,
        slug: "https://example.com",
        label: 'Dino webring',
        href: "https://example.com"
    }
]

const Webring = ({ logo, slug, label, href }: { logo: string, slug: string, label: string, href: string }) => {
    return <div className="flex gap-1 items-center">
        <IconButton size="small" href={`${slug}/back`} role="link">
            <FastRewind />
        </IconButton>
        <img src={logo} alt={logo} className="w-6 h-6 rounded-full" />
        <IconButton size="small" href={`${slug}/next`} role="link">
            <FastForward />
        </IconButton>
        <a href={href} target="_blank" className="text-sm no-underline">{label}</a>
    </div>
}

export const Webrings = () => <div className="flex flex-col gap-2">
    {webrings.map((webring, i) => <Webring key={i} {...webring} />)}
</div>