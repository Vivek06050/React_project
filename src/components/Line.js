import React from 'react'

const Line = () => {
    return (
        <div className="flex flex-col w-[100%] h-[8%] justify-center items-center ">
            <div
                className="w-[85%] h-[4px] rounded-full bg-[#363C43]"
            />
            <div className="w-[85%] h-[4px] bg-black rounded-full opacity-40 blur-[4px]" />
        </div>
    )
}

export default Line
