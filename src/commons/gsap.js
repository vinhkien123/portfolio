import gsap from "gsap";



export function initGsap() {
    let toggle = document.getElementById('toggle')
    let bool = false;
         let tl = gsap.timeline()
    toggle.addEventListener('click', function () {
        if (!bool) {
            gsap.to('.bar1', {
                duration: 0.2,
                width: "45px",
                height: "6px",
                top: "45%",
                left: "15%",
                rotate: "45deg"
            })
             gsap.to('.bar2', {
                 duration: 0.2,
                 opacity: 0,
             })
              gsap.to('.bar3', {
                  duration: 0.2,
                  width: "45px",
                  height: "6px",
                  top: "45%",
                  left: "15%",
                  rotate: "-45deg"
              })
            tl.to('.nav_back', {
                duration: .5,
                width: "100%",
                ease : "power2.in"
            })
            tl.to('li', {
                duration: .5,
                opacity: 1, 
                ease: "power3.in",
                staager : .15
            })
            bool = true
        } else {
            gsap.to('.bar1', {
                duration: 0.2,
                width: "37px",
                height: "5px",
                top: "25%",
                left: "22%",
                rotate : '0deg'
            })
             gsap.to('.bar2', {
                 duration: 0.2,
                 width: "37px",
                 height: "5px",
                 opacity : 1,
                 top: "45%",
                 left: "22%",
                 rotate: '0deg'
             })
             gsap.to('.bar3', {
                 duration: 0.2,
                 width: "37px",
                 height: "5px",
                 top: "65%",
                 left: "22%",
                 rotate: '0deg'
             })
            // tl.reverse()
            tl.to('li', {
                duration: .2,
                opacity: 0,
                ease: 'power3.out',
                stagger: .1
            })
            tl.to('.nav_back', {
                duration: .5,
                deley: .2,
                width: '0px',
                ease: 'power2.out'
            },)
            bool = false
        }
    })
}