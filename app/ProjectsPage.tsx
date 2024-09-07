'use client'

import { useEffect } from "react"
import Image from "next/image"

// import Project_Picture from "../public/projects-image.png"
import FirstProjectImage from "../public/securité-regie-et-copro.png"
import FirstProjectSecondImage from "../public/video-camera-ypsilon.png"
// import FirstProjectLogo from "../public/ypsilon-logo.png"

import SecondProjectImage from "../public/StudioToniR-033.jpg"
import SecondProjectSecondImage from "../public/soirees-professionnelles-header-image.jpg"
// import SecondProjectLogo from "../public/Logo.png"

import ThirdProjectImage from "../public/train-cover.jpg"
import ThirdProjectSecondImage from "../public/rse-hero-header-bg.png"
// import ThirdProjectLogo from "../public/logo-ingeva-favicon.png"

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';
import ScrollAnimation from "@/components/ScrollAnimation"

import Contact from "./ContactPage";

gsap.registerPlugin(ScrollTrigger);

export default function ProjectPage() {
    useEffect(() => {
        ScrollAnimation();
        //* -------------------- PROJECT LINKS -------------------- *//
        let tl_projects_links = gsap.timeline({
            scrollTrigger: {
                trigger: '#projects_section',
                scrub: true,
                end: "bottom bottom"
            }
        })
        tl_projects_links.fromTo("#first_project_image", {
            y: 800,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
        })
        // tl_projects_links.fromTo("#first_project_logo", {
        //     x: -50,
        //     opacity: 0
        // }, {
        //     x: 0,
        //     opacity: 1,
        // }, 0.3)
        tl_projects_links.fromTo("#first_project_second_image", {
            y: 120,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
        }, 0.6)

        tl_projects_links.fromTo("#second_project_image", {
            y: 300,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
        }, 0)
        // tl_projects_links.fromTo("#second_project_logo", {
        //     y: 150,
        //     opacity: 0
        // }, {
        //     y: 0,
        //     opacity: 1,
        // }, 0.3)
        tl_projects_links.fromTo("#second_project_second_image", {
            y: -60,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
        }, 0.6)

        tl_projects_links.fromTo("#third_project_image", {
            y: 600,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
        }, 0)
        // tl_projects_links.fromTo("#third_project_logo", {
        //     x: -50,
        //     opacity: 0
        // }, {
        //     x: 0,
        //     opacity: 1,
        // }, 0.3)
        tl_projects_links.fromTo("#third_project_second_image", {
            x: 60,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
        }, 0.6)


        //* -------------------- KILL -------------------- *//
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
                            {/* <div className="absolute w-full bottom-0">
                                <Image
                                    id="projects_picture"
                                    className="mx-auto"
                                    src={Project_Picture}
                                    width={0}
                                    height={0}
                                    alt="projects-picture">
                                </Image>
                            </div> */}

                            {/* FIRST PROJECT */}
                            <div id="first_project_image" className="group z-10 absolute lg:w-[512px] lg:h-[256px] w-[256px] h-[128px] rounded-[30px] top-0 left-0 lg:mt-[4.5%] lg:ml-[21.65%] mt-[40%] ml-[30%] overflow-hidden">
                                <a target="_blank" href="https://www.ypsilon-securite.fr/" rel="noopener noreferrer">
                                    <div className="relative w-full h-full">
                                        <Image className="w-full h-full object-cover" src={FirstProjectImage} alt="first-project-picture" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                            <span className="text-white text-[32px] font-akiraExpanded">YPSILON</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* <div id="first_project_logo" className="hidden lg:block group z-10 absolute w-[128px] h-[128px] rounded-[100%] top-0 left-0 mt-[2%] ml-[17%] overflow-hidden">
                                <a target="_blank" href="https://www.ypsilon-securite.fr/" rel="noopener noreferrer">
                                    <div className="relative w-full h-full">
                                        <Image className="w-full h-full object-cover" src={FirstProjectLogo} alt="first-project-picture" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"></div>
                                    </div>
                                </a>
                            </div> */}
                            <div id="first_project_second_image" className="hidden lg:block group z-10 absolute w-[192px] h-[128px] rounded-[30px] top-0 left-0 mt-[9%] ml-[45%] overflow-hidden">
                                <a target="_blank" href="https://www.ypsilon-securite.fr/" rel="noopener noreferrer">
                                    <div className="relative w-full h-full">
                                        <Image className="w-full h-full object-cover" src={FirstProjectSecondImage} alt="first-project-picture" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"></div>
                                    </div>
                                </a>
                            </div>

                            {/* SECOND PROJECT */}
                            <div id="second_project_image" className="group z-10 absolute lg:w-[512px] lg:h-[256px] w-[256px] h-[128px] rounded-[30px] top-0 left-0 lg:mt-[21.5%] lg:ml-[9.2%] mt-[80%] ml-[5%] overflow-hidden">
                                <a target="_blank" href="https://www.karaokelyon.com/" rel="noopener noreferrer">
                                    <div className="relative w-full h-full">
                                        <Image className="w-full h-full object-cover" src={SecondProjectImage} alt="second-project-picture" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                            <span className="text-white text-[32px] font-akiraExpanded">KBOX</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* <div id="second_project_logo" className="hidden lg:block group z-10 absolute w-[128px] h-[128px] rounded-[30px] top-0 left-0 mt-[30%] ml-[7%] overflow-hidden">
                                <a target="_blank" href="https://www.karaokelyon.com/" rel="noopener noreferrer">
                                    <div className="relative w-full h-full">
                                        <Image className="w-full h-full object-cover" src={SecondProjectLogo} alt="first-project-picture" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"></div>
                                    </div>
                                </a>
                            </div> */}
                            <div id="second_project_second_image" className="hidden lg:block group z-10 absolute w-[192px] h-[128px] rounded-[30px] top-0 left-0 mt-[19%] ml-[23%] overflow-hidden">
                                <a target="_blank" href="https://www.karaokelyon.com/" rel="noopener noreferrer">
                                    <div className="relative w-full h-full">
                                        <Image className="w-full h-full object-cover" src={SecondProjectSecondImage} alt="first-project-picture" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"></div>
                                    </div>
                                </a>
                            </div>

                            {/* THIRD PROJECT  */}
                            <div id="third_project_image" className="group z-10 absolute lg:w-[512px] lg:h-[256px] w-[256px] h-[128px] rounded-[30px] bottom-0 right-0 lg:mb-[4.5%] lg:mr-[14.3%] mb-[60%] mr-[5%] overflow-hidden">
                                <a target="_blank" href="https://www.ingeva.fr/" rel="noopener noreferrer">
                                    <div className="relative w-full h-full">
                                        <Image className="w-full h-full object-cover" src={ThirdProjectImage} alt="third-project-picture" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                            <span className="text-white text-[32px] font-akiraExpanded">INGEVA</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            {/* <div id="third_project_logo" className="hidden lg:block group z-10 absolute w-auto h-[128px] rounded-[30px] bottom-0 right-0 mb-[14%] mr-[37%] overflow-hidden">
                                <a target="_blank" href="https://www.ingeva.fr/" rel="noopener noreferrer">
                                    <div className="relative w-full h-full">
                                        <Image className="w-full h-full object-cover" src={ThirdProjectLogo} alt="first-project-picture" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"></div>
                                    </div>
                                </a>
                            </div> */}
                            <div id="third_project_second_image" className="hidden lg:block group z-10 absolute w-[192px] h-[128px] rounded-[30px] bottom-0 right-0 mb-[5%] mr-[10%] overflow-hidden">
                                <a target="_blank" href="https://www.ingeva.fr/" rel="noopener noreferrer">
                                    <div className="relative w-full h-full">
                                        <Image className="w-full h-full object-cover" src={ThirdProjectSecondImage} alt="first-project-picture" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"></div>
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