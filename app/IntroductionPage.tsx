'use client'

import Image from "next/image";
import React_Logo_SVG from "../public/react-logo.svg"
import { useEffect } from "react";
import SwitchColorScroll from "@/components/SwitchColorScroll";

export default function IntroductionPage() {
    useEffect(() => {
        SwitchColorScroll()
    }, [])
    return (<div id="introduction" className="relative w-screen h-screen bg-transparent overflow-hidden">
        <div id="cards" className="relative left-[50%] h-full flex gap-14  items-center">
            <div id="card" className="relative w-[352px] h-[512px] bg-[radial-gradient(circle,#FFFFFF,#999999)] rounded-[20px] p-[15px]">
                <div className="relative flex flex-col justify-around items-center w-full h-full bg-onyx-black bg-[url('../public/noisy-background.png')] rounded-[5px] overflow-hidden">
                    <Image src={React_Logo_SVG} alt="react-logo"></Image>
                    <h2 className="text-[42px] font-akiraExpanded">REACT</h2>
                    <div className="flex gap-5">
                        <h3 className="text-[32px] font-japaneseRobot">React</h3>
                        <h3 className="text-[32px] font-japaneseRobot">Next</h3>
                        <h3 className="text-[32px] font-japaneseRobot">Node</h3>
                    </div>
                </div>
            </div>
            <div id="card" className="relative w-[352px] h-[512px] bg-[radial-gradient(circle,#FFFFFF,#999999)] rounded-[20px] p-[15px]">
                <div className="relative flex flex-col justify-around items-center w-full h-full bg-onyx-black bg-[url('../public/noisy-background.png')] rounded-[5px] overflow-hidden">
                    <Image src={React_Logo_SVG} alt="react-logo"></Image>
                    <h2 className="text-[42px] font-akiraExpanded">REACT</h2>
                    <div className="flex gap-5">
                        <h3 className="text-[32px] font-japaneseRobot">React</h3>
                        <h3 className="text-[32px] font-japaneseRobot">Next</h3>
                        <h3 className="text-[32px] font-japaneseRobot">Node</h3>
                    </div>
                </div>
            </div>
            <div id="card" className="relative w-[352px] h-[512px] bg-[radial-gradient(circle,#FFFFFF,#999999)] rounded-[20px] p-[15px]">
                <div className="relative flex flex-col justify-around items-center w-full h-full bg-onyx-black bg-[url('../public/noisy-background.png')] rounded-[5px] overflow-hidden">
                    <Image src={React_Logo_SVG} alt="react-logo"></Image>
                    <h2 className="text-[42px] font-akiraExpanded">REACT</h2>
                    <div className="flex gap-5">
                        <h3 className="text-[32px] font-japaneseRobot">React</h3>
                        <h3 className="text-[32px] font-japaneseRobot">Next</h3>
                        <h3 className="text-[32px] font-japaneseRobot">Node</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}