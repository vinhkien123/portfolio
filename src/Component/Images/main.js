import {
    data
} from "./data";
import {
    gsap
} from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";
import Scrollbar from "smooth-scrollbar";
import {
    init
} from "../../utils/initDroneLayer";

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {

});
export function loadImage(hidenImage) {
    const text = document.querySelector(".text-container > h1");
    const scrollbar = document.querySelector(".main");

    // const renderImages = () => {
    //     data.forEach((d) => {
    //         const img = document.createElement("img"),
    //             fig = document.createElement("figure");
    //         img.src = d.imageSrc;
    //         fig.appendChild(img);
    //         document.querySelector("section.images").appendChild(fig);
    //     });
    // };

    const initScroll = () => {
        const verticalScrollbar = Scrollbar.init(scrollbar, {
            damping: 0.1,
            delegateTo: document,
        });
        verticalScrollbar.setPosition(0, 0);
        verticalScrollbar.track.xAxis.element.remove();
        verticalScrollbar.track.yAxis.element.remove();

        ScrollTrigger.scrollerProxy(".main", {
            scrollTop(value) {
                if (arguments.length) {
                    verticalScrollbar.scrollTop = value;
                }
                return verticalScrollbar.scrollTop;
            },
        });
    };
    // init(ScrollTrigger)
    initScroll();
    // renderImages();

    const images = document.querySelectorAll("section.images > figure");

    gsap.to(images[0], {
        duration: 0,
        right: 0,
        top: "3%",
        zIndex: 0
    });
    gsap.to(images[1], {
        duration: 0,
        right: 0,
        top: "11%",
        zIndex: 2
    });
    gsap.to(images[2], {
        duration: 0,
        right: 0,
        top: "30%",
        zIndex: 1
    });
    gsap.to(images[3], {
        duration: 0,
        right: "12%",
        top: "17%",
        zIndex: 3
    });
    gsap.to(images[4], {
        duration: 0,
        right: "19%",
        top: "10%",
        zIndex: 1
    });
    gsap.to(images[5], {
        duration: 0,
        right: "18%",
        top: "33%",
        zIndex: 0
    });

    const defaultScrollConfig = {
        trigger: ".main",
        start: "10px top",
        scroller: scrollbar,
        end: "+=130%",
        scrub: 1,
        toggleActions: "restart none  reverse none"
    };

    const endPosition = {
        top: "100%",
        rotate: 0,
        left: "50%",
        transform: "translate(-50%, -50%)",
    };

    gsap.to(text, {
        x: '-100%',
        scrollTrigger: {
            ...defaultScrollConfig
        }
    });
    // gsap
    //     .timeline({
    //         scrollTrigger: {
    //             ...defaultScrollConfig
    //         }
    //     })



    const tl = gsap
        .timeline({
            scrollTrigger: {
                ...defaultScrollConfig
            }
        })
        .to(images[0], {
            top: "65%",
            rotate: 20,
            left: "60%",
            transform: "translate(-50%, -50%)",
        })
        .to(images[0], {
            ...endPosition
        });

    const tl1 = gsap
        .timeline({
            scrollTrigger: {
                ...defaultScrollConfig
            }
        })
        .to(images[1], {
            top: "65%",
            rotate: -20,
            left: "60%",
            transform: "translate(-50%, -50%)",
        })
        .to(images[1], {
            ...endPosition
        });

    const tl2 = gsap
        .timeline({
            scrollTrigger: {
                ...defaultScrollConfig
            }
        })
        .to(images[2], {
            top: "65%",
            rotate: 17,
            left: "60%",
            transform: "translate(-50%, -50%)",
        })
        .to(images[2], {
            ...endPosition
        });

    const tl3 = gsap
        .timeline({
            scrollTrigger: {
                ...defaultScrollConfig
            }
        })
        .to(images[3], {
            top: "65%",
            rotate: -30,
            left: "60%",
            transform: "translate(-50%, -50%)",
        })
        .to(images[3], {
            ...endPosition
        });

    const tl4 = gsap
        .timeline({
            scrollTrigger: {
                ...defaultScrollConfig
            }
        })
        .to(images[4], {
            top: "65%",
            rotate: 30,
            left: "60%",
            transform: "translate(-50%, -50%)",
        })
        .to(images[4], {
            ...endPosition
        });
    // const sections = document.querySelectorAll('.section')
    const tl5 = gsap
        .timeline({
            scrollTrigger: {
                ...defaultScrollConfig,
                // endTrigger: sections[1]
               
            }
        })
        .to(images[5], {
            top: "65%",
            rotate: 45,
            left: "60%",
            transform: "translate(-50%, -50%)",
        })
        .to(images[5], {
            ...endPosition
        })
        .to('.main', {
            x: "-120%",
            opacity: 0
        }, )


    // const tl6 = gsap
    //     .timeline({
    //         scrollTrigger: {
    //             ...defaultScrollConfig
    //         }
    //     })
    //     .to('.fadeUp', {
    //         duration: 1.7,
    //         opacity: 1,
    //         ease: 'power3.out',
    //         stagger: .1
    //     })
    //    .to(images[5], {
    //        ...endPosition
    //    });
}