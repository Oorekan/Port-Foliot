'use client'

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {

    //* -------------------- BACKGROUND COLOR TRANSITION ANIMATION -------------------- *//
    let tl_intro_bg_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#intro_section",
            start: "top center",
            end: "center",
            scrub: true,
        },
    });

    tl_intro_bg_color.to("#background", {
        backgroundColor: "#FF2400",
    });

    let tl_projects_bg_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects_section",
            start: "top",
            end: "bottom",
            scrub: true,
        },
    });

    tl_projects_bg_color.to("#background", {
        backgroundColor: "#0F0F0F",
    });

    //* -------------------- RED GRADIENT COLOR TRANSITION ANIMATION -------------------- *//
    let tl_intro_red_gradient_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#intro_section",
            start: "top center",
            end: "center",
            scrub: true,
        },
    })

    tl_intro_red_gradient_color.to("#gradientStop1_red", {
        stopColor: "white",
    }).to("#gradientStop2_red", {
        stopColor: "#999999",
    })

    let tl_projects_red_gradient_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects_section",
            start: "top",
            end: "bottom",
            scrub: true,
        },
    });

    tl_projects_red_gradient_color.to("#gradientStop1_red", {
        stopColor: "#FF2400",
    }).to("#gradientStop2_red", {
        stopColor: "#991600",
    });

    //* -------------------- WHITE GRADIENT COLOR PAGE TRANSITION ANIMATION -------------------- *//
    let tl_intro_white_gradient_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#intro_section",
            start: "top center",
            end: "center",
            scrub: true,
        },
    })

    tl_intro_white_gradient_color.to("#gradientStop1_white", {
        stopColor: "#0F0F0F",
    }).to("#gradientStop2_white", {
        stopColor: "#757575",
    })

    let tl_projects_white_gradient_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects_section",
            start: "top",
            end: "bottom",
            scrub: true,
        },
    });

    tl_projects_white_gradient_color.to("#gradientStop1_white", {
        stopColor: "white",
    }).to("#gradientStop2_white", {
        stopColor: "#999999",
    });

    //* -------------------- RED PRIMARY COLOR TRANSITION ANIMATION -------------------- *//
    let tl_intro_red_primary_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#intro_section",
            start: "top center",
            end: "center",
            scrub: true,
        },
    })

    tl_intro_red_primary_color.to("#primaryColor_red", {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "right center"
    }).to("#primaryColor_red", {
        opacity: 1,
        scaleX: 1,
        duration: 0.7,
        backgroundColor: "white"
    })

    let tl_projects_red_primary_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects_section",
            start: "top",
            end: "bottom",
            scrub: true,
        },
    });

    tl_projects_red_primary_color.to("#primaryColor_red", {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "right center"
    }).to("#primaryColor_red", {
        opacity: 1,
        scaleX: 1,
        duration: 0.7,
        backgroundColor: "#FF2400",
    })
    //* -------------------- WHITE COLOR PAGE TRANSITION ANIMATION -------------------- *//
    // let tl_white_color_page_transition = gsap.timeline({
    //     scrollTrigger: {
    //         scrub: true,
    //     },
    // })

    // tl_white_color_page_transition.to("#primaryColor_white", {
    //     trigger: "#intro_section",
    //     fill: "#FF2400",
    // }).to("#primaryColor_white", {
    //     trigger: "#projects_section",
    //     fill: "white",
    // })

    //* -------------------- BLACK PRIMARY COLOR TRANSITION ANIMATION -------------------- *//
    let tl_intro_black_primary_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#intro_section",
            start: "top center",
            end: "center",
            scrub: true,
        },
    })

    tl_intro_black_primary_color.to("#primaryColor_black", {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "right center"
    }).to("#primaryColor_black", {
        opacity: 1,
        scaleX: 1,
        duration: 0.7,
        backgroundColor: "#0F0F0F",
    })

    let tl_projects_black_primary_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects_section",
            start: "top",
            end: "bottom",
            scrub: true,
        },
    });

    tl_projects_black_primary_color.to("#primaryColor_black", {
        opacity: 0,
        scaleX: 0,
        transformOrigin: "right center"
    }).to("#primaryColor_black", {
        opacity: 1,
        scaleX: 1,
        duration: 0.7,
        backgroundColor: "white",
    })

    //* -------------------- CONTACT COLOR TRANSITION ANIMATION -------------------- *//
    let tl_intro_contact_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#intro_section",
            start: "top center",
            end: "center",
            scrub: true,
        },
    })

    tl_intro_contact_color.to("#contact", {
        backgroundImage: "linear-gradient(to top, white, #999999)",
    })

    let tl_projects_contact_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects_section",
            start: "top",
            end: "bottom",
            scrub: true,
        },
    });

    tl_projects_contact_color.to("#contact", {
        backgroundImage: "linear-gradient(to top, #FF2400, #991600)",
    })

    //* -------------------- FIRST NAME COLOR TRANSITION ANIMATION -------------------- *//
    let tl_intro_first_name_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#intro_section",
            start: "top center",
            end: "center",
            scrub: true,
        },
    })

    tl_intro_first_name_color.to("#first_name", {
        backgroundImage: "linear-gradient(to top, white, #999999)",
    })

    let tl_projects_first_name_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects_section",
            start: "top",
            end: "bottom",
            scrub: true,
        },
    });

    tl_projects_first_name_color.to("#first_name", {
        backgroundImage: "linear-gradient(to top, #FF2400, #991600)",
    })

    //* -------------------- KEYWORD #1 COLOR TRANSITION ANIMATION -------------------- *//
    let tl_intro_keyword_1_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#intro_section",
            start: "top center",
            end: "center",
            scrub: true,
        },
    })

    tl_intro_keyword_1_color.to("#keyword_1", {
        backgroundImage: "linear-gradient(to bottom, #0F0F0F, #757575)",
    })

    let tl_projects_keyword_1_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects_section",
            start: "top",
            end: "bottom",
            scrub: true,
        },
    });

    tl_projects_keyword_1_color.to("#keyword_1", {
        backgroundImage: "linear-gradient(to bottom, #999999, white)",
    })

    //* -------------------- KEYWORD #2 COLOR TRANSITION ANIMATION -------------------- *//
    let tl_intro_keyword_2_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#intro_section",
            start: "top center",
            end: "center",
            scrub: true,
        },
    })

    tl_intro_keyword_2_color.to("#keyword_2", {
        color: "transparent",
    })

    let tl_projects_keyword_2_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects_section",
            start: "top",
            end: "bottom",
            scrub: true,
        },
    });

    tl_projects_keyword_2_color.to("#keyword_2", {
        color: "#0F0F0F",
    })

    //* -------------------- KEYWORD #3 COLOR TRANSITION ANIMATION -------------------- *//
    let tl_intro_keyword_3_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#intro_section",
            start: "top center",
            end: "center",
            scrub: true,
        },
    })

    tl_intro_keyword_3_color.to("#keyword_3", {
        color: "transparent",
    })

    let tl_projects_keyword_3_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects_section",
            start: "top",
            end: "bottom",
            scrub: true,
        },
    });

    tl_projects_keyword_3_color.to("#keyword_3", {
        color: "#0F0F0F",
    })

    //* -------------------- KEYWORD #4 COLOR TRANSITION ANIMATION -------------------- *//
    let tl_intro_keyword_4_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#intro_section",
            start: "top center",
            end: "center",
            scrub: true,
        },
    })

    tl_intro_keyword_4_color.to("#keyword_4", {
        backgroundImage: "linear-gradient(to top, white, #999999)",
    })

    let tl_projects_keyword_4_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects_section",
            start: "top",
            end: "bottom",
            scrub: true,
        },
    });

    tl_projects_keyword_4_color.to("#keyword_4", {
        backgroundImage: "linear-gradient(to top, #FF2400, #991600)",
    })

    //* -------------------- KEYWORD #5 COLOR TRANSITION ANIMATION -------------------- *//
    let tl_intro_keyword_5_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#intro_section",
            start: "top center",
            end: "center",
            scrub: true,
        },
    })

    tl_intro_keyword_5_color.to("#keyword_5", {
        color: 'transparent',
    })

    let tl_projects_keyword_5_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects_section",
            start: "top",
            end: "bottom",
            scrub: true,
        },
    });

    tl_projects_keyword_5_color.to("#keyword_5", {
        color: "#0F0F0F",
    })

    //* -------------------- KEYWORD #6 COLOR TRANSITION ANIMATION -------------------- *//
    let tl_intro_keyword_6_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#intro_section",
            start: "top center",
            end: "center",
            scrub: true,
        },
    })

    tl_intro_keyword_6_color.to("#keyword_6", {
        color: "transparent",
    })

    let tl_projects_keyword_6_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects_section",
            start: "top",
            end: "bottom",
            scrub: true,
        },
    });

    tl_projects_keyword_6_color.to("#keyword_6", {
        color: "#0F0F0F",
    })

    //* -------------------- PROFILE PICTURE TRANSITION ANIMATION -------------------- *//
    let tl_profile_picture = gsap.timeline({
        scrollTrigger: {
            trigger: "#intro_section",
            end: "-=10%",
            scrub: true,
        },
    })

    tl_profile_picture.to("#profile_picture", {
        y: "100%",
        scale: 0,
        duration: 2,
        ease: "linear",
    })

    //* -------------------- PROJECTS PROFILE PICTURE TRANSITION ANIMATION -------------------- *//
    let tl_projects_profile_picture = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects_section",
            start: "top",
            end: "bottom",
            scrub: true,
        },
    })

    tl_projects_profile_picture.to("#projects_picture", {
        y: "0%",
        scale: 1,
        duration: 2,
        ease: "linear"
    })

    //* -------------------- JAPANESE WORD #1 COLOR TRANSITION ANIMATION -------------------- *//
    let tl_intro_japanese_word_1_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#intro_section",
            start: "top center",
            end: "center",
            scrub: true,
        },
    })

    tl_intro_japanese_word_1_color.to("#japanese_word_1", {
        color: "transparent",
    })

    let tl_projects_japanese_word_1_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects_section",
            start: "top",
            end: "bottom",
            scrub: true,
        },
    });

    tl_projects_japanese_word_1_color.to("#japanese_word_1", {
        color: "#0F0F0F",
    })

    //* -------------------- JAPANESE WORD #2 COLOR TRANSITION ANIMATION -------------------- *//
    let tl_intro_japanese_word_2_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#intro_section",
            start: "top center",
            end: "center",
            scrub: true,
        },
    })

    tl_intro_japanese_word_2_color.to("#japanese_word_2", {
        color: "transparent",
    })

    let tl_projects_japanese_word_2_color = gsap.timeline({
        scrollTrigger: {
            trigger: "#projects_section",
            start: "top",
            end: "bottom",
            scrub: true,
        },
    });

    tl_projects_japanese_word_2_color.to("#japanese_word_2", {
        color: "linear-gradient(to top, #FF2400, #991600)",
    })

    //* -------------------- RED AMARYLLIS #2 TRANSITION ANIMATION -------------------- *//
    let tl_red_amaryllis_2 = gsap.timeline({
        scrollTrigger: {
            trigger: "#page_layout",
            start: "top",
            end: "bottom",
            scrub: true,
        },
    })

    tl_red_amaryllis_2.to("#red_amaryllis_2", {
        rotate: 360,
        ease: "linear"
    })

    //* -------------------- KEYWORDS TRANSITION ANIMATION -------------------- *//
    // let key = (trigger, next) => {
    //     let tl_keywords = gsap.timeline({
    //         scrollTrigger: {
    //             trigger: `${trigger}`,
    //             start: "top center",
    //             toggleActions: "play none none reverse",
    //         }
    //     });
    //     tl_keywords.fromTo(`${next}`, {
    //         display: "none",
    //         opacity: 0
    //     }, {
    //         display: "flex",
    //         opacity: 1,
    //         duration: 0.7,
    //     }, 0);
    //     tl_keywords.fromTo(`${next} #keyword_1`, {
    //         y: -50,
    //         opacity: 0
    //     }, {
    //         y: 0,
    //         opacity: 1,
    //         duration: 0.7,
    //     }, 0);
    //     tl_keywords.fromTo(`${next} #keyword_2`, {
    //         y: -50,
    //         opacity: 0
    //     }, {
    //         y: 0,
    //         opacity: 1,
    //         duration: 0.7,
    //     }, ">-0.3");
    //     tl_keywords.fromTo(`${next} #keyword_3`, {
    //         y: -50,
    //         opacity: 0
    //     }, {
    //         y: 0,
    //         opacity: 1,
    //         duration: 0.7
    //     }, ">-0.3");

    //     return () => {
    //         ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    //     };
    // };

    // key("#intro_section", "#intro_keywords");
    // key("#projects_section", "#projects_keywords");

    // ScrollTrigger.refresh();

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
        let tl_keywords_2 = gsap.timeline({
            scrollTrigger: {
                trigger: "#intro_section",
                start: "top center",
                scrub: true
            },
        });

        tl_keywords_2.to("#keywords", {
            display: "none",
            opacity: 0,
        });

        tl_keywords_2.fromTo("#intro_keywords", {
            display: "none",
            opacity: 0
        }, {
            display: "flex",
            opacity: 1,
            duration: 0.7
        });

        tl_keywords_2.fromTo("#intro_keywords #keyword_1", {
            display: "none",
            y: -50,
            opacity: 0
        }, {
            display: "inline-block",
            y: 0,
            opacity: 1,
            duration: 0.7
        }, 0);
        tl_keywords_2.fromTo("#intro_keywords #keyword_4", {
            display: "none",
            y: -50,
            opacity: 0
        }, {
            display: "inline-block",
            y: 0,
            opacity: 1,
            duration: 0.7
        }, 0);
        tl_keywords_2.fromTo("#intro_keywords #keyword_2", {
            display: "none",
            y: -50,
            opacity: 0
        }, {
            display: "inline-block",
            y: 0,
            opacity: 1,
            duration: 0.7
        }, ">-0.3");
        tl_keywords_2.fromTo("#intro_keywords #keyword_5", {
            display: "none",
            y: -50,
            opacity: 0
        }, {
            display: "inline-block",
            y: 0,
            opacity: 1,
            duration: 0.7
        }, 0.3);
        tl_keywords_2.fromTo("#intro_keywords #keyword_3", {
            display: "none",
            y: -50,
            opacity: 0
        }, {
            display: "inline-block",
            y: 0,
            opacity: 1,
            duration: 0.7
        }, ">-0.3");
        tl_keywords_2.fromTo("#intro_keywords #keyword_6", {
            display: "none",
            y: -50,
            opacity: 0
        }, {
            display: "inline-block",
            y: 0,
            opacity: 1,
            duration: 0.7
        }, 0.6);
    })

    mm.add("(min-width: 768px)", () => {
        let tl_keywords_4 = gsap.timeline({
            scrollTrigger: {
                trigger: "#projects_section",
                start: "top top",
                end: "bottom top",
                scrub: true,
            },
        });

        tl_keywords_4.to("#intro_keywords", {
            display: "none",
            opacity: 0,
        }, 0)

        tl_keywords_4.fromTo("#projects_keywords", {
            display: "none",
            opacity: 0,
        }, {
            display: "flex",
            opacity: 1,
        });

        tl_keywords_4.fromTo("#projects_keywords #keyword_1", {
            display: "none",
            y: -50,
            opacity: 0
        }, {
            display: "inline-block",
            y: 0,
            opacity: 1,
            duration: 0.7
        }, 0);
        tl_keywords_4.fromTo("#projects_keywords #keyword_4", {
            display: "none",
            y: -50,
            opacity: 0
        }, {
            display: "inline-block",
            y: 0,
            opacity: 1,
            duration: 0.7
        }, 0);
        tl_keywords_4.fromTo("#projects_keywords #keyword_2", {
            display: "none",
            y: -50,
            opacity: 0
        }, {
            display: "inline-block",
            y: 0,
            opacity: 1,
            duration: 0.7
        }, ">-0.3");
        tl_keywords_4.fromTo("#projects_keywords #keyword_5", {
            display: "none",
            y: -50,
            opacity: 0
        }, {
            display: "inline-block",
            y: 0,
            opacity: 1,
            duration: 0.7
        }, 0.3);
        tl_keywords_4.fromTo("#projects_keywords #keyword_3", {
            display: "none",
            y: -50,
            opacity: 0
        }, {
            display: "inline-block",
            y: 0,
            opacity: 1,
            duration: 0.7
        }, ">-0.3");
        tl_keywords_4.fromTo("#projects_keywords #keyword_6", {
            display: "none",
            y: -50,
            opacity: 0
        }, {
            display: "inline-block",
            y: 0,
            opacity: 1,
            duration: 0.7
        }, 0.6);
    });

    return () => {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
}
