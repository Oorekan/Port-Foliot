'use client'

import { useEffect } from "react";

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

import LandingPage from "./LandingPage";
import MyselfSection from "./MyselfSection";
import IntroductionPage from "./IntroductionPage";
import ProjectPage from "./ProjectsPage";

gsap.registerPlugin(ScrollTrigger);

export default function SectionsPage() {
    useEffect(() => {
        document.getElementById("page_layout")?.classList.add("blockScroll");
        //* -------------------- RED AMARYLLIS ANIMATION -------------------- *//
        let tl_red_amaryllis = gsap.timeline({
            scrollTrigger: {
                trigger: "#page_layout",
                start: "top",
                scrub: true,
            },
        })
        tl_red_amaryllis.to("#red_amaryllis_1", {
            y: "-10%",
            ease: "linear"
        })

        //* -------------------- WHITE AMARYLLIS ANIMATION -------------------- *//
        let tl_white_amaryllis = gsap.timeline({
            scrollTrigger: {
                trigger: "#page_layout",
                start: "top",
                scrub: true,
            },
        })
        tl_white_amaryllis.to("#white_amaryllis_1", {
            y: "10%",
            ease: "linear"
        })

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [])
    return (
        <>
            <div id="page_layout" className="overflow-hidden">
                <LandingPage />
                <MyselfSection />
                <IntroductionPage />
                <ProjectPage />
            </div>
        </>
    )
}