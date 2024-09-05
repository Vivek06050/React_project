import React, { useState } from 'react'
import questionMark from "../assets/question.svg"
import Box from "../assets/box.svg"

const FirstWidget = () => {

    const [status, setStatus] = useState("Aboutme");

    const clicked = (e, active) => {
        setStatus(active);
    }

    return (
        <div className="h-[50%] w-[100%] bg-[#363c43] rounded-[27px] shadow-lg shadow-black">

            {/* first half */}

            <div className="flex p-4  gap-4">
                <div className="hover:scale-105 transition-all duration-1s cursor-pointer">
                    <img src={questionMark} />
                </div>
                <div className="flex justify-evenly items-center h-[56px] bg-black rounded-2xl font-semibold text-[12px]">
                    <div
                        onClick={(e) => clicked(e, "Aboutme")}
                        className={`flex justify-center items-center rounded-xl px-[55px] h-[40px] ml-2 hover:cursor-pointer hover:scale-105 transition-all duration-2s ease-linear
                        ${status === "Aboutme" ? 'bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]' : 'text-[#b4aeae]'} 
                        ${status !== "Aboutme" && 'hover:rounded-xl hover:bg-[#28292F] hover:duration-500 hover:ease-in-out'}`}
                    >
                        About Me
                    </div>
                    <div
                        onClick={(e) => clicked(e, "experiences")}
                        className={`flex justify-center items-center rounded-xl px-[54px] h-[40px]  ml-2 hover:cursor-pointer hover:scale-105 transition-all duration-2s ease-linear 
                        ${status === "experiences" ? 'bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]' : 'text-[#b4aeae]'} 
                        ${status !== "experiences" && 'hover:rounded-xl hover:bg-[#28292F] hover:duration-500 hover:ease-in-out'}`}
                    >
                        Experiences
                    </div>
                    <div
                        onClick={(e) => clicked(e, "recommended")}
                        className={`rounded-xl px-[48px] h-[40px] flex justify-center items-center ml-2 mr-2 hover:cursor-pointer hover:scale-105 transition-all duration-2s ease-linear
                        ${status === "recommended" ? 'bg-[#28292F] text-white shadow-[5px_23px_38px_4px_black]' : 'text-[#b4aeae]'}
                        ${status !== "recommended" && 'hover:rounded-xl hover:bg-[#28292F] hover:duration-500 hover:ease-in-out'}`}
                    >
                        Recommended
                    </div>
                </div>
            </div>

            {/* second half */}

            <div className="flex gap-4 p-2 ml-2.5">
                <div className="mt-5">
                    <img src={Box}/>
                </div>
                <div>
                    <p className="text-[#969696]">
                    Hello! I’m Dave, your sales rep here from Salesforce. I’ve been working at this awesome company for 3 years now.
                    I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...
                    </p>
                </div>
                <div >
                    <div className="h-[48px] w-[6px] bg-gradient-to-t from-[#4A4E54] to-[#888989] rounded-full shadow-[2px_2px_3px_1px_#23222299] "></div>
                </div>
            </div>
            
        </div>
        
    )
}

export default FirstWidget
