import React, { ReactNode } from "react"

const kittyAscii = `
⠀ ／l、
（ﾟ､ ｡ ７
⠀ l、ﾞ ~ヽ
  じしf_, )ノ
`

const arrowAscii = `      |\n      |\n---{\n^`

const generateTextBubble = (text: string, size: number) => {
    const borderLength = text.length + 6;
    return "-".repeat(size);
}

export const Kittysay = ({ text, asciiClassName, textBubbleClassName, textClassName, textComponent, containerClassName, arrowClassName, size = 30 }: { text: string, asciiClassName?: string, textBubbleClassName?: string, containerClassName?: string, arrowClassName?: string, textClassName?: string, textComponent?: () => ReactNode, size?: number }) => {
    return <div className={containerClassName}>
        <div>
            <pre className={textBubbleClassName}>
                {generateTextBubble(text, size)}
            </pre>
            {textComponent ? textComponent() :
                <p className={textClassName}>
                    {text}
                </p>}
            <pre className={textBubbleClassName}>
                {generateTextBubble(text, size)}
            </pre>
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "end" }}>
            <pre className={arrowClassName}>
                {arrowAscii}
            </pre>
            <pre className={asciiClassName}>
                {kittyAscii}
            </pre>
        </div>
    </div>
}