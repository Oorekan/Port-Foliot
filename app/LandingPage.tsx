'use client'

import { useEffect } from "react";
import Image from "next/image";
import LandingPicture from "../public/brandon-monge-portfolio-cover-removebg-preview-2-removebg-preview.png"
import ScrollAnimation from "@/components/ScrollAnimation";
import CrescentMoon from "@/components/svg/CrescentMoon"
import Amaryllis from "@/components/svg/Amaryllis"
import Sparkles from "@/components/svg/Sparkles"
import DoubleLine from "@/components/svg/DoubleLine"
import ReverseDoubleLine from "@/components/svg/ReverseDoubleLine"
import Line from "@/components/svg/Line"

export default function LandingPage() {
    useEffect(() => {
        ScrollAnimation()
    }, [])
    return (
        <section id="header_section" className="w-screen h-screen overflow-hidden">
            <div id="background" className="fixed inset-0 -z-10 h-screen w-screen bg-onyx-black bg-[url('../public/noisy-background.png')] bg-[size:5%_10%] overflow-hidden">
                <div id="white_grid" className="absolute inset-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,rgb(255,255,255,0.2),transparent_1px),linear-gradient(to_bottom,rgb(255,255,255,0.2),transparent_1px)] bg-[size:5%_10%]">
                    <div className="absolute w-full bottom-0 z-10">
                        <Image id="profile_picture" className="mx-auto" src={LandingPicture} width={1280} height={0} alt="brandon-monge-picture"></Image>
                    </div>
                    <div className="inline-block top-0 left-0 mt-[5.5%] ml-[6.5%]">
                        <h1 id="first_name" className="bg-gradient-to-b from-[#991600] to-scarlet-red inline-block text-transparent bg-clip-text text-[102px] font-japaneseRobot" style={{ WebkitTextStroke: '1px transparent' }}>
                            Brandon
                        </h1>
                        <h1 id="last_name" className="mt-[-70px] text-transparent text-[102px] font-japaneseRobot" style={{ WebkitTextStroke: '1px white' }}>
                            Monge
                        </h1>
                    </div>
                    <div className="absolute flex flex-col top-0 right-0 mt-[10%] mr-[16.7%]">
                        <h2 id="keyword_1" className="z-20 bg-gradient-to-b from-[#999999] to-white inline-block text-transparent bg-clip-text text-[82px] font-akiraExpanded mb-[-50px]" style={{ WebkitTextStroke: '1px transparent' }}>
                            CREA
                        </h2>
                        <h2 id="keyword_2" className="z-10 bg-gradient-to-b from-[#999999] to-white inline-block text-onyx-black bg-clip-text text-[82px] font-akiraExpanded mb-[-50px]" style={{ WebkitTextStroke: '1px transparent' }}>
                            CREA
                        </h2>
                        <h2 id="keyword_3" className="bg-gradient-to-b from-[#999999] to-white inline-block text-onyx-black bg-clip-text text-[82px] font-akiraExpanded mb-[-50px]" style={{ WebkitTextStroke: '1px transparent' }}>
                            CREA
                        </h2>
                    </div>
                    <div className="absolute flex flex-col bottom-0 left-0 mb-[4.2%] ml-[16.7%]">
                        <h2 id="keyword_4" className="z-20 bg-gradient-to-b from-[#991600] to-scarlet-red inline-block text-transparent bg-clip-text text-[82px] font-akiraExpanded mb-[-50px]" style={{ WebkitTextStroke: '1px transparent' }}>
                            DEV
                        </h2>
                        <h2 id="keyword_5" className="z-10 bg-gradient-to-b from-[#991600] to-scarlet-red inline-block text-onyx-black bg-clip-text text-[82px] font-akiraExpanded mb-[-50px]" style={{ WebkitTextStroke: '1px transparent' }}>
                            DEV
                        </h2>
                        <h2 id="keyword_6" className="bg-gradient-to-b from-[#991600] to-scarlet-red inline-block text-onyx-black bg-clip-text text-[82px] font-akiraExpanded" style={{ WebkitTextStroke: '1px transparent' }}>
                            DEV
                        </h2>
                    </div>
                    <div className="absolute flex flex-col bottom-0 right-0 mb-[10%] mr-[9.3%]">
                        <h2 id="japanese_word_1" className="z-10 bg-gradient-to-b from-[#999999] to-white inline-block text-onyx-black bg-clip-text text-[102px] font-akiraExpanded mb-[-50px]" style={{ WebkitTextStroke: '1px transparent' }}>
                            新月
                        </h2>
                        <h2 id="japanese_word_2" className="bg-gradient-to-b from-[#991600] to-scarlet-red inline-block text-transparent bg-clip-text text-[102px] font-akiraExpanded">
                            新月
                        </h2>
                    </div>
                    <div className="absolute top-0 left-0 mt-[20.4%] ml-[17.93%]">
                        <Amaryllis id={"red_amaryllis_1"} gradientColor1={"#FF2400"} gradientColor2={"#991600"} stopColor={"red"} />
                    </div>
                    <div className="absolute bottom-0 left-0 mb-[15.53%] ml-[11.25%]">
                        <Sparkles id={"red_sparkle_1"} gradientColor1={"#FF2400"} gradientColor2={"#991600"} stopColor={"red"} />
                    </div>
                    <div className="absolute bottom-0 left-0 mb-[17.6%] ml-[40.5%]">
                        <Amaryllis id={"red_amaryllis_2"} gradientColor1={"#FF2400"} gradientColor2={"#991600"} stopColor={"red"} />
                    </div>
                    <div className="absolute top-0 right-0 mt-[21%] mr-[41.5%]">
                        <CrescentMoon id={"crescent_moon"} gradientColor1={"#FF2400"} gradientColor2={"#991600"} stopColor={"red"} />
                    </div>
                    <div className="absolute top-0 right-0 mt-[9.95%] mr-[13.63%]">
                        <Sparkles id={"white_sparkle_1"} gradientColor1={"#999999"} gradientColor2={"white"} stopColor={"white"} />
                    </div>
                    <div className="absolute top-0 right-0 mt-[23.2%] mr-[-2.2%]">
                        <Amaryllis id={"white_amaryllis_1"} gradientColor1={"white"} gradientColor2={"#999999"} stopColor={"white"} />
                    </div>
                    <div className="absolute top-0 left-0 mt-[4.32%] ml-[33.72%]">
                        <Sparkles id={"white_sparkle_2"} gradientColor1={"#999999"} gradientColor2={"white"} stopColor={"white"} />
                    </div>
                    <div className="absolute top-0 right-0 mt-[5.2%] mr-[20%]">
                        <ReverseDoubleLine id={"double_red_line_1"} color={"red"} primaryColor={"red"} />
                    </div>
                    <div className="absolute top-0 right-0 mt-[4.4%] mr-[11.3%]">
                        <h3 id="contact" className="bg-gradient-to-b from-[#991600] to-scarlet-red inline-block text-transparent bg-clip-text text-[22px] font-akiraExpanded">
                            Contact
                        </h3>
                    </div>
                    <div className="absolute top-0 left-0 mt-[27.67%] ml-[37.2%]">
                        <ReverseDoubleLine id={"double_red_line_2"} color={"red"} primaryColor={"black"} />
                    </div>
                    <div className="absolute bottom-0 left-0 mb-[4.8%] ml-[16.7%]">
                        <DoubleLine id={"double_red_line_3"} color={"red"} primaryColor={"red"} />
                    </div>
                    <div className="absolute bottom-0 right-0 mb-[5.62%] mr-[7.15%]">
                        <DoubleLine id={"double_white_line_1"} color={"white"} primaryColor={"black"} />
                    </div>
                    <div className="absolute bottom-0 right-0 mb-[10.9%] mr-[27.2%]">
                        <Line id={"white_line_1"} color={"white"} primaryColor={"black"} />
                    </div>
                    <div className="absolute bottom-0 right-0 mb-[22.48%] mr-[32.2%]">
                        <DoubleLine id={"double_white_line_2"} color={"white"} primaryColor={"black"} />
                    </div>
                    <div className="absolute bottom-0 left-0 mb-[22.1%] ml-[0%]">
                        <Line id={"red_line_1"} color={"red"} primaryColor={"red"} />
                    </div>
                </div>
            </div >
        </section >
    );
}
