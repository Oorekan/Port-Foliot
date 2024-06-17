'use client'
import { useEffect } from "react";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import Card from "@/components/Card";

gsap.registerPlugin(ScrollTrigger);

let Card_Info = [{
    title: "React",
    elements: ["Next", "Node", "GSAP"]
},
{
    title: "Webflow",
    elements: ["Structure", "CMS", "Analytics"]
},
{
    title: "Figma",
    elements: ["Mockups", "Design", "Plugins"]
},
{
    title: "Soft",
    elements: ["Communication", "Creativity", "Adaptability"]
},
{
    title: "Hobbies",
    elements: ["Sport", "Games", "Travel"]
}]

export default function IntroductionPage() {
    useEffect(() => {
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
            x: "-150%",
        })
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [])
    return (
        <section id="intro_section" className="relative w-screen h-screen max-w-full overflow-hidden">
            <div id="intro_container" className="relative w-full h-full">
                <div id="intro_wrapper" className="relative w-full h-full">
                    <div id="cards" className="relative h-full flex gap-14 items-center left-[100%]">
                        {Card_Info.map((el, index) => <Card key={index} title={el.title} elements={el.elements} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}