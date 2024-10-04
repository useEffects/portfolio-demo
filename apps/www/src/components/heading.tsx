import { Divider } from "@mui/material"

export const Heading = ({ text }: { text: string }) => {
    return <div className="flex flex-col gap-4 py-4">
        <p className="text-subtext0"> {text} </p>
        <Divider />
    </div>
}