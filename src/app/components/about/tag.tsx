import React from "react";

interface TagProps {
    tag: string;
}

export default function Tag({ tag }: TagProps) {
    return (
        <div className="rounded-xl  border-[1px] border-gray-400 bg-gray-200 px-2 py-1 w-fit text-xs line-clamp-1">
            {tag}
        </div>
    );
}