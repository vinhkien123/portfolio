import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import { initGsapProject } from './gsap';
import Zoom from 'react-reveal/Zoom';
function checkElement(el) {
    var rect = el.getBoundingClientRect(), top = rect.top, height = rect.height,
        el = el.parentNode
    // Check if bottom of the element is off the page
    if (rect.bottom < 0) return false
    // Check its within the document viewport
    if (top > document.documentElement.clientHeight) return false
    do {
        rect = el.getBoundingClientRect()
        if (top <= rect.bottom === false) return false
        // Check if the element is out of view due to a container scrolling
        if ((top + height) <= rect.top) return false
        el = el.parentNode
    } while (el != document.body)
    return true
};
function Project(props) {
    const [animation,setAnimation] = useState(false)
    useEffect(() => {
        /////// hover image /// 
        /* Store the element in el */
        let el = document.getElementById('tilte')
        /* Get the height and width of the element */
        const height = el.clientHeight
        const width = el.clientWidth

        /*
          * Add a listener for mousemove event
          * Which will trigger function 'handleMove'
          * On mousemove
          */
        el.addEventListener('mousemove', handleMove)
        /* Define function a */
        function handleMove(e) {

            const xVal = e.layerX
            const yVal = e.layerY
            const yRotation = 20 * ((xVal - width / 2) / width)
            const xRotation = -20 * ((yVal - height / 2) / height)
            const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
            el.style.transform = string
        }
        el.addEventListener('mousedown', function () {
            el.style.transform = 'perspective(10px) scale(0.9) rotateX(0) rotateY(0)  '
        })
        el.addEventListener('mouseup', function () {

            el.style.transform = 'perspective(10px) scale(1.1) rotateX(0) rotateY(0) '
        })
      
        // initGsapProject("avc")
    }, [])
    console.log("123", animation);
    return (
        <section className='section' id="avc" style={{ '--width': `${window.innerHeight / 100 * 5}px`, '--maxWidthProject': `${window.innerWidth >= 1100? '1000px' :  '80%'}` }}>
            <div className="containerz">
                <h3 className='projects__titletopz' >featured projects</h3>
                <div className="projects__listz" style={{display:"flex",justifyContent:`start`}}>
                    <div className="projectz">
                        <a href="" className='link' style={{  justifyContent: `start` }}  >
                            <div className="project__captionz">
                                <div className="project__caption-namez" id="text"  >
                                    {/* <Zoom cascade right when={animation}> */}
                                        <h3>   Style By PNJ</h3>
                                    {/* </Zoom> */}
                                </div>
                            </div>
                            <img id='tilte' src="https://www.nghiatran.info/projects/stylepnj/img1-stylepnj.jpg" alt="" />
                        </a>
                    </div>
                </div>
            </div >
        </ section>
    );
}

export default Project;