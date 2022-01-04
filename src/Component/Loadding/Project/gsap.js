import gsap from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';

export function initGsapProject(idSection) {
    const element = document.getElementById(idSection)
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.defaults({
        scrub: 3,
        ease: 'none',
    })

    const sections = document.querySelectorAll('.section')
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: sections,
            toggleActions: "restart pause reverse none"
        }
    })
    tl.to('.project__captionz', {
        x: 1000,
        duration: 3, 
    })
}