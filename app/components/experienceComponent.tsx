"use client"

import { useEffect, useRef, useState } from "react";

interface ExperienceProps {
    index : number,
    exp: {
        no: number;
        year: number;
        title: string;
        details: string;
    };
}

export default function ExperienceComponent({index,exp}:ExperienceProps) {

    const [itemsPosition,setItemsPosition] = useState(index % 2 !== 0)

    useEffect(() => {
        setItemsPosition(index % 2 !== 0); // Odd -> end, Even -> start
      }, [index]); // Runs when `index` changes
    // do not render inside useEffect

    return (
        <div className={`flex flex-col ${itemsPosition ? "items-end" : "items-start"} w-full h-[100px]`}>
            <div className="absolute bg-white w-[45%] h-[140px]">
              <h1>{exp.no}</h1>
              <h1>{exp.year}</h1>
            </div>
        </div>
    )
}