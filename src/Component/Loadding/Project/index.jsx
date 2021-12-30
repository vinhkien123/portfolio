import React from 'react';
import { useEffect } from 'react/cjs/react.development';

function Project(props) {
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
            // will - change: transform; transform: perspective(1200px) rotateX(0deg) rotateY(0deg);
        }

        // el.addEventListener('mouseout', function () {
        //   el.style.transform = 'perspective(10px) scale(1) rotateX(0) rotateY(0)'
        // })

        el.addEventListener('mousedown', function () {
            el.style.transform = 'perspective(10px) scale(0.9) rotateX(0) rotateY(0)  '
        })

        el.addEventListener('mouseup', function () {

            el.style.transform = 'perspective(10px) scale(1.1) rotateX(0) rotateY(0) '
        })
    }, [])
    return (
        <section className='section' style={{ '--width': `${window.innerHeight / 100 * 5}px`, '--maxWidthProject': `${window.innerWidth >= 1100? '1000px' :  '80%'}` }}>
            <div className="containerz">
                <h3 className='projects__titletopz' >featured projects</h3>
                <div className="projects__listz" style={{display:"flex",justifyContent:`start`}}>
                    <div className="projectz">
                        <a href="" className='link' style={{  justifyContent: `start` }}  >
                            <div className="project__captionz">
                                <div className="project__caption-namez" >
                                    <h3>   Style By PNJ</h3>
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