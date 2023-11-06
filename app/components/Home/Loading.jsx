import React from "react"


const Loading = ()=> {
    const count = 8
    return (
        <div className="w-full flex flex-row flex-wrap justify-around" >
            <div className="animate-pulse w-[280px] h-[420px] bg-gray-400 my-5"></div>
            <div className=" animate-pulse w-[280px] h-[420px] bg-gray-400 my-5"></div>
            <div className=" animate-pulse w-[280px] h-[420px] bg-gray-400 my-5"></div>
            <div className=" animate-pulse w-[280px] h-[420px] bg-gray-400 my-5"></div>
            <div className=" animate-pulse w-[280px] h-[420px] bg-gray-400 my-5"></div>
            <div className=" animate-pulse w-[280px] h-[420px] bg-gray-400 my-5"></div>
            <div className=" animate-pulse w-[280px] h-[420px] bg-gray-400 my-5"></div>
            <div className=" animate-pulse w-[280px] h-[420px] bg-gray-400 my-5"></div>
            <div className=" animate-pulse w-[280px] h-[420px] bg-gray-400 my-5"></div>
            <div className=" animate-pulse w-[280px] h-[420px] bg-gray-400 my-5"></div>
        </div>
    )
}

export default Loading