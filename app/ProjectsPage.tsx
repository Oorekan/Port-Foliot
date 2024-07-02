'use client'

import { useEffect } from "react"
import Image from "next/image"

import Project_Picture from "@/public/portfolio-header-image-2 copie.png"
import FirstProject from "../public/securité-regie et copro.png"
import SecondProject from "../public/erik-mclean-9y1cTVKe1IY-unsplash.jpg"
import ThirdProject from "../public/rse-hero-header-bg.png"

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import ScrollAnimation from "@/components/ScrollAnimation"

import Contact from "./ContactPage";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectPage() {
    useEffect(() => {
        ScrollAnimation();
        //* -------------------- PROJECTS LINKS -------------------- *//
        let tl_projects_links = gsap.timeline({
            scrollTrigger: {
                trigger: '#projects_section',
                scrub: true,
                end: "bottom bottom"
            }
        })
        tl_projects_links.fromTo("#first-project-link", {
            y: 800,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
        })
        tl_projects_links.fromTo("#second-project-link", {
            y: 300,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
        }, 0)
        tl_projects_links.fromTo("#third-project-link", {
            y: 600,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
        }, 0)
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [])
    return (
        <>
            <section id="projects_section" className="relative w-screen h-screen max-w-full overflow-hidden">
                <div id="projects_container" className="relative w-full h-full">
                    <div id="projects_wrapper" className="relative w-full h-full">
                        <div className="absolute inset-0 h-full w-full">
                            <div className="absolute w-full bottom-0">
                                <Image
                                    id="projects_picture"
                                    className="mx-auto"
                                    src={Project_Picture}
                                    width={0}
                                    height={0}
                                    alt="projects-picture">
                                </Image>
                            </div>
                            <div id="first-project-link" className="group z-10 absolute lg:w-[512px] lg:h-[256px] w-[256px] h-[128px] rounded-[30px] top-0 left-0 lg:mt-[4.5%] lg:ml-[21.65%] mt-[40%] ml-[30%] overflow-hidden">
                                <a target="_blank" href="https://ypsilon-64fba2.webflow.io/" rel="noopener noreferrer">
                                    <div className="relative w-full h-full">
                                        <Image className="w-full h-full object-cover" src={FirstProject} alt="first-project-picture" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                            <span className="text-white text-[32px] font-akiraExpanded">YPSILON</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div id="second-project-link" className="group z-10 absolute lg:w-[512px] lg:h-[256px] w-[256px] h-[128px] rounded-[30px] top-0 left-0 lg:mt-[21.5%] lg:ml-[9.2%] mt-[80%] ml-[5%] overflow-hidden">
                                <a target="_blank" href="https://kbox-preprod.webflow.io/" rel="noopener noreferrer">
                                    <div className="relative w-full h-full">
                                        <Image className="w-full h-full object-cover" src={SecondProject} alt="second-project-picture" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                            <span className="text-white text-[32px] font-akiraExpanded">KBOX</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div id="third-project-link" className="group z-10 absolute lg:w-[512px] lg:h-[256px] w-[256px] h-[128px] rounded-[30px] bottom-0 right-0 lg:mb-[4.5%] lg:mr-[14.3%] mb-[60%] mr-[5%] overflow-hidden">
                                <a target="_blank" href="https://www.ingeva.fr/" rel="noopener noreferrer">
                                    <div className="relative w-full h-full">
                                        <Image className="w-full h-full object-cover" src={ThirdProject} alt="third-project-picture" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                            <span className="text-white text-[32px] font-akiraExpanded">INGEVA</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <Contact />
                    </div>
                </div>
            </section >
        </>
    )
}