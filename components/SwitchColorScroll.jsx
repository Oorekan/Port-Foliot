'use client'
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/src/ScrollTrigger';

export default function SwitchColorScroll() {
    gsap.registerPlugin(ScrollTrigger);

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

    let tl_profile_picture = gsap.timeline({})
    tl_profile_picture.fromTo("#profile_picture", {
        y: '10%',
        opacity: 0,
    }, {
        y: '0%',
        opacity: 1,
    })

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
        //repeat: -1
    }, ">-0.3")

    let tl_white_amaryllis = gsap.timeline({})
    tl_white_amaryllis.fromTo("#white_amaryllis_1", {
        rotate: 50,
        opacity: 0,
    }, {
        rotate: 0,
        opacity: 1,
        delay: 0.6
    })

    let tl_crescent_moon = gsap.timeline({})
    tl_crescent_moon.fromTo("#crescent_moon", {
        y: '-15%',
        opacity: 0,
    }, {
        y: '0%',
        opacity: 1,
    })

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

    let tl_red_sparkles = gsap.timeline({})
    tl_red_sparkles.fromTo("#red_sparkle_1", {
        rotate: -50,
        opacity: 0,
    }, {
        rotate: 0,
        opacity: 1,
    })

    let tl_contact = gsap.timeline({})
    tl_contact.fromTo("#contact", {
        x: 20,
        opacity: 0,
    }, {
        x: 0,
        opacity: 1,
    })

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

    // tl.to("#background", {
    //     scrollTrigger: {
    //         trigger: "#introduction",
    //         scrub: true,
    //         markers: true,
    //     },
    //     background: "#FF2400",
    //     duration: 3
    // })
    // tl.to("#red", {
    //     scrollTrigger: {
    //         trigger: "#introduction",
    //         scrub: true,
    //         markers: true,
    //     },
    //     color: "white",
    // })
    // tl.to("#white", {
    //     color: "#0F0F0F",
    // })
    // tl.to("#black", {
    //     color: "white",
    // })
}