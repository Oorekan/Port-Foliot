'use client'

import { useEffect } from "react";
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function MyselfSection() {
    useEffect(() => {
        //* -------------------- PIN SECTION -------------------- *//
        let tl_text_opacity = gsap.timeline({
            scrollTrigger: {
                trigger: "#myself_section",
                start: "top top",
                endTrigger: "#intro_section",
                scrub: true,
            },
        })
        tl_text_opacity.to("#myself_paragraph", {
            opacity: 0,
        })

        const splitTypes = document.querySelectorAll<HTMLElement>('#myself_paragraph');

        splitTypes.forEach((char, i) => {
            const text = new SplitType(char, { types: ['chars', 'words'] });
            gsap.from(text.chars, {
                scrollTrigger: {
                    trigger: char,
                    start: 'top 100%',
                    end: 'top 20%',
                    scrub: true,
                    markers: false,
                },
                opacity: 0,
                stagger: 0.1,
            });
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [])
    return (
        <section id="myself_section" className="relative w-screen h-[200vh] overflow-hidden">
            <div id="myself_container" className="relative w-full h-full">
                <div id="myself_wrapper" className="relative w-full h-full">
                    <div className="relative w-full h-full flex items-center">
                        <p id="myself_paragraph" className="relative lg:w-1/2 lg:text-4xl text-lg px-10 lg:px-52 font-danzza z-10 bg-transparent">
                            I am a passionate creative developer dedicated to refining online presences and elevating user experiences. With a sharp eye for aesthetics and a profound understanding of user-centric design, I specialize in creating impactful websites tailored to diverse needs.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}