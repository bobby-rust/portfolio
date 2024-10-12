"use client";

import React, { useState, useEffect } from "react";

interface TypewriterProps {
    words: string[];
}

export default function Typewriter({ words }: TypewriterProps) {
    const [str, setStr] = useState("");
    const [forward, setForward] = useState(true);
    const [ch, setCh] = useState(0);
    const [word, setWord] = useState(0);

    useEffect(() => {
        const intervalID = setInterval(
            () => {
                setStr((prevStr) => {
                    if (forward) {
                        if (ch === words[word].length - 1) {
                            setForward(false);
                        } else {
                            setCh(ch + 1);
                        }
                        return prevStr + words[word][ch];
                    } else {
                        if (ch === 0) {
                            setForward(true);
                            setWord(word === words.length - 1 ? 0 : word + 1);
                            return "";
                        } else {
                            setCh(ch - 1);
                            return prevStr.slice(0, -1);
                        }
                    }
                });
            },
            !forward && ch === words[word].length - 1
                ? 2000
                : Math.floor(Math.random() * 150),
        );

        return () => {
            clearInterval(intervalID);
        };
    }, [ch, forward, word, words]);

    return (
        <div className="inline-flex items-center whitespace-pre bg-teal font-semibold text-primary tracking-tighter rounded-lg ml-1 shadow-lg">
            <span>&nbsp;</span>
            <span>{str}</span>
            <div className="h-6 w-[1px] bg-foreground animate-fade-in-out ml-1"></div>
        </div>
    );
}
