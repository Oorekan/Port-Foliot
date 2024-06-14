'use client'

import Image from "next/image"
import Project_Picture from "../public/brandon-monge-portfolio-cover-removebg-preview copie.png"
import Double_Red_Line_SVG from "../public/double-red-line.svg"
import Amaryllis_White_SVG from "../public/amaryllis-white-icon.svg"
import Double_White_Line_SVG from "../public/double-white-line.svg"
import Red_Line_SVG from "../public/red-line.svg"
import Amaryllis_Red_SVG from "../public/amaryllis-red-icon.svg"
import FirstProject from "../public/securité-regie et copro.png"
import SecondProject from "../public/erik-mclean-9y1cTVKe1IY-unsplash.jpg"
import ThirdProject from "../public/rse-hero-header-bg.png"
import { useEffect } from "react"
import ScrollAnimation from "@/components/ScrollAnimation"
import CrescentMoon from "@/components/svg/CrescentMoon"
import Amaryllis from "@/components/svg/Amaryllis"
import Sparkles from "@/components/svg/Sparkles"
import DoubleLine from "@/components/svg/DoubleLine"
import ReverseDoubleLine from "@/components/svg/ReverseDoubleLine"
import Line from "@/components/svg/Line"

export default function ProjectPage() {
    useEffect(() => {
        ScrollAnimation()
    }, [])
    return (
        <section id="projects" className="relative w-screen h-screen bg-onyx-black bg-[url('../public/noisy-background.png')] overflow-hidden">
            <div className="absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,rgb(255,255,255,0.2),transparent_1px),linear-gradient(to_bottom,rgb(255,255,255,0.2),transparent_1px)] bg-[size:5%_10%]">
                <div className="absolute w-full bottom-0 z-10">
                    <Image id="projects_picture" className="mx-[27%]" src={Project_Picture} width={1280} height={0} alt="projects-picture"></Image>
                </div>
                <div className="absolute flex flex-col top-0 right-0 mt-[10%] mr-[6.7%]">
                    <h2 id="keyword_7" className="bg-gradient-to-b from-[#999999] to-white inline-block text-transparent bg-clip-text text-[82px] font-akiraExpanded mb-[-50px]" style={{ WebkitTextStroke: '1px transparent' }}>
                        PROJECTS
                    </h2>
                    <h2 id="keyword_8" className="z-10 bg-gradient-to-b from-[#999999] to-white inline-block text-onyx-black bg-clip-text text-[82px] font-akiraExpanded mb-[-50px]" style={{ WebkitTextStroke: '1px transparent' }}>
                        PROJECTS
                    </h2>
                    <h2 id="keyword_9" className="z-20 bg-gradient-to-b from-[#999999] to-white inline-block text-onyx-black bg-clip-text text-[82px] font-akiraExpanded mb-[-50px]" style={{ WebkitTextStroke: '1px transparent' }}>
                        PROJECTS
                    </h2>
                </div>
                <div className="absolute top-0 right-0 mt-[5.2%] mr-[20%]">
                    <ReverseDoubleLine id={"double-red-line-top-right"} color={"red"} primaryColor={""} />
                </div>
                <div id="contact-top-right" className="absolute top-0 right-0 mt-[4.4%] mr-[11.3%]">
                    <h3 className="bg-gradient-to-b from-[#991600] to-scarlet-red inline-block text-transparent bg-clip-text text-[22px] font-akiraExpanded">
                        Contact
                    </h3>
                </div>
                <div className="absolute bottom-0 right-0 mb-[20.4%] mr-[7.9%]">
                    <Amaryllis id={"amaryllis-white-bottom-right"} gradientColor1={"white"} gradientColor2={"#999999"} stopColor={""} />
                </div>
                <div className="absolute bottom-0 right-0 mb-[5.62%] mr-[7.15%]">
                    <DoubleLine id={"double-white-line-bottom-right"} color={"white"} primaryColor={""} />
                </div>
                <div className="absolute bottom-0 right-0 mb-[22.48%] mr-[32.2%]">
                    <DoubleLine id={"double-white-line-center"} color={"white"} primaryColor={""} />
                </div>
                <div className="absolute top-0 left-0 mt-[27.67%] ml-[37.2%]">
                    <ReverseDoubleLine id={"double-red-line-center"} color={"red"} primaryColor={""} />
                </div>
                <div className="absolute top-0 left-0 mt-[11.15%] ml-[0%]">
                    <Line id={"red-line-top-left"} color={"red"} primaryColor={""} />
                </div>
                <div className="absolute bottom-0 left-0 mb-[16.85%] ml-[7.19%]">
                    <ReverseDoubleLine id={"double-red-line-bottom-left"} color={"red"} primaryColor={""} />
                </div>
                <div className="absolute bottom-0 left-0 mb-[6.3%] ml-[25.44%]">
                    <Amaryllis id={"amaryllis-red-bottom-left"} gradientColor1={"#FF2400"} gradientColor2={"#991600"} stopColor={""} />
                </div>
                <div className="absolute top-0 left-0 mt-[14.8%] ml-[12.95%]">
                    <Amaryllis id={"amaryllis-red-top-left"} gradientColor1={"#FF2400"} gradientColor2={"#991600"} stopColor={""} />
                </div>
                <div id="first-project-link" className="z-10 absolute w-[512px] h-[256px] rounded-[30px] top-0 left-0 mt-[4.5%] ml-[21.65%] overflow-hidden">
                    <a target="_blank" href={"https://ypsilon-64fba2.webflow.io/"} rel="noopener noreferrer">
                        <Image className="w-[100%]" src={FirstProject} alt="first-project-picture"></Image>
                    </a>
                </div>
                <div id="second-project-link" className="z-10 absolute w-[512px] h-[256px] rounded-[30px] top-0 left-0 mt-[21.5%] ml-[9.2%] overflow-hidden">
                    <a target="_blank" href={"https://kbox-preprod.webflow.io/"} rel="noopener noreferrer">
                        <Image className="w-[100%]" src={SecondProject} alt="second-project-picture"></Image>
                    </a>
                </div>
                <div id="third-project-link" className="z-10 absolute w-[512px] h-[256px] rounded-[30px] bottom-0 right-0 mb-[4.5%] mr-[14.3%] overflow-hidden">
                    <a target="_blank" href={"https://www.ingeva.fr/"} rel="noopener noreferrer">
                        <Image className="w-[100%]" src={ThirdProject} alt="third-project-picture"></Image>
                    </a>
                </div>
            </div>
        </section >
    )
}