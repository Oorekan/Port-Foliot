'use client'

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollAnimation from '@/components/ScrollAnimation';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    useEffect(() => {
        ScrollAnimation();
        let tl_contact_page = gsap.timeline({
            scrollTrigger: {
                trigger: "#contact_section",
            }
        })
        tl_contact_page.fromTo("#contact_section", {
            opacity: 0,
        }, {
            opacity: 1,
            duration: 0.7
        });
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [])
    return (
        <>
            <section id="contact_section" className="absolute z-50 px-10 bottom-0 w-screen h-auto max-w-full overflow-hidden">
                <div id="contact_container" className="relative p-5">
                    <div id="contact_wrapper" className="relative flex flex-col gap-5">
                        {/* <h2 id="contact_title" className="inline-block lg:text-[82px] text-[42px] text-transparent font-akiraExpanded bg-gradient-to-b from-[#991600] to-scarlet-red bg-clip-text" style={{ WebkitTextStroke: '1px transparent' }}>
                            Contact
                        </h2> */}
                        <div id='contact_links_wrapper' className='relative flex lg:flex-row flex-col justify-between lg:gap-0 gap-4'>
                            <div id="contact_external_links_wrapper" className="relative flex lg:flex-row flex-col gap-4 lg:items-center">
                                <a id="contact_email_link" className="inline-block text-[22px] font-akiraExpanded bg-gradient-to-b from-[#999999] to-white text-transparent bg-clip-text hover:text-white" href='mailto:brandon.monge@outlook.fr'>
                                    Email
                                </a>
                                <div className='lg:block hidden w-[10px] h-[10px] bg-gradient-to-b from-[#999999] to-white rounded-full'></div>
                                <a id="contact_linkedin_link" className="inline-block text-[22px] font-akiraExpanded bg-gradient-to-b from-[#999999] to-white text-transparent bg-clip-text hover:text-white" href='https://www.linkedin.com/in/brandonmonge/' target='_blank'>
                                    LinkedIn
                                </a>
                                <div className='lg:block hidden w-[10px] h-[10px] bg-gradient-to-b from-[#999999] to-white rounded-full'></div>
                                <a id="contact_instagram_link" className="inline-block text-[22px] font-akiraExpanded bg-gradient-to-b from-[#999999] to-white text-transparent bg-clip-text hover:text-white" href='https://www.instagram.com/brand_mng/' target='_blank'>
                                    Instagram
                                </a>
                            </div>
                            <Link href="/mentions-legales">
                                <h4 id="contact_terms_of_use" className="inline-block text-[22px] font-akiraExpanded bg-gradient-to-b from-[#999999] to-white text-transparent bg-clip-text hover:text-white">
                                    Mentions legales
                                </h4>
                            </Link>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}