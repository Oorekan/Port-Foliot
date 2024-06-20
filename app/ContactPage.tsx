'use client'

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollAnimation from '@/components/ScrollAnimation';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    useEffect(() => {
        ScrollAnimation();
        // let tl_contact_page = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: "#contact_section",
        //         markers: true
        //     }
        // })
        // tl_contact_page.fromTo("#contact_section", {
        //     y: "50%",
        // }, {
        //     y: "0%",
        // });
        // return () => {
        //     ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        // };
    }, [])
    return (
        <>
            <section id="contact_section" className="relative w-screen h-full max-w-full bg-onyx-black bg-opacity-90 overflow-hidden">
                <div id="contact_container" className="relative p-10">
                    <div id="contact_wrapper" className="relative flex flex-col gap-5">
                        <h2 id="contact_title" className="inline-block lg:text-[82px] text-[42px] text-transparent font-akiraExpanded bg-gradient-to-b from-[#991600] to-scarlet-red bg-clip-text" style={{ WebkitTextStroke: '1px transparent' }}>
                            Contact
                        </h2>
                        <div id='contact_links_wrapper' className='relative flex lg:flex-row flex-col justify-between lg:gap-0 gap-4'>
                            <div id="contact_external_links_wrapper" className="relative flex lg:flex-row flex-col gap-4 lg:items-center">
                                <a id="contact_email_link" className="inline-block text-[22px] font-akiraExpanded bg-gradient-to-b from-[#999999] to-white text-transparent bg-clip-text hover:text-white" href='mailto:brandon.monge@outlook.fr'>
                                    Email
                                </a>
                                <div className='lg-relative hidden w-[10px] h-[10px] bg-gradient-to-b from-[#999999] to-white rounded-full'></div>
                                <a id="contact_linkedin_link" className="inline-block text-[22px] font-akiraExpanded bg-gradient-to-b from-[#999999] to-white text-transparent bg-clip-text hover:text-white" href='https://www.linkedin.com/in/brandonmonge/' target='_blank'>
                                    LinkedIn
                                </a>
                                <div className='lg-relative hidden w-[10px] h-[10px] bg-gradient-to-b from-[#999999] to-white rounded-full'></div>
                                <a id="contact_instagram_link" className="inline-block text-[22px] font-akiraExpanded bg-gradient-to-b from-[#999999] to-white text-transparent bg-clip-text hover:text-white" href='https://www.instagram.com/brand_mng/' target='_blank'>
                                    Instagram
                                </a>
                            </div>
                            <a id="contact_terms_of_use" className="inline-block text-[22px] font-akiraExpanded bg-gradient-to-b from-[#999999] to-white text-transparent bg-clip-text hover:text-white" href='/'>
                                Mentions legales
                            </a>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}