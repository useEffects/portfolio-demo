"use client"

import { useEffect, useState } from "react";

export const DocumentTitle = () => {
    const variations = ["_o hn", "J_ohn", "Jo_hn", " Joh_n", "John"];
    const [title, setTitle] = useState("John");

    useEffect(() => {
        let index = 0;

        const intervalId = setInterval(() => {
            setTitle(variations[index]);
            index = (index + 1) % variations.length;
        }, 500);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        document.title = title; // Update the document title
    }, [title]);

    return null; // This component doesn't need to render anything
};
