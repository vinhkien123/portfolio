import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

export function initGsapProject(idSection, align) {
    const element = document.getElementById(idSection)
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.defaults({
        scrub: 3,
        ease: 'none',
    })
    gsap.from(element, {
        scrollTrigger: {
            trigger: element,
            toggleActions: "play none none reverse ",
            // start: "-120%",
            // end: "+=120%",
        },
        x: `${align=="left"?'100%': "-100%"}`,
      
    })

}