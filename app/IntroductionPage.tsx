'use client'

import { useEffect } from "react";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import Card from "@/components/Card";
import React_Icon from "@/public/react-icon.svg";
import Webflow_Icon from "@/public/webflow-icon.svg";
import Figma_Icon from "@/public/figma-icon.svg";
// import Abilities_Icon from "@/public/abilities-icon.svg";
import Hobbies_Icon from "@/public/hobbies-icon.svg";
import LightBulb from "@/public/light-bulb 1.svg"

gsap.registerPlugin(ScrollTrigger);

let Card_Info = [{
    title: "React",
    image: React_Icon,
    elements: ["Next", "Node", "GSAP"]
},
{
    title: "Webflow",
    image: Webflow_Icon,
    elements: ["Structure", "CMS", "Analytics"]
},
{
    title: "Figma",
    image: Figma_Icon,
    elements: ["Mockups", "Design", "Plugins"]
},
{
    title: "Abilities",
    image: LightBulb,
    elements: ["Communication", "Creativity", "Adaptability"]
},
{
    title: "Hobbies",
    image: Hobbies_Icon,
    elements: ["Sport", "Games", "Travel"]
}]

export default function IntroductionPage() {
    useEffect(() => {
        let mm = gsap.matchMedia();

        mm.add("(min-width: 768px)", () => {
            let tl_default = gsap.timeline({
                scrollTrigger: {
                    trigger: '#intro_section',
                    start: "top top",
                    end: "bottom+=500 center",
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                    pinnedContainer: "#intro_section",
                    pinType: "fixed"
                }
            })
            tl_default.to("#cards", {
                scrollTrigger: {
                    trigger: "#intro_section",
                    scrub: 1,
                },
                x: "-200vw",
            })
        });

        mm.add("(max-width: 767px)", () => {
            let tl_default_small = gsap.timeline({
                scrollTrigger: {
                    trigger: '#intro_section',
                    start: "top top",
                    end: "bottom+=500 center",
                    scrub: 1,
                    pin: true,
                    pinSpacing: true,
                    pinnedContainer: "#intro_section",
                    pinType: "fixed"
                }
            })
            tl_default_small.to("#cards", {
                x: "-500%",
            })
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [])
    return (
        <section id="intro_section" className="relative lg:w-[400vw] w-screen h-screen overflow-hidden">
            <div id="intro_container" className="relative w-full h-full">
                <div id="intro_wrapper" className="relative w-full h-full">
                    <div id="cards" className="relative lg:w-full h-full flex gap-14 lg:justify-center items-center left-[50%] lg:right-0 lg:left-0">
                        {Card_Info.map((el, index) => <Card key={index} title={el.title} image={el.image} elements={el.elements} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}