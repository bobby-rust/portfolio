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
                            // await new Promise((r) => setTimeout(() => {}, 1000)); TODO: Set a timeout here
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
            Math.floor(Math.random() * 200),
        );
        return () => {
            clearInterval(intervalID);
        };
    }, [forward, str, ch]);

    return (
        <div className="inline-flex whitespace-pre">
            &nbsp;{str}
            <div className="h-10 w-1 bg-white"></div>
        </div>
    );
}
