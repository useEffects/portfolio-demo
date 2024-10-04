import { Button, Chip, Divider } from "@mui/material";

type Author = {
    name: string;
    blog: string;
    html_url: string;
    email: string | null;
    avatar_url: string;
    date: string;
}

type Committer = {
    name: string;
    avatar_url: string;
    committed_date: string;
}

type GithubData = {
    author: Author;
    committer: Committer;
}

export type Blog = {
    tags: string[];
    url: string;
    read: string;
    coverImage: string;
    title: string;
    githubData: GithubData;
    issueNumber: number;
    description: string;
    "reactions": {
        "total_count": number,
        "+1": number,
        "-1": number,
        "laugh": number,
        "hooray": number,
        "confused": number,
        "heart": number,
        "rocket": number,
        "eyes": number
    },
    "comments": number
}

export const blogUrl = "https://blogs.codingclubgct.in"

export default async function BlogsList() {
    // const { data } = await fetch(`${blogUrl}/api/?author=Aprilia`).then(res => res.json()) as { data: Blog[] }
    const data: Blog[] = []

    const blogs = data.slice(0, 2)

    return <div className="w-full flex gap-4">
        {blogs.map((blog, i) => <div key={i} className="p-4 bg-mantle md:w-1/2 flex md:flex-col gap-4 items-start rounded-2xl hover:bg-crust">
            <img src={blogUrl + blog.coverImage} alt="" className="w-full object-contain rounded-2xl" />
            <Divider className="w-full my-4" />
            <div className="flex justify-between w-full items-center">
                <span className="text-primary"> {blog.read} </span>
                <span className="text-sm"> {blog.githubData.author.date} </span>
            </div>
            <p className="text-lg h-12 text-primary"> {blog.title} </p>
            <p className="text-subtext0">{blog.description}</p>
            <div className="flex gap-2">
                {blog.tags.map((tag, i) => <Chip size="small" color="default" key={i} label={tag} />)}
            </div>
            {blog.githubData.author.date !== blog.githubData.committer.committed_date && <p className="text-sm text-subtext0"> Last edited on <span className="text-text"> {blog.githubData.committer.committed_date} </span> </p>}
            <div className="w-full flex justify-between">
                <Button href={`${blogUrl}/${blog.url}`} target="_blank">Read Now</Button>
                <Button href={`https://github.com/coding-club-gct/front-gate/issues/${blog.issueNumber}`} target="_blank">Comments</Button>
            </div>
        </div>)}
    </div>
}