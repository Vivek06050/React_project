import React, { useState, useRef } from 'react'
import Question from "../assets/question.svg"
import Box from "../assets/box.svg"
import { FaArrowLeft, FaArrowRight, FaPlus } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SecondWidget = () => {
    const [Index, setIndex] = useState(0);
    const [images, setImages] = useState([
        "https://images.unsplash.com/photo-1435224654926-ecc9f7fa028c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1506057213367-028a17ec52e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1503965830912-6d7b07921cd1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://media.istockphoto.com/id/1458782106/photo/scenic-aerial-view-of-the-mountain-landscape-with-a-forest-and-the-crystal-blue-river-in.jpg?s=2048x2048&w=is&k=20&c=jbXMS_yFujUo29EIjPd8XBsEan-PAHUcPs0Zo1-HY_U=",
        "https://images.unsplash.com/photo-1475776408506-9a5371e7a068?q=80&w=1958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://media.istockphoto.com/id/157373207/photo/balanced-stones-on-a-pebble-beach-during-sunset.jpg?s=2048x2048&w=is&k=20&c=OX3HgrIrYiVoiaqBkxpCh8nPcv7MgoKFbHwnSrwMIeQ=",
    ]);
    const notify = () => toast("Photo Uploaded");
    
    const fileInputRef = useRef(null);

    const Next = () => {
        if (Index < images.length - 3) {
            setIndex(Index + 1);
        }
    
    };

    const Prev = () => {
        if (Index > 0) {
            setIndex(Index - 1);
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            notify();
            const reader = new FileReader();
            reader.onloadend = () => {
                setImages([...images, reader.result]);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="h-[50%] w-[100%] bg-[#363C43] rounded-[27px] shadow-lg shadow-black">

            {/* first half */}

            <div className="p-4 flex gap-4">
            <div className="hover:scale-105 transition-all duration-1s cursor-pointer">
                    <img src={Question} className="" alt="" />
                </div>
                <div className="flex justify-between items-center w-full ">
                    <div>
                        <button
                            className="h-[90%] bg-[#171717] px-8 py-3 rounded-2xl text-white text-lg
                                        shadow-inner shadow-black font-medium hover:scale-105 transition-all duration-2s ease-linear hover:bg-[#171717ac]"
                        >
                            Gallery
                        </button>
                    </div>
                    <div>
                        <div className='flex gap-4 px-4'>
                            <div className="shadow-[6px_7px_5px_1px_#1f1f1fab] rounded-full">
                                <button
                                    className="px-4 py-3 rounded-full bg-[#FFFFFF08] text-white font-semibold text-xs
                                flex justify-center items-center gap-1 shadow-inner shadow-[#a7a4a4b5]"
                                    onClick={() => fileInputRef.current.click()}
                                >
                                    <FaPlus className="w-[10px] mb-[1.4px]" /> ADD IMAGE
                                </button>
                                <input
                                    type="file"
                                    ref={fileInputRef}
                                    style={{ display: 'none' }}
                                    accept="image/*"
                                    onChange={handleImageUpload}
                                />
                            </div>
                            <div className="flex gap-3 text-[#6F787C] px-2">
                                <div
                                    className="rounded-full
                                                shadow-[0px_0px_20px_6px_#6a8897]
                                                active:scale-[0.8] z-0"
                                >
                                    <button
                                        className="rounded-full bg-gradient-to-t from-[#303439] to-[#161718] p-3
                                                    shadow-[2px_8px_22px_5px_black]"
                                        onClick={Prev}
                                    >
                                        <FaArrowLeft />
                                    </button>
                                </div>
                                <div
                                    className="rounded-full
                                                shadow-[0px_0px_20px_6px_#6a8897]
                                                active:scale-[0.8] z-0"
                                >
                                    <button
                                        className="rounded-full bg-gradient-to-t from-[#303439] to-[#161718] p-3
                                                    shadow-[2px_8px_22px_5px_black]"
                                        onClick={Next}
                                    >
                                        <FaArrowRight />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* second half */}

            <div className="flex gap-4 p-2 ml-2.5">
                <div className="mt-5 w-[19px]">
                    <img src={Box}/>
                </div>
                <div className="grid grid-cols-3 gap-6 justify-center items-center px-2">
                    {images.slice(Index, Index + 3).map((image, index) => (
                        <div key={index} className="relative">
                            <img
                                src={image}
                                className="h-[150px] w-[170px] rounded-2xl transition-transform duration-500 
                                transform hover:scale-110  hover:opacity-100 opacity-25 "
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SecondWidget
