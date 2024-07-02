'use client'

import { useEffect } from "react";

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import LandingPage from "./LandingPage";
import IntroductionPage from "./IntroductionPage";
import ProjectPage from "./ProjectsPage";


export default function SectionsPage() {
    useEffect(() => {
        //* -------------------- RED LINES ANIMATION -------------------- *//
        let tl_red_line = gsap.timeline({
            scrollTrigger: {
                trigger: "#page_layout",
                start: "top",
                scrub: true,
            },
        })
        tl_red_line.to("#double_red_line_1", {
            x: "10%",
            ease: "linear"
        })
        tl_red_line.to("#double_red_line_2", {
            x: "-15%",
            ease: "linear"
        }, 0)
        tl_red_line.to("#double_red_line_3", {
            x: "5%",
            ease: "linear"
        }, 0)
        tl_red_line.to("#red_line_1", {
            x: "-5%",
            ease: "linear"
        }, 0)

        //* -------------------- WHITE LINES ANIMATION -------------------- *//
        let tl_white_line = gsap.timeline({
            scrollTrigger: {
                trigger: "#page_layout",
                start: "top",
                scrub: true,
            },
        })
        tl_white_line.to("#double_white_line_1", {
            x: "10%",
            ease: "linear"
        })
        tl_white_line.to("#double_white_line_2", {
            x: "15%",
            ease: "linear"
        }, 0)
        tl_white_line.to("#white_line_1", {
            x: "-5%",
            ease: "linear"
        }, 0)

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
        <div id="page_layout">
            <LandingPage />
            <IntroductionPage />
            <ProjectPage />
        </div>
    )
}