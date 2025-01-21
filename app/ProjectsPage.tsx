'use client'

import { useEffect } from "react"
import Image from "next/image"

// import Project_Picture from "../public/projects-image.png"
import FirstProjectImage from "../public/video-camera-ypsilon.png"
import FirstProjectSecondImage from "../public/securité-regie-et-copro.png"

import SecondProjectImage from "../public/StudioToniR-033.jpg"
import SecondProjectSecondImage from "../public/soirees-professionnelles-header-image.jpg"

import ThirdProjectImage from "../public/train-cover.jpg"
import ThirdProjectSecondImage from "../public/rse-hero-header-bg.png"

import FourthProjectImage from "../public/la-revolution-des-entretiens.jpg"
import FourthProjectSecondImage from "../public/proxima-card.png"

import FifthProjectImage from "../public/nsbiotech-carriere.webp"
import FifthProjectSecondImage from "../public/salon-etudiant.jpg"

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
        tl_projects_links.fromTo("#third_project_second_image", {
            x: 60,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
        }, 0.6)

        tl_projects_links.fromTo("#fourth_project_image", {
            y: 700,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
        }, 0)
        tl_projects_links.fromTo("#fourth_project_second_image", {
            y: -45,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
        }, 0.6)

        tl_projects_links.fromTo("#fifth_project_image", {
            y: 500,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
        }, 0)
        tl_projects_links.fromTo("#fifth_project_second_image", {
            x: -25,
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
                            <div id="first_project_image" className="group z-10 absolute lg:w-[412px] lg:h-[256px] w-[156px] h-[128px] rounded-[30px] top-0 left-0 lg:mt-[4.5%] lg:ml-[21.65%] mt-[40%] ml-[12%] overflow-hidden">
                                <a target="_blank" href="https://www.ypsilon-securite.fr/" rel="noopener noreferrer">
                                    <div className="relative w-full h-full">
                                        <Image className="w-full h-full object-cover" src={FirstProjectImage} alt="first-project-picture" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                            <span className="text-white text-[32px] font-akiraExpanded">YPSILON</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div id="first_project_second_image" className="hidden lg:block group z-10 absolute w-[192px] h-[128px] rounded-[30px] top-0 left-0 mt-[7%] ml-[40%] overflow-hidden">
                                <a target="_blank" href="https://www.ypsilon-securite.fr/" rel="noopener noreferrer">
                                    <div className="relative w-full h-full">
                                        <Image className="w-full h-full object-cover" src={FirstProjectSecondImage} alt="first-project-picture" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"></div>
                                    </div>
                                </a>
                            </div>

                            {/* SECOND PROJECT */}
                            <div id="second_project_image" className="group z-10 absolute lg:w-[412px] lg:h-[256px] w-[156px] h-[128px] rounded-[30px] top-0 left-0 lg:mt-[21.5%] lg:ml-[7%] mt-[80%] ml-[5%] overflow-hidden">
                                <a target="_blank" href="https://www.karaokelyon.com/" rel="noopener noreferrer">
                                    <div className="relative w-full h-full">
                                        <Image className="w-full h-full object-cover" src={SecondProjectImage} alt="second-project-picture" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                            <span className="text-white text-[32px] font-akiraExpanded">KBOX</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div id="second_project_second_image" className="hidden lg:block group z-10 absolute w-[192px] h-[128px] rounded-[30px] top-0 left-0 mt-[32%] ml-[5%] overflow-hidden">
                                <a target="_blank" href="https://www.karaokelyon.com/" rel="noopener noreferrer">
                                    <div className="relative w-full h-full">
                                        <Image className="w-full h-full object-cover" src={SecondProjectSecondImage} alt="second-project-picture" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"></div>
                                    </div>
                                </a>
                            </div>

                            {/* THIRD PROJECT  */}
                            <div id="third_project_image" className="group z-10 absolute lg:w-[412px] lg:h-[256px] w-[156px] h-[128px] rounded-[30px] bottom-0 left-0 lg:mb-[4.5%] lg:ml-[32%] mb-[70%] ml-[20%] overflow-hidden">
                                <a target="_blank" href="https://www.ingeva.fr/" rel="noopener noreferrer">
                                    <div className="relative w-full h-full">
                                        <Image className="w-full h-full object-cover" src={ThirdProjectImage} alt="third-project-picture" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                            <span className="text-white text-[32px] font-akiraExpanded">INGEVA</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div id="third_project_second_image" className="hidden lg:block group z-10 absolute w-[192px] h-[128px] rounded-[30px] bottom-0 left-0 mb-[3%] ml-[50%] overflow-hidden">
                                <a target="_blank" href="https://www.ingeva.fr/" rel="noopener noreferrer">
                                    <div className="relative w-full h-full">
                                        <Image className="w-full h-full object-cover" src={ThirdProjectSecondImage} alt="third-project-picture" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"></div>
                                    </div>
                                </a>
                            </div>

                            {/* FOURTH PROJECT  */}
                            <div id="fourth_project_image" className="group z-10 absolute lg:w-[412px] lg:h-[256px] w-[156px] h-[128px] rounded-[30px] top-0 right-0 lg:mt-[15%] lg:mr-[12%] mt-[30%] mr-[7%] overflow-hidden">
                                <a target="_blank" href="https://www.proxima-recrutement.com/" rel="noopener noreferrer">
                                    <div className="relative w-full h-full">
                                        <Image className="w-full h-full object-cover" src={FourthProjectImage} alt="fourth-project-picture" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                            <span className="text-white text-[32px] font-akiraExpanded">PROXIMA</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div id="fourth_project_second_image" className="hidden lg:block group z-10 absolute w-[192px] h-[128px] rounded-[30px] top-0 right-0 mt-[13%] mr-[29%] overflow-hidden">
                                <a target="_blank" href="https://www.proxima-recrutement.com/" rel="noopener noreferrer">
                                    <div className="relative w-full h-full">
                                        <Image className="w-full h-full object-cover" src={FourthProjectSecondImage} alt="fourth-project-picture" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300"></div>
                                    </div>
                                </a>
                            </div>

                            {/* FIFTH PROJECT  */}
                            <div id="fifth_project_image" className="group z-10 absolute lg:w-[412px] lg:h-[256px] w-[156px] h-[128px] rounded-[30px] bottom-0 right-0 lg:mb-[8%] lg:mr-[9%] mb-[100%] mr-[7%] overflow-hidden">
                                <a target="_blank" href="https://www.nsbiotech.fr/" rel="noopener noreferrer">
                                    <div className="relative w-full h-full">
                                        <Image className="w-full h-full object-cover" src={FifthProjectImage} alt="fifth-project-picture" />
                                        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                            <span className="text-white text-[32px] font-akiraExpanded">NS BIOTECH</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div id="fifth_project_second_image" className="hidden lg:block group z-10 absolute w-[192px] h-[128px] rounded-[30px] bottom-0 right-0 mb-[13%] mr-[2%] overflow-hidden">
                                <a target="_blank" href="https://www.nsbiotech.fr/" rel="noopener noreferrer">
                                    <div className="relative w-full h-full">
                                        <Image className="w-full h-full object-cover" src={FifthProjectSecondImage} alt="fifth-project-picture" />
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