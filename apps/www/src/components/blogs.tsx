import UIComparisonImg from "@/assets/ui-comparison.png";
import { Button } from "@mui/material";
import Image from "next/image";

const blogs = [
    {
        title: "Building universal applications with Next.js and React Native",
        content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto ducimus ipsa, maiores quis vitae quia, laborum quae nostrum ea, omnis expedita iste natus corporis saepe doloribus fugit culpa sunt aspernatur! Optio nemo nulla nesciunt quibusdam laboriosam expedita numquam maiores vitae.",
        date: "Jul 2024",
        read: "10 min read",
        href: "https://example.com",
        cover: UIComparisonImg
    }
]

export const Blogs = () => {
    return <div className="grid grid-cols-2">
        {blogs.map((blog, i) => <div key={i} className="w-full h-full p-4 rounded-3xl bg-mantle flex flex-col gap-4">
            <Image src={blog.cover} alt={`cover for ${blog.title}`} className="w-full h-full" />
            <p className="text-primary text-lg">{blog.title}</p>
            <p className="text-subtext0">{blog.content}</p>
            <Button className="self-start rounded-full" href={blog.href}>Read now</Button>
        </div>)}
    </div>
}
