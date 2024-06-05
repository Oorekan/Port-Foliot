'use client'

import Image from "next/image";
import LandingPicture from "../public/brandon-monge-portfolio-cover-removebg-preview-2-removebg-preview.png"
import Amaryllis_Red_SVG from "../public/amaryllis-red-icon.svg"
import Amaryllis_White_SVG from "../public/amaryllis-white-icon.svg"
import Sparkle_Red_SVG from "../public/sparkle-red-icon.svg"
import Sparkle_White_SVG from "../public/sparkle-white-icon.svg"
import Red_Moon_SVG from "../public/crescent-moon-red-icon.svg"
import Double_Red_Line_SVG from "../public/double-red-line.svg"
import Double_White_Line_SVG from "../public/double-white-line.svg"
import Red_Line_SVG from "../public/red-line.svg"
import White_Line_SVG from "../public/white-line.svg"
import { useEffect } from "react";
import SwitchColorScroll from "@/components/SwitchColorScroll";

export default function LandingPage() {
    useEffect(() => {
        SwitchColorScroll()
    }, [])
    return (
        <div className="w-screen h-screen">
            <div id="background" className="fixed inset-0 -z-10 h-screen w-screen bg-onyx-black bg-[url('../public/noisy-background.png')] bg-[size:5%_10%] overflow-hidden">
                <div className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,rgb(255,255,255,0.2),transparent_1px),linear-gradient(to_bottom,rgb(255,255,255,0.2),transparent_1px)] bg-[size:5%_10%]">
                    <div className="absolute w-full bottom-0 z-10">
                        <Image id="profile_picture" className="mx-auto" src={LandingPicture} width={1280} height={0} alt="brandon-monge-picture"></Image>
                    </div>
                    <div className="inline-block mt-[80px] ml-[125px]">
                        <h1 id="first_name" className="bg-gradient-to-b from-[#991600] to-scarlet-red inline-block text-transparent bg-clip-text text-[102px] font-japaneseRobot" style={{ WebkitTextStroke: '2px white' }}>
                            Brandon
                        </h1>
                        <h1 id="last_name" className="mt-[-70px] text-transparent text-[102px] font-japaneseRobot" style={{ WebkitTextStroke: '2px white' }}>
                            Monge
                        </h1>
                    </div>
                    <div className="absolute flex flex-col left-0 bottom-0 mb-[105px] ml-[320px]">
                        <h2 id="keyword_4" className="z-20 bg-gradient-to-b from-[#991600] to-scarlet-red inline-block text-transparent bg-clip-text text-[82px] font-akiraExpanded mb-[-50px]" style={{ WebkitTextStroke: '1px #991600' }}>
                            DEV
                        </h2>
                        <h2 id="keyword_5" className="z-10 bg-gradient-to-b from-[#991600] to-scarlet-red inline-block text-onyx-black bg-clip-text text-[82px] font-akiraExpanded mb-[-50px]" style={{ WebkitTextStroke: '2px transparent' }}>
                            DEV
                        </h2>
                        <h2 id="keyword_6" className="bg-gradient-to-b from-[#991600] to-scarlet-red inline-block text-onyx-black bg-clip-text text-[82px] font-akiraExpanded" style={{ WebkitTextStroke: '2px transparent' }}>
                            DEV
                        </h2>
                    </div>
                    <div className="absolute flex flex-col top-0 right-0 mt-[200px] mr-[320px]">
                        <h2 id="keyword_1" className="z-20 bg-gradient-to-b from-[#999999] to-white inline-block text-transparent bg-clip-text text-[82px] font-akiraExpanded mb-[-50px]" style={{ WebkitTextStroke: '1px #999999' }}>
                            CREA
                        </h2>
                        <h2 id="keyword_2" className="z-10 bg-gradient-to-b from-[#999999] to-white inline-block text-onyx-black bg-clip-text text-[82px] font-akiraExpanded mb-[-50px]" style={{ WebkitTextStroke: '2px transparent' }}>
                            CREA
                        </h2>
                        <h2 id="keyword_3" className="bg-gradient-to-b from-[#999999] to-white inline-block text-onyx-black bg-clip-text text-[82px] font-akiraExpanded" style={{ WebkitTextStroke: '2px transparent' }}>
                            CREA
                        </h2>
                    </div>
                    <div className="absolute flex flex-col bottom-0 right-0 mb-[200px] mr-[180px]">
                        <h2 id="japanese_word_1" className="z-10 bg-gradient-to-b from-[#999999] to-white inline-block text-onyx-black bg-clip-text text-[102px] font-akiraExpanded mb-[-50px]" style={{ WebkitTextStroke: '2px transparent' }}>
                            新月
                        </h2>
                        <h2 id="japanese_word_2" className="bg-gradient-to-b from-[#991600] to-scarlet-red inline-block text-transparent bg-clip-text text-[102px] font-akiraExpanded">
                            新月
                        </h2>
                    </div>
                    <div className="absolute left-0 top-0 ml-[296px] mt-[392px]">
                        <Image id="red_amaryllis_1" className="w-[80px]" src={Amaryllis_Red_SVG} alt="sparkle-icon-svg"></Image>
                    </div>
                    <div className="absolute left-0 bottom-0 ml-[263px] mb-[358px]">
                        <Image id="red_sparkle_1" className="w-[50px]" src={Sparkle_Red_SVG} alt="sparkle-icon-svg"></Image>
                    </div>
                    <div className="absolute top-0 left-0 mt-[487px] ml-[777px]">
                        <Image id="red_amaryllis_2" className="w-[80px]" src={Amaryllis_Red_SVG} alt="sparkle-icon-svg"></Image>
                    </div>
                    <div className="absolute top-0 right-0 mt-[280px] mr-[780px]">
                        <Image id="crescent_moon" className="w-[120px]" src={Red_Moon_SVG} alt="sparkle-icon-svg"></Image>
                    </div>
                    <div className="absolute top-0 right-0 mt-[167px] mr-[263px]">
                        <Image id="white_sparkle_1" className="w-[50px]" src={Sparkle_White_SVG} alt="sparkle-icon-svg"></Image>
                    </div>
                    <div className="absolute top-0 right-0 mt-[390px] mr-[-40px]">
                        <Image id="white_amaryllis_1" className="w-[80px]" src={Amaryllis_White_SVG} alt="sparkle-icon-svg"></Image>
                    </div>
                    <div className="absolute top-0 left-0 mt-[70px] ml-[647px]">
                        <Image id="white_sparkle_2" className="w-[50px]" src={Sparkle_White_SVG} alt="sparkle-icon-svg"></Image>
                    </div>
                    <div className="absolute top-0 right-0 mt-[88px] mr-[384px]">
                        <Image id="double_red_line_1" className="w-[100%]" src={Double_Red_Line_SVG} alt="sparkle-icon-svg"></Image>
                    </div>
                    <div className="absolute top-0 left-0 mt-[376px] ml-[680px]">
                        <Image id="double_red_line_2" className="w-[100%]" src={Double_Red_Line_SVG} alt="sparkle-icon-svg"></Image>
                    </div>
                    <div className="absolute bottom-0 left-0 mb-[96px] ml-[427px]">
                        <Image id="double_red_line_3" className="w-[100%]" src={Double_Red_Line_SVG} alt="sparkle-icon-svg"></Image>
                    </div>
                    <div className="absolute bottom-0 right-0 mb-[96px] mr-[138px]">
                        <Image id="double_white_line_1" className="w-[100%]" src={Double_White_Line_SVG} alt="sparkle-icon-svg"></Image>
                    </div>
                    <div className="absolute bottom-0 right-0 mb-[192px] mr-[496px]">
                        <Image id="white_line_1" className="w-[100%]" src={White_Line_SVG} alt="sparkle-icon-svg"></Image>
                    </div>
                    <div className="absolute bottom-0 right-0 mb-[384px] mr-[648px]">
                        <Image id="double_white_line_2" className="w-[100%]" src={Double_White_Line_SVG} alt="sparkle-icon-svg"></Image>
                    </div>
                    <div className="absolute bottom-0 left-0 mb-[384px] mr-[648px]">
                        <Image id="red_line_1" className="w-[100%]" src={Red_Line_SVG} alt="sparkle-icon-svg"></Image>
                    </div>
                    <div className="absolute top-0 right-0 mt-[73px] mr-[218px]">
                        <h3 id="contact" className="bg-gradient-to-b from-[#991600] to-scarlet-red inline-block text-transparent bg-clip-text text-[22px] font-akiraExpanded">
                            Contact
                        </h3>
                    </div>
                </div>
            </div >
        </div>
    );
}
