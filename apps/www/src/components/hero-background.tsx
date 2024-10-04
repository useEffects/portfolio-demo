"use client"

import { CatppuccinContext } from "@/context/catppuccin"
import * as React from "react"
import { SVGProps } from "react"
const HeroBackground = (props: SVGProps<SVGSVGElement>) => {
    const colors = React.useContext(CatppuccinContext)

    return <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" {...props}>
        <defs>
            <filter
                id="a"
                width="400%"
                height="400%"
                x="-100%"
                y="-100%"
                colorInterpolationFilters="sRGB"
                filterUnits="objectBoundingBox"
                primitiveUnits="userSpaceOnUse"
            >
                <feGaussianBlur
                    width="100%"
                    height="100%"
                    x="0%"
                    y="0%"
                    in="SourceGraphic"
                    result="blur"
                    stdDeviation={40}
                />
            </filter>
        </defs>
        <g filter="url(#a)">
            <circle cx={266.964} cy={642.277} r={150} fill={colors.crust} />
            <circle cx={223.701} cy={441.706} r={150} fill={colors.primary} />
            <circle cx={591.021} cy={403.553} r={150} fill={colors.mantle} />
        </g>
    </svg>
}

export default HeroBackground
