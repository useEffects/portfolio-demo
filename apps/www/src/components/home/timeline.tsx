"use client"

import { Timeline as MuiTimeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator, timelineItemClasses } from "@/components/muilab"
import { ReactNode } from "react"

const experienceItems = [
    {
        name: "Project Example",
        website: "https://example.com",
        role: "Software Developer (Full-time)",
        dates: ["Jan 2023", "Mar 2023"],
        location: "New York, USA (Remote)",
        content: <div className="">
            <p> <strong>Led</strong> the entire tech stack development for this project. Documented the process in a blog post <a href="https://example.com/blog-post">here</a> and details in the project whitepaper <a href="https://example.com/whitepaper.pdf">here</a>.</p>
            <p>The project includes web and mobile apps, CMS solutions, and more. The app is expected to have over 10,000 users per month.</p>
        </div>
    },
]

function TimelineWrapper({ children }: { children: ReactNode }): ReactNode {
    return <MuiTimeline className="!m-0 !p-0" sx={{
        [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
            margin: 0
        },
    }}>
        {children}
    </MuiTimeline>
}

export default function Timeline() {
    return <TimelineWrapper>
        {experienceItems.map((item, key) =>
            <TimelineItem key={key}>
                <TimelineSeparator color="primary">
                    <TimelineDot color="primary" />
                    <TimelineConnector color="secondary" />
                </TimelineSeparator>
                <TimelineContent>
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <p className="text-primary text-lg"> {item.name} </p>
                            <div className="flex gap-2 text-sm text-subtext0">
                                <p> {item.dates[0]} </p>
                                <p> - </p>
                                <p> {item.dates[1]} </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 p-4 rounded-3xl bg-base">
                            <a target="_blank" href={item.website}> {item.website} </a>
                            <p className=""> {item.role} </p>
                            <p className="text-subtext0"> {item.location} </p>
                        </div>
                        <div className="my-2">
                            {item.content}
                        </div>
                    </div>
                    {key !== experienceItems.length - 1 && <div className="w-full h-4"></div>}
                </TimelineContent>
            </TimelineItem>
        )}
    </TimelineWrapper>
}
