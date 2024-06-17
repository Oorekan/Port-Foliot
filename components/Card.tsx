'use client'

import React, { useEffect } from "react"
import Image from "next/image"
import React_Logo_SVG from "../public/react-logo.svg"
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type CardProps = {
    title: string;
    elements: any[];
}

const Card: React.FC<CardProps> = ({ title, elements }) => {
    useEffect(() => {
        //* -------------------- CARD -------------------- *//
        let tl_card = gsap.timeline({})
        tl_card.fromTo("#elements", {
            x: 150,
        }, {
            x: -150,
            repeat: -1,
            duration: 5,
            ease: 'linear'
        })
        //* -------------------- KILL -------------------- *//
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [])
    return (
        <>
            <div id="card" className="relative w-[352px] h-[512px] bg-[radial-gradient(circle,#FFFFFF,#999999)] rounded-[20px] p-[15px]">
                <div className="relative flex flex-col justify-around items-center w-full h-full bg-onyx-black bg-[url('../public/noisy-background.png')] rounded-[5px] overflow-hidden">
                    <Image src={React_Logo_SVG} alt="react-logo" />
                    <h2 className="text-[42px] font-akiraExpanded">{title}</h2>
                    <div className="flex gap-5">
                        <div className="flex gap-5">
                            {elements.map((el: any, index: number) => (
                                <h3 key={index} id="elements" className="text-[32px] font-japaneseRobot">{el}</h3>
                            ))}
                        </div>
                        <div className="flex gap-5">
                            {elements.map((el: any, index: number) => (
                                <h3 key={index} id="elements" className="text-[32px] font-japaneseRobot">{el}</h3>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card;