'use client'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimation() {

    //*-------------------- WHITE GRID ANIMATION --------------------*//
    let tl_white_grid = gsap.timeline({})
    tl_white_grid.fromTo("#white_grid", {
        opacity: 0,
    }, {
        opacity: 1,
        duration: 2,
        ease: 'linear'
    })

    //* -------------------- KEYWORDS #1 ANIMATION -------------------- *//
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

    //* -------------------- KEYWORDS #2 ANIMATION -------------------- *//
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

    //* -------------------- JAPANESE WORDS ANIMATION -------------------- *//
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

    //* -------------------- RED LINES ANIMATION -------------------- *//
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

    //* -------------------- WHITE LINES ANIMATION -------------------- *//
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

    //* -------------------- PROFILE PICTURE ANIMATION -------------------- *//
    let tl_profile_picture = gsap.timeline({})
    tl_profile_picture.fromTo("#profile_picture", {
        y: '10%',
        opacity: 0,
    }, {
        y: '0%',
        opacity: 1,
    })

    //* -------------------- RED AMARYLLIS ANIMATION -------------------- *//
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

    //* -------------------- WHITE AMARYLLIS ANIMATION -------------------- *//
    let tl_white_amaryllis = gsap.timeline({})
    tl_white_amaryllis.fromTo("#white_amaryllis_1", {
        rotate: 50,
        opacity: 0,
    }, {
        rotate: 0,
        opacity: 1,
        delay: 0.6
    })

    //* -------------------- CRESCENT MOON ANIMATION -------------------- *//
    let tl_crescent_moon = gsap.timeline({})
    tl_crescent_moon.fromTo("#crescent_moon", {
        y: '-15%',
        opacity: 0,
    }, {
        y: '0%',
        opacity: 1,
    })

    //* -------------------- WHITE SPARKLES ANIMATION -------------------- *//
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

    //* -------------------- RED SPARKLES ANIMATION -------------------- *//
    let tl_red_sparkles = gsap.timeline({})
    tl_red_sparkles.fromTo("#red_sparkle_1", {
        rotate: -50,
        opacity: 0,
    }, {
        rotate: 0,
        opacity: 1,
    })

    //* -------------------- CONTACT ANIMATION -------------------- *//
    let tl_contact = gsap.timeline({})
    tl_contact.fromTo("#contact", {
        x: 20,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
    })

    //* -------------------- NAMES ANIMATION -------------------- *//
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

    //* -------------------- INTRODUCTION PAGE TRANSITION ANIMATION -------------------- *//
    let tl_introduction_page_transition = gsap.timeline({})
    tl_introduction_page_transition.to("#background", {
        scrollTrigger: {
            trigger: "#intro_section",
            scrub: true,
            end: "-=10%"
        },
        background: "#FF2400",
    })
    tl_introduction_page_transition.to("#gradientStop1_red", {
        scrollTrigger: {
            trigger: "#intro_section",
            scrub: true,
            end: "-=10%"
        },
        stopColor: "white",
        duration: 1
    }).to("#gradientStop2_red", {
        scrollTrigger: {
            trigger: "#intro_section",
            scrub: true,
            end: "-=10%"
        },
        stopColor: "#999999",
        duration: 1
    });
    tl_introduction_page_transition.to("#gradientStop1_white", {
        scrollTrigger: {
            trigger: "#intro_section",
            scrub: true,
            end: "-=10%"
        },
        stopColor: "#0F0F0F",
        duration: 1
    }).to("#gradientStop2_white", {
        scrollTrigger: {
            trigger: "#intro_section",
            scrub: true,
            end: "-=10%"
        },
        stopColor: "#757575",
        duration: 1
    });
    tl_introduction_page_transition.to("#primaryColor_red", {
        scrollTrigger: {
            trigger: "#intro_section",
            scrub: true,
            end: "-=10%"
        },
        fill: "white",
        duration: 1
    })
    tl_introduction_page_transition.to("#primaryColor_white", {
        scrollTrigger: {
            trigger: "#intro_section",
            scrub: true,
            end: "-=10%"
        },
        fill: "#FF2400",
        duration: 1
    })
    tl_introduction_page_transition.to("#primaryColor_black", {
        scrollTrigger: {
            trigger: "#intro_section",
            scrub: true,
            end: "-=10%"
        },
        fill: "#0F0F0F",
        duration: 1
    })
    tl_introduction_page_transition.to("#contact", {
        scrollTrigger: {
            trigger: "#intro_section",
            scrub: true,
            end: "-=10%"
        },
        backgroundImage: "linear-gradient(to top, white, #999999)",
        duration: 1
    })
    tl_introduction_page_transition.to("#first_name", {
        scrollTrigger: {
            trigger: "#intro_section",
            scrub: true,
            end: "-=10%"
        },
        backgroundImage: "linear-gradient(to top, white, #999999)",
        duration: 1
    })
    tl_introduction_page_transition.to("#keyword_1", {
        scrollTrigger: {
            trigger: "#intro_section",
            scrub: true,
            end: "-=10%"
        },
        backgroundImage: "linear-gradient(to bottom, #0F0F0F, #757575)",
        duration: 1
    })
    tl_introduction_page_transition.to("#keyword_2", {
        scrollTrigger: {
            trigger: "#intro_section",
            scrub: true,
            end: "-=10%"
        },
        color: "transparent",
    })
    tl_introduction_page_transition.to("#keyword_3", {
        scrollTrigger: {
            trigger: "#intro_section",
            scrub: true,
            end: "-=10%"
        },
        color: "transparent",
    })
    tl_introduction_page_transition.to("#keyword_4", {
        scrollTrigger: {
            trigger: "#intro_section",
            scrub: true,
            end: "-=10%"
        },
        backgroundImage: "linear-gradient(to top, white, #999999)",
        duration: 1
    })
    tl_introduction_page_transition.to("#keyword_5", {
        scrollTrigger: {
            trigger: "#intro_section",
            scrub: true,
            end: "-=10%"
        },
        color: 'transparent',
        duration: 1
    })
    tl_introduction_page_transition.to("#keyword_6", {
        scrollTrigger: {
            trigger: "#intro_section",
            scrub: true,
            end: "-=10%"
        },
        color: "transparent",
        duration: 1
    })
    tl_introduction_page_transition.to("#profile_picture", {
        scrollTrigger: {
            trigger: "#intro_section",
            scrub: true,
            end: "-=10%"
        },
        y: "100%",
        scale: 0,
        duration: 2,
        ease: "linear",
    })
    tl_introduction_page_transition.to("#japanese_word_1", {
        scrollTrigger: {
            trigger: "#intro_section",
            scrub: true,
            end: "-=10%"
        },
        color: "transparent",
    })
    tl_introduction_page_transition.to("#japanese_word_2", {
        scrollTrigger: {
            trigger: "#intro_section",
            scrub: true,
            end: "-=10%"
        },
        color: "transparent",
    })
    tl_introduction_page_transition.to("#red_amaryllis_2", {
        scrollTrigger: {
            trigger: "#intro_section",
            scrub: true,
        },
        rotate: 360,
        ease: "linear"
    })
    gsap.utils.toArray(['#keyword_1', '#keyword_2', '#keyword_3']).forEach((keyword_1, index) => {
        ScrollTrigger.create({
            trigger: keyword_1,
            start: "+=50%",
            onEnter: () => {
                keyword_1.textContent = "SOFT";
            },
            onEnterBack: () => {
                keyword_1.textContent = "CREA";
            },
        });
    });
    gsap.utils.toArray(['#keyword_4', '#keyword_5', '#keyword_6']).forEach((keyword_2, index) => {
        ScrollTrigger.create({
            trigger: keyword_2,
            start: "top center-=20%",
            onEnter: () => {
                keyword_2.textContent = "SKILLS";
            },
            onEnterBack: () => {
                keyword_2.textContent = "DEV";
            },
        });
    });

    //* -------------------- CARD ANIMATION -------------------- *//
    let tl_card = gsap.timeline({})
    tl_card.fromTo("#elements", {
        x: 150,
    }, {
        x: -150,
        repeat: -1,
        duration: 5,
        ease: 'linear'
    })

    //* -------------------- PROJECTS PICTURE ANIMATION -------------------- *//
    let tl_projects_picture = gsap.timeline({
        scrollTrigger: {
            trigger: '#projects',
            scrub: true,
            end: 'bottom bottom'
        }
    })
    tl_projects_picture.fromTo("#projects_picture", {
        y: "10%",
        scale: 0
    }, {
        y: "0%",
        scale: 1,
        ease: "linear"
    })

    //* -------------------- KEYWORDS #1 ANIMATION -------------------- *//
    let tl_keywords_3 = gsap.timeline({
        scrollTrigger: {
            trigger: '#projects',
            scrub: true,
            end: "bottom bottom"
        }
    })
    tl_keywords_3.fromTo("#keyword_9", {
        y: 50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1
    })
    tl_keywords_3.fromTo("#keyword_8", {
        y: 50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
    }, ">-0.3")
    tl_keywords_3.fromTo("#keyword_7", {
        y: 50,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
    }, ">-0.3")

    //* -------------------- PROJECTS LINKS ANIMATION -------------------- *//
    let tl_projects_links = gsap.timeline({
        scrollTrigger: {
            trigger: '#projects',
            scrub: true,
            end: "bottom bottom"
        }
    })
    tl_projects_links.fromTo("#first-project-link", {
        y: 800,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
    })
    tl_projects_links.fromTo("#second-project-link", {
        y: 300,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
    }, "<")
    tl_projects_links.fromTo("#third-project-link", {
        y: 600,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
    }, "<")

    //* -------------------- PROJECTS TOP RIGHT ANIMATION -------------------- *//
    let tl_projects_top_right = gsap.timeline({
        scrollTrigger: {
            trigger: '#projects',
            scrub: true,
            end: "bottom bottom",
        }
    })
    tl_projects_top_right.fromTo("#contact-top-right", {
        x: 20,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
    })
    tl_projects_top_right.fromTo("#double-red-line-top-right", {
        x: -50,
        opacity: 0,
        scale: 0
    }, {
        x: 0,
        opacity: 1,
        scale: 1
    }, "<")

    //* -------------------- PROJECTS TOP LEFT ANIMATION -------------------- *//
    let tl_projects_top_left = gsap.timeline({
        scrollTrigger: {
            trigger: '#projects',
            scrub: true,
            end: "bottom bottom",
        }
    })
    tl_projects_top_left.fromTo("#red-line-top-left", {
        x: -50,
        opacity: 0,
        scale: 0
    }, {
        x: 0,
        opacity: 1,
        scale: 1
    })
    tl_projects_top_left.fromTo("#amaryllis-red-top-left", {
        y: 150,
        rotate: 90,
        opacity: 0
    }, {
        y: 0,
        rotate: 0,
        opacity: 1,
    })
    tl_projects_top_left.fromTo("#double-red-line-center", {
        x: -50,
        opacity: 0,
        scale: 0
    }, {
        x: 0,
        opacity: 1,
        scale: 1
    })

    //* -------------------- PROJECTS BOTTOM RIGHT ANIMATION -------------------- *//
    let tl_projects_bottom_right = gsap.timeline({
        scrollTrigger: {
            trigger: '#projects',
            scrub: true,
            end: "bottom bottom",
        }
    })
    tl_projects_bottom_right.fromTo("#double-white-line-center", {
        x: 50,
        opacity: 0,
        scale: 0
    }, {
        x: 0,
        opacity: 1,
        scale: 1
    })
    tl_projects_bottom_right.fromTo("#amaryllis-white-bottom-right", {
        y: 150,
        rotate: 90,
        opacity: 0
    }, {
        y: 0,
        rotate: 0,
        opacity: 1,
    })
    tl_projects_bottom_right.fromTo("#double-white-line-bottom-right", {
        x: 50,
        opacity: 0
    }, {
        x: 0,
        opacity: 1,
    })

    //* -------------------- PROJECTS BOTTOM LEFT ANIMATION -------------------- *//
    let tl_projects_bottom_left = gsap.timeline({
        scrollTrigger: {
            trigger: '#projects',
            scrub: true,
            end: "bottom bottom",
        }
    })
    tl_projects_bottom_left.fromTo("#double-red-line-bottom-left", {
        x: -50,
        opacity: 0,
        scale: 0
    }, {
        x: 0,
        opacity: 1,
        scale: 1
    })
    tl_projects_bottom_left.fromTo("#amaryllis-red-bottom-left", {
        y: 150,
        rotate: 90,
        opacity: 0
    }, {
        y: 0,
        rotate: 0,
        opacity: 1,
    })
}