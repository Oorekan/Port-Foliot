'use client'

import { useEffect } from "react";

import Link from "next/link"

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

import Amaryllis from "@/components/svg/Amaryllis"
import CrescentMoon from "@/components/svg/CrescentMoon"
import Sparkles from "@/components/svg/Sparkles"
import Line from "@/components/svg/Line"
import DoubleLine from "@/components/svg/DoubleLine"
import ReverseDoubleLine from "@/components/svg/ReverseDoubleLine"

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
    useEffect(() => {
        //*-------------------- WHITE GRID --------------------*//
        let tl_white_grid = gsap.timeline({})
        tl_white_grid.fromTo("#white_grid", {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 0.7,
            ease: 'linear'
        })
        //* -------------------- LEFT PARAGRAPH -------------------- *//
        let tl_left_paragraph = gsap.timeline({})
        tl_left_paragraph.fromTo("#paragraph_1", {
            x: -50,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 0.7
        })
        tl_left_paragraph.fromTo("#paragraph_2", {
            x: -50,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 0.7
        }, ">-0.3")
        tl_left_paragraph.fromTo("#paragraph_3", {
            x: -50,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 0.7
        }, ">-0.3")
        //* -------------------- RIGHT PARAGRAPH -------------------- *//
        let tl_right_paragraph = gsap.timeline({})
        tl_right_paragraph.fromTo("#paragraph_4", {
            x: 50,
            opacity: 0
        }, {
            x: 0,
            opacity: 1,
            duration: 0.7,
            delay: 0.2
        })
        //* -------------------- RED LINES -------------------- *//
        let tl_red_lines = gsap.timeline({})
        tl_red_lines.fromTo("#double_red_line_1", {
            x: 150,
            opacity: 0,
            scale: 0
        }, {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            delay: 0.2
        })
        tl_red_lines.fromTo("#double_red_line_2", {
            x: 150,
            opacity: 0,
            scale: 0
        }, {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7
        }, ">-0.3")
        tl_red_lines.fromTo("#red_line_1", {
            x: -150,
            opacity: 0,
            scale: 0
        }, {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7
        }, ">-0.3")
        //* -------------------- WHITE LINES -------------------- *//
        let tl_white_lines = gsap.timeline({})
        tl_white_lines.fromTo("#double_white_line_1", {
            x: -150,
            opacity: 0,
            scale: 0
        }, {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7,
            delay: 0.6
        })
        tl_white_lines.fromTo("#white_line_1", {
            x: 50,
            opacity: 0,
            scale: 0
        }, {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.7
        }, ">-0.3")
        //* -------------------- RED AMARYLLIS -------------------- *//
        let tl_red_amaryllis = gsap.timeline({})
        tl_red_amaryllis.fromTo("#red_amaryllis_1", {
            rotate: 50,
            opacity: 0,
        }, {
            rotate: 0,
            opacity: 1,
            duration: 0.7
        })
        tl_red_amaryllis.fromTo("#red_amaryllis_2", {
            rotate: 50,
            opacity: 0,
        }, {
            rotate: 0,
            opacity: 1,
            duration: 0.7
        }, ">-0.3")
        //* -------------------- WHITE AMARYLLIS -------------------- *//
        let tl_white_amaryllis = gsap.timeline({})
        tl_white_amaryllis.fromTo("#white_amaryllis_1", {
            rotate: 50,
            opacity: 0,
        }, {
            rotate: 0,
            opacity: 1,
            delay: 0.6,
            duration: 0.7
        })
        //* -------------------- CRESCENT MOON -------------------- *//
        let tl_crescent_moon = gsap.timeline({})
        tl_crescent_moon.fromTo("#crescent_moon", {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 0.7
        })
        //* -------------------- WHITE SPARKLES -------------------- *//
        let tl_white_sparkles = gsap.timeline({})
        tl_white_sparkles.fromTo("#white_sparkle_1", {
            rotate: -50,
            opacity: 0,
        }, {
            rotate: 0,
            opacity: 1,
            duration: 0.7
        })
        tl_white_sparkles.fromTo("#white_sparkle_2", {
            rotate: -50,
            opacity: 0,
        }, {
            rotate: 0,
            opacity: 1,
            duration: 0.7
        }, ">-0.3")
        //* -------------------- RED SPARKLES -------------------- *//
        let tl_red_sparkles = gsap.timeline({})
        tl_red_sparkles.fromTo("#red_sparkle_1", {
            rotate: -50,
            opacity: 0,
        }, {
            rotate: 0,
            opacity: 1,
            duration: 0.7,
            delay: 0.2
        })
        //* -------------------- CONTACT -------------------- *//
        let tl_contact = gsap.timeline({})
        tl_contact.fromTo("#contact", {
            x: 20,
            opacity: 0,
        }, {
            x: 0,
            opacity: 1,
            duration: 0.7
        })
        //* -------------------- FOOTER -------------------- *//
        let tl_footer = gsap.timeline({})
        tl_footer.fromTo("#contact_container", {
            y: 100,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.7,
            delay: 0.3
        })
        //* -------------------- NAMES -------------------- *//
        let tl_names = gsap.timeline({})
        tl_names.fromTo("#first_name", {
            y: 50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.7
        })
        tl_names.fromTo("#last_name", {
            y: 50,
            opacity: 0,
        }, {
            y: 0,
            opacity: 1,
            duration: 0.7,
        }, ">-0.3")
        //* -------------------- KILL -------------------- *//
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [])
    return (
        <>
            <section className="relative w-screen max-w-full h-full min-h-screen overflow-hidden lg:h-screen">
                <div id="background" className="w-screen max-w-full h-full min-h-screen bg-onyx-black bg-[url('../public/noisy-background.png')]">
                    <div id="white_grid" className="w-screen max-w-full h-full min-h-screen bg-[linear-gradient(to_right,rgb(255,255,255,0.2),transparent_1px),linear-gradient(to_bottom,rgb(255,255,255,0.2),transparent_1px)] bg-[size:20%_10%] lg:grid lg:grid-rows-10 lg:grid-cols-[repeat(20,minmax(0,1fr))] lg:gap-4 lg:bg-[size:5%_10%]">
                        <div className="relative flex justify-between items-center py-10 mx-5 lg:hidden lg:py-0 lg:mx-0 lg:row-start-1 lg:col-start-[16] lg:col-span-2 lg:place-self-end">
                            <Link href="/">
                                <CrescentMoon id={"crescent_moon"} gradientColor1={"#FF2400"} gradientColor2={"#991600"} stopColor={"red"} />
                            </Link>
                            <Link href="#contact_container" scroll={true}>
                                <h3 id="contact" className="inline-block text-2xl text-transparent bg-clip-text font-akiraExpanded bg-gradient-to-b from-[#991600] to-scarlet-red">
                                    Contact
                                </h3>
                            </Link>
                        </div>
                        <div className="relative flex flex-col text-center py-5 lg:row-start-2 lg:row-span-2 lg:col-start-2 lg:col-span-12 lg:place-self-start">
                            <h1 id="first_name" className="relative inline-block text-6xl text-transparent bg-clip-text font-japaneseRobot bg-gradient-to-b from-[#991600] to-scarlet-red lg:text-[102px]" style={{ WebkitTextStroke: '1px transparent' }}>
                                Mentions
                            </h1>
                            <h1 id="last_name" className="relative text-6xl font-japaneseRobot text-transparent lg:text-[102px]" style={{ WebkitTextStroke: '1px white' }}>
                                Legales
                            </h1>
                        </div>
                        <div className="relative inline-block px-10 py-14 lg:row-start-3 lg:row-span-3 lg:col-start-[15] lg:col-span-4 lg:place-self-center">
                            <p id="paragraph_4" className="relative text-xl text-transparent bg-clip-text font-danzza bg-gradient-to-b from-[#991600] to-scarlet-red">
                                Conformément aux dispositions de la loi n° 2004-575 du 21 juin 2004 pour la confiance en l&apos;économie numérique, il est précisé aux utilisateurs du site l&apos;identité des différents intervenants dans le cadre de sa réalisation et de son suivi.
                            </p>
                            <div className="relative flex justify-end mt-2">
                                <ReverseDoubleLine id={"double_red_line_1"} color={"red"} primaryColor={"red"} />
                            </div>
                        </div>
                        <div className="relative flex flex-col gap-12 px-10 py-10 lg:row-start-6 lg:gap-6 lg:col-start-2 lg:col-span-10 lg:place-content-center">
                            <div>
                                <h2 id="paragraph_1" className="relative bg-gradient-to-b from-[#991600] to-scarlet-red text-transparent bg-clip-text text-3xl font-danzza">
                                    Édition du site
                                </h2>
                                <p id="paragraph_1" className="relative text-white text-lg font-danzza">
                                    Le présent site, accessible à l’URL <Link href={"https://brandonmonge.fr"} className="underline">https://brandonmonge.fr</Link> (le « Site »), est édité par Brandon Monge.
                                </p>
                            </div>
                            <div>
                                <h2 id="paragraph_2" className="relative bg-gradient-to-b from-[#991600] to-scarlet-red text-transparent bg-clip-text text-3xl font-danzza">
                                    Hébergement
                                </h2>
                                <div className="relative inline-block">
                                    <p id="paragraph_2" className="relative text-white text-lg font-danzza">
                                        Le Site est hébergé par la société Netlify, situé 2325 3RD STREET,SUITE 215, SAN FRANCISCO, CA 94107 (USA).
                                    </p>
                                    <div className="relative flex justify-end mt-2">
                                        <ReverseDoubleLine id={"double_red_line_2"} color={"red"} primaryColor={"black"} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <h2 id="paragraph_3" className="relative bg-gradient-to-b from-[#991600] to-scarlet-red text-transparent bg-clip-text text-3xl font-danzza">
                                    Directeur de publication
                                </h2>
                                <p id="paragraph_3" className="relative text-white text-lg font-danzza">
                                    Le Directeur de la publication du Site est Brandon Monge.
                                </p>
                                <div className="relative mt-2">
                                    <DoubleLine id={"double_white_line_1"} color={"white"} primaryColor={"black"} />
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:block lg:row-start-1 lg:col-start-8 lg:place-content-end">
                            <Sparkles id={"white_sparkle_1"} gradientColor1={"#999999"} gradientColor2={"white"} stopColor={"white"} />
                        </div>
                        <div className="hidden lg:block lg:row-start-2 lg:col-start-[19] lg:place-content-end">
                            <Sparkles id={"white_sparkle_2"} gradientColor1={"#999999"} gradientColor2={"white"} stopColor={"white"} />
                        </div>
                        <div className="hidden lg:block lg:row-start-4 lg:col-start-1 lg:col-span-2 lg:place-self-center">
                            <Amaryllis id={"red_amaryllis_1"} gradientColor1={"#FF2400"} gradientColor2={"#991600"} stopColor={"red"} />
                        </div>
                        <div className="hidden lg:block lg:row-start-4 lg:row-span-2 lg:col-start-12 lg:col-span-2 lg:place-self-center">
                            <CrescentMoon id={"crescent_moon"} gradientColor1={"#FF2400"} gradientColor2={"#991600"} stopColor={"red"} />
                        </div>
                        <div className="hidden lg:block lg:row-start-8 lg:row-span-2 lg:col-start-9 lg:col-span-2 lg:place-self-center">
                            <Amaryllis id={"red_amaryllis_2"} gradientColor1={"#FF2400"} gradientColor2={"#991600"} stopColor={"red"} />
                        </div>
                        <div className="hidden lg:block lg:row-start-7 lg:col-start-[15] lg:col-span-2 lg:place-self-center">
                            <Amaryllis id={"white_amaryllis_1"} gradientColor1={"white"} gradientColor2={"#999999"} stopColor={"white"} />
                        </div>
                        <div className="hidden lg:block lg:row-start-4 lg:col-start-12 lg:place-content-end">
                            <Sparkles id={"red_sparkle_1"} gradientColor1={"#FF2400"} gradientColor2={"#991600"} stopColor={"red"} />
                        </div>
                        <div className="hidden lg:block lg:row-start-8 lg:place-content-end">
                            <Line id={"red_line_1"} color={"red"} primaryColor={"red"} />
                        </div>
                        <div className="hidden lg:block lg:row-start-8 lg:col-start-[20] lg:place-self-start">
                            <Line id={"white_line_1"} color={"white"} primaryColor={"black"} />
                        </div>
                        <div id="contact_container" className="relative mt-20 px-10 pb-20 lg:mt-0 lg:px-0 lg:pb-0 lg:row-start-10 lg:col-start-2 lg:col-[18_/_span_18] lg:place-content-center">
                            <div id="contact_wrapper" className="relative flex flex-col gap-5">
                                <div id='contact_links_wrapper' className='relative flex lg:flex-row flex-col justify-between lg:gap-0 gap-4'>
                                    <div id="contact_external_links_wrapper" className="relative flex lg:flex-row flex-col gap-4 lg:items-center">
                                        <div>
                                            <a id="contact_email_link" className="inline-block text-[22px] text-transparent bg-clip-text font-akiraExpanded bg-gradient-to-b from-[#999999] to-white lg:hover:text-white" href='mailto:brandon.monge@outlook.fr'>
                                                Email
                                            </a>
                                        </div>
                                        <div className='lg:block hidden w-[10px] h-[10px] bg-gradient-to-b from-[#999999] to-white rounded-full'></div>
                                        <div>
                                            <a id="contact_linkedin_link" className="inline-block text-[22px] text-transparent bg-clip-text font-akiraExpanded bg-gradient-to-b from-[#999999] to-white lg:hover:text-white" href='https://www.linkedin.com/in/brandonmonge/' target='_blank'>
                                                LinkedIn
                                            </a>
                                        </div>
                                        <div className='lg:block hidden w-[10px] h-[10px] bg-gradient-to-b from-[#999999] to-white rounded-full'></div>
                                        <div>
                                            <a id="contact_instagram_link" className="inline-block text-[22px] text-transparent bg-clip-text font-akiraExpanded bg-gradient-to-b from-[#999999] to-white lg:hover:text-white" href='https://www.instagram.com/brand_mng/' target='_blank'>
                                                Instagram
                                            </a>
                                        </div>
                                        <div className='lg:block hidden w-[10px] h-[10px] bg-gradient-to-b from-[#999999] to-white rounded-full'></div>
                                        <div>
                                            <a id="contact_cv_link" className="inline-block text-[22px] font-akiraExpanded bg-gradient-to-b from-[#999999] to-white text-transparent bg-clip-text hover:text-white" href='https://drive.google.com/file/d/1-YfO7nBcUjoRua1dq_iVyGF3SvtOd0Ad/view?usp=sharing' target='_blank'>
                                                CV
                                            </a>
                                        </div>
                                    </div>
                                    <h4 className="inline-block text-[22px] text-transparent bg-clip-text font-akiraExpanded bg-gradient-to-b from-[#999999] to-white lg:hover:text-white">
                                        <Link href="/">
                                            Page d&apos;accueil
                                        </Link>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </section >
        </>
    )
}