'use client'

import { useEffect } from "react";
import Image from "next/image";
import LandingPicture from "../public/brandon-monge-portfolio-cover-removebg-preview-2-removebg-preview.png"
import CrescentMoon from "@/components/svg/CrescentMoon"
import Amaryllis from "@/components/svg/Amaryllis"
import Sparkles from "@/components/svg/Sparkles"
import DoubleLine from "@/components/svg/DoubleLine"
import ReverseDoubleLine from "@/components/svg/ReverseDoubleLine"
import Line from "@/components/svg/Line"
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function LandingPage() {
    useEffect(() => {
        //*-------------------- WHITE GRID --------------------*//
        let tl_white_grid = gsap.timeline({})
        tl_white_grid.fromTo("#white_grid", {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 2,
            ease: 'linear'
        })
        //* -------------------- KEYWORDS 1 -------------------- *//
        let tl_keywords_1 = gsap.timeline({})
        tl_keywords_1.fromTo("#keyword_1", {
            y: -50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
        })
        tl_keywords_1.fromTo("#keyword_2", {
            y: -50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
        }, ">-0.3")
        tl_keywords_1.fromTo("#keyword_3", {
            y: -50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
        }, ">-0.3")
        //* -------------------- KEYWORDS 2 -------------------- *//
        let tl_keywords_2 = gsap.timeline({})
        tl_keywords_2.fromTo("#keyword_4", {
            y: -50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.7,
        })
        tl_keywords_2.fromTo("#keyword_5", {
            y: -50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
        }, ">-0.3")
        tl_keywords_2.fromTo("#keyword_6", {
            y: -50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
        }, ">-0.3")
        //* -------------------- JAPANESE WORDS -------------------- *//
        let tl_japanese_word = gsap.timeline({})
        tl_japanese_word.fromTo("#japanese_word_1", {
            y: -50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.7,
        })
        tl_japanese_word.fromTo("#japanese_word_2", {
            y: -50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
        }, ">-0.3")
        //* -------------------- RED LINES -------------------- *//
        let tl_red_lines = gsap.timeline({})
        tl_red_lines.fromTo("#double_red_line_1", {
            x: -50,
            opacity: 0,
            scale: 0
        }, {
            x: 0,
            opacity: 1,
            scale: 1
        })
        tl_red_lines.fromTo("#double_red_line_2", {
            x: -50,
            opacity: 0,
            scale: 0
        }, {
            x: 0,
            opacity: 1,
            scale: 1
        }, ">-0.3")
        tl_red_lines.fromTo("#double_red_line_3", {
            x: -50,
            opacity: 0,
            scale: 0
        }, {
            x: 0,
            opacity: 1,
            scale: 1
        }, ">-0.3")
        tl_red_lines.fromTo("#red_line_1", {
            x: -50,
            opacity: 0,
            scale: 0
        }, {
            x: 0,
            opacity: 1,
            scale: 1
        }, ">-0.3")
        //* -------------------- WHITE LINES -------------------- *//
        let tl_white_lines = gsap.timeline({})
        tl_white_lines.fromTo("#double_white_line_1", {
            x: 50,
            opacity: 0,
            scale: 0
        }, {
            x: 0,
            opacity: 1,
            scale: 1
        })
        tl_white_lines.fromTo("#double_white_line_2", {
            x: 50,
            opacity: 0,
            scale: 0
        }, {
            x: 0,
            opacity: 1,
            scale: 1
        }, ">-0.3")
        tl_white_lines.fromTo("#white_line_1", {
            x: 50,
            opacity: 0,
            scale: 0
        }, {
            x: 0,
            opacity: 1,
            scale: 1
        }, ">-0.3")
        //* -------------------- PROFILE PICTURE -------------------- *//
        let tl_profile_picture = gsap.timeline({})
        tl_profile_picture.fromTo("#profile_picture", {
            y: '10%',
            opacity: 0,
        }, {
            y: '0%',
            opacity: 1,
        })
        //* -------------------- RED AMARYLLIS -------------------- *//
        let tl_red_amaryllis = gsap.timeline({})
        tl_red_amaryllis.fromTo("#red_amaryllis_1", {
            rotate: 50,
            opacity: 0,
        }, {
            rotate: 0,
            opacity: 1,
        })
        tl_red_amaryllis.fromTo("#red_amaryllis_2", {
            rotate: 50,
            opacity: 0,
        }, {
            rotate: 0,
            opacity: 1,
        }, ">-0.3")
        //* -------------------- WHITE AMARYLLIS -------------------- *//
        let tl_white_amaryllis = gsap.timeline({})
        tl_white_amaryllis.fromTo("#white_amaryllis_1", {
            rotate: 50,
            opacity: 0,
        }, {
            rotate: 0,
            opacity: 1,
            delay: 0.6
        })
        //* -------------------- CRESCENT MOON -------------------- *//
        let tl_crescent_moon = gsap.timeline({})
        tl_crescent_moon.fromTo("#crescent_moon", {
            y: '-15%',
            opacity: 0,
        }, {
            y: '0%',
            opacity: 1,
        })
        //* -------------------- WHITE SPARKLES -------------------- *//
        let tl_white_sparkles = gsap.timeline({})
        tl_white_sparkles.fromTo("#white_sparkle_1", {
            rotate: -50,
            opacity: 0,
        }, {
            rotate: 0,
            opacity: 1,
        })
        tl_white_sparkles.fromTo("#white_sparkle_2", {
            rotate: -50,
            opacity: 0,
        }, {
            rotate: 0,
            opacity: 1,
        }, ">-0.3")
        //* -------------------- RED SPARKLES -------------------- *//
        let tl_red_sparkles = gsap.timeline({})
        tl_red_sparkles.fromTo("#red_sparkle_1", {
            rotate: -50,
            opacity: 0,
        }, {
            rotate: 0,
            opacity: 1,
        })
        //* -------------------- CONTACT -------------------- *//
        let tl_contact = gsap.timeline({})
        tl_contact.fromTo("#contact", {
            x: 20,
            opacity: 0,
        }, {
            x: 0,
            opacity: 1,
        })
        //* -------------------- NAMES -------------------- *//
        let tl_names = gsap.timeline({})
        tl_names.fromTo("#first_name", {
            y: '10%',
            opacity: 0,
        }, {
            y: '0%',
            opacity: 1,
        })
        tl_names.fromTo("#last_name", {
            y: '10%',
            opacity: 0,
        }, {
            y: '0%',
            opacity: 1,
        }, ">-0.3")
        //* -------------------- KILL -------------------- *//
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [])
    return (
        <section id="header_section" className="relative w-screen h-screen max-w-full overflow-hidden">
            <div id="background" className="fixed h-screen w-screen max-w-full overflow-hidden inset-0 bg-onyx-black bg-[url('../public/noisy-background.png')] bg-[size:5%_10%]">
                <div id="white_grid" className="absolute inset-0 h-full w-full bg-transparent lg:bg-[linear-gradient(to_right,rgb(255,255,255,0.2),transparent_1px),linear-gradient(to_bottom,rgb(255,255,255,0.2),transparent_1px)] lg:bg-[size:5%_10%] bg-[linear-gradient(to_right,rgb(255,255,255,0.2),transparent_1px),linear-gradient(to_bottom,rgb(255,255,255,0.2),transparent_1px)] bg-[size:20%_10%]">
                    <div className="absolute w-full bottom-0 z-10">
                        <Image
                            id="profile_picture"
                            className="mx-auto"
                            src={LandingPicture}
                            width={1280}
                            height={0}
                            alt="brandon-monge-picture">
                        </Image>
                    </div>
                    <div className="inline-block top-0 lg:left-0 lg:mt-[5.5%] lg:ml-[6.5%] mt-[45%] ml-[1%]">
                        <h1 id="first_name" className="bg-gradient-to-b from-[#991600] to-scarlet-red inline-block text-transparent bg-clip-text lg:text-[102px] text-[72px] font-japaneseRobot" style={{ WebkitTextStroke: '1px transparent' }}>
                            Brandon
                        </h1>
                        <h1 id="last_name" className="lg:mt-[-70px] mt-[-40px] text-transparent lg:text-[102px] text-[72px] font-japaneseRobot" style={{ WebkitTextStroke: '1px white' }}>
                            Monge
                        </h1>
                    </div>
                    <div className="lg:absolute hidden lg:flex flex-col top-0 right-0 mt-[10%] mr-[16.7%]">
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
                    <div className="lg:absolute hidden lg:flex flex-col bottom-0 left-0 mb-[4.2%] ml-[16.7%]">
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
                    <div className="absolute flex flex-col bottom-0 right-0 mb-[10%] lg:mr-[9.3%] mr-[25%]">
                        <h2 id="japanese_word_1" className="lg:z-10 bg-gradient-to-b from-[#999999] to-white inline-block text-onyx-black bg-clip-text text-[102px] font-akiraExpanded mb-[-50px]" style={{ WebkitTextStroke: '1px transparent' }}>
                            新月
                        </h2>
                        <h2 id="japanese_word_2" className="bg-gradient-to-b from-[#991600] to-scarlet-red inline-block text-transparent bg-clip-text text-[102px] font-akiraExpanded">
                            新月
                        </h2>
                    </div>
                    <div className="absolute z-[-1] lg:top-0 right-0 bottom-0 lg:mt-[21%] lg:mr-[41.5%] mb-[50%] mr-[10%]">
                        <CrescentMoon id={"crescent_moon"} gradientColor1={"#FF2400"} gradientColor2={"#991600"} stopColor={"red"} />
                    </div>
                    <div className="absolute top-0 left-0 lg:mt-[20.4%] lg:ml-[17.93%] mt-[22.5%] ml-[-10%]">
                        <Amaryllis id={"red_amaryllis_1"} gradientColor1={"#FF2400"} gradientColor2={"#991600"} stopColor={"red"} />
                    </div>
                    <div className="absolute bottom-0 left-0 lg:mb-[17.6%] lg:ml-[40.5%] mb-[77%] ml-[10.5%]">
                        <Amaryllis id={"red_amaryllis_2"} gradientColor1={"#FF2400"} gradientColor2={"#991600"} stopColor={"red"} />
                    </div>
                    <div className="absolute top-0 right-0 lg:mt-[23.2%] lg:mr-[-2.2%] mt-[100%] mr-[-10%]">
                        <Amaryllis id={"white_amaryllis_1"} gradientColor1={"white"} gradientColor2={"#999999"} stopColor={"white"} />
                    </div>
                    <div className="absolute lg:bottom-0 lg:left-0 lg:mb-[15.53%] lg:ml-[11.25%] top-0 right-0 mt-[102.1%] mr-[33.5%]">
                        <Sparkles id={"red_sparkle_1"} gradientColor1={"#FF2400"} gradientColor2={"#991600"} stopColor={"red"} />
                    </div>
                    <div className="absolute top-0 right-0 lg:mt-[9.95%] lg:mr-[13.63%] mt-[40%] mr-[1%]">
                        <Sparkles id={"white_sparkle_1"} gradientColor1={"#999999"} gradientColor2={"white"} stopColor={"white"} />
                    </div>
                    <div className="lg:block lg:absolute hidden top-0 left-0 mt-[4.32%] ml-[33.72%]">
                        <Sparkles id={"white_sparkle_2"} gradientColor1={"#999999"} gradientColor2={"white"} stopColor={"white"} />
                    </div>
                    <div className="absolute top-0 left-0 lg:mt-[5.2%] lg:ml-[72.2%] mt-[20%] ml-[23.75%]">
                        <ReverseDoubleLine id={"double_red_line_1"} color={"red"} primaryColor={"red"} />
                    </div>
                    <div className="absolute lg:left-0 top-0 right-0 lg:mt-[27.67%] lg:ml-[37.2%] mt-[85%]">
                        <ReverseDoubleLine id={"double_red_line_2"} color={"red"} primaryColor={"black"} />
                    </div>
                    <div className="lg:block lg:absolute hidden bottom-0 left-0 mb-[4.8%] ml-[16.7%]">
                        <DoubleLine id={"double_red_line_3"} color={"red"} primaryColor={"red"} />
                    </div>
                    <div className="absolute bottom-0 right-0 lg:mb-[5.62%] lg:mr-[7.15%] mb-[21.5%] mr-[-16%]">
                        <DoubleLine id={"double_white_line_1"} color={"white"} primaryColor={"black"} />
                    </div>
                    <div className="lg:block lg:absolute hidden bottom-0 right-0 mb-[22.48%] mr-[32.2%]">
                        <DoubleLine id={"double_white_line_2"} color={"white"} primaryColor={"black"} />
                    </div>
                    <div className="absolute bottom-0 left-0 lg:mb-[22.1%] ml-[0%] mb-[20%]">
                        <Line id={"red_line_1"} color={"red"} primaryColor={"red"} />
                    </div>
                    <div className="absolute bottom-0 right-0 lg:mb-[10.9%] lg:mr-[27.2%] mb-[85%] mr-[-27%]">
                        <Line id={"white_line_1"} color={"white"} primaryColor={"black"} />
                    </div>
                    <div className="absolute top-0 right-0 lg:mt-[4.4%] lg:mr-[11.3%] mt-[16%] mr-[2.5%]">
                        <h3 id="contact" className="bg-gradient-to-b from-[#991600] to-scarlet-red inline-block text-transparent bg-clip-text text-[22px] font-akiraExpanded">
                            Contact
                        </h3>
                    </div>
                </div>
            </div >
        </section >
    );
}
