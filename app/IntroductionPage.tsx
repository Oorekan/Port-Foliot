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
                x: "-150%",
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
        <section id="intro_section" className="relative w-screen h-screen max-w-full overflow-hidden">
            <div id="intro_container" className="relative w-full h-full">
                <div id="intro_wrapper" className="relative w-full h-full">
                    <div id="cards" className="relative h-full flex gap-14 items-center lg:left-[100%] left-[50%]">
                        {Card_Info.map((el, index) => <Card key={index} title={el.title} elements={el.elements} />)}
                    </div>
                </div>
            </div>
        </section>
    )
}