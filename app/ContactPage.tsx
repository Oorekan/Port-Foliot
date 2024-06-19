'use client'

// import { use, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    // useEffect(() => {
    //     ScrollTrigger.create({
    //         trigger: "#contact_section",
    //         start: 'top top',
    //         onEnter: () => {
    //             gsap.to("#background", { position: 'fixed' });
    //         },
    //         onLeave: () => {
    //             gsap.to("#background", { position: 'relative' });
    //         },
    //         onEnterBack: () => {
    //             gsap.to("#background", { position: 'fixed' });
    //         },
    //         onLeaveBack: () => {
    //             gsap.to("#background", { position: 'relative' });
    //         }
    //     });
    //     return () => {
    //         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    //     };
    // }, [])
    return (
        <>
            <section id="contact_section" className="relative w-screen h-full max-w-full bg-onyx-black">
                <div id="contact_container" className="relative p-10">
                    <div id="contact_wrapper" className="relative">
                        <h2 id="contact_title" className="inline-block text-[82px] text-transparent font-akiraExpanded bg-gradient-to-b from-[#991600] to-scarlet-red bg-clip-text" style={{ WebkitTextStroke: '1px transparent' }}>
                            Contact
                        </h2>
                        <div id="contact_links_wrapper" className="relative flex">
                            <a id="contact_email_link" className="inline-block text-[22px]" href='mailto:brandon.monge@outlook.fr'>
                                Email
                            </a>
                            <a id="contact_linkedin_link" className="inline-block text-[22px]" href='https://www.linkedin.com/in/brandonmonge/' target='_blank'>
                                LinkedIn
                            </a>
                            <a id="contact_instagram_link" className="inline-block text-[22px]" href='https://www.instagram.com/brand_mng/' target='_blank'>
                                Instagram
                            </a>
                            <a id="contact_terms_of_use" className="inline-block text-[22px]" href='/'>
                                Mentions légales
                            </a>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}