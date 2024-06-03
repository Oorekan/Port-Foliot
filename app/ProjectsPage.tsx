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

export default function ProjectPage() {
    return (
        <div className="relative w-screen h-screen bg-onyx-black bg-[url('../public/noisy-background.png')] overflow-hidden">
            <div className="absolute inset-0 h-full w-full bg-transparent bg-[linear-gradient(to_right,rgb(255,255,255,0.2),transparent_1px),linear-gradient(to_bottom,rgb(255,255,255,0.2),transparent_1px)] bg-[size:5%_10%]">
                <div className="absolute w-full bottom-0 z-10">
                    <Image className="mx-[25%]" src={Project_Picture} width={1280} height={0} alt="projects-picture"></Image>
                </div>
                <div className="absolute flex flex-col top-0 right-0 mt-[200px] mr-[120px]">
                    <h2 className="bg-gradient-to-b from-[#999999] to-white inline-block text-transparent bg-clip-text text-[82px] font-akiraExpanded mb-[-50px]" style={{ WebkitTextStroke: '1px #999999' }}>
                        PROJECTS
                    </h2>
                    <h2 className="bg-gradient-to-b from-[#999999] to-white inline-block text-onyx-black bg-clip-text text-[82px] font-akiraExpanded mb-[-50px]" style={{ WebkitTextStroke: '2px transparent' }}>
                        PROJECTS
                    </h2>
                    <h2 className="bg-gradient-to-b from-[#999999] to-white inline-block text-onyx-black bg-clip-text text-[82px] font-akiraExpanded" style={{ WebkitTextStroke: '2px transparent' }}>
                        PROJECTS
                    </h2>
                </div>
                <div id="double-red-line-top-right" className="absolute top-0 right-0 mt-[88px] mr-[384px]">
                    <Image className="w-[100%]" src={Double_Red_Line_SVG} alt="sparkle-icon-svg"></Image>
                </div>
                <div id="contact-top-right" className="absolute top-0 right-0 mt-[73px] mr-[218px]">
                    <h3 className="bg-gradient-to-b from-[#991600] to-scarlet-red inline-block text-transparent bg-clip-text text-[22px] font-akiraExpanded">
                        Contact
                    </h3>
                </div>
                <div id="amaryllis-white-bottom-right" className="absolute bottom-0 right-0 mb-[343px] mr-[152px]">
                    <Image className="w-[80px]" src={Amaryllis_White_SVG} alt="sparkle-icon-svg"></Image>
                </div>
                <div id="double-white-line-bottom-right" className="absolute bottom-0 right-0 mb-[96px] mr-[138px]">
                    <Image className="w-[100%]" src={Double_White_Line_SVG} alt="sparkle-icon-svg"></Image>
                </div>
                <div id="double-white-line-center" className="absolute bottom-0 right-0 mb-[384px] mr-[648px]">
                    <Image className="w-[100%]" src={Double_White_Line_SVG} alt="sparkle-icon-svg"></Image>
                </div>
                <div id="double-red-line-center" className="absolute top-0 left-0 mt-[376px] ml-[680px]">
                    <Image className="w-[100%]" src={Double_Red_Line_SVG} alt="sparkle-icon-svg"></Image>
                </div>
                <div id="red-line-top-left" className="absolute top-0 left-0 mt-[191px] mr-[648px]">
                    <Image className="w-[100%]" src={Red_Line_SVG} alt="sparkle-icon-svg"></Image>
                </div>
                <div id="double-red-line-bottom-left" className="absolute bottom-0 left-0 mb-[191px] ml-[139px]">
                    <Image className="w-[100%]" src={Double_Red_Line_SVG} alt="sparkle-icon-svg"></Image>
                </div>
                <div id="amaryllis-red-bottom-left" className="absolute bottom-0 left-0 mb-[104px] ml-[489px]">
                    <Image className="w-[80px]" src={Amaryllis_Red_SVG} alt="sparkle-icon-svg"></Image>
                </div>
                <div id="amaryllis-red-top-left" className="absolute left-0 top-0 ml-[201px] mt-[295px]">
                    <Image className="w-[80px]" src={Amaryllis_Red_SVG} alt="sparkle-icon-svg"></Image>
                </div>
                <div className="absolute w-[512px] h-[256px] rounded-[30px] top-0 left-0 mt-[70px] ml-[450px] overflow-hidden">
                    <Image className="w-[100%]" src={FirstProject} alt="first-project-picture"></Image>
                </div>
                <div className="absolute w-[512px] h-[256px] rounded-[30px] top-0 left-0 mt-[400px] ml-[130px] overflow-hidden">
                    <Image className="w-[100%]" src={SecondProject} alt="second-project-picture"></Image>
                </div>
                <div className="absolute w-[512px] h-[256px] rounded-[30px] bottom-0 right-0 mb-[70px] mr-[270px] overflow-hidden">
                    <Image className="w-[100%]" src={ThirdProject} alt="third-project-picture"></Image>
                </div>
            </div>
        </div>
    )
}