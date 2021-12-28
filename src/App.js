
import logo from './logo.svg';
import './App.scss';
import { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
import Loading from './Component/Loadding';
import './Component/Loadding/style.scss'
import './reposive.scss'
import './project.scss'
import { initGsap } from './commons/gsap';
function App() {
  useEffect(() => {
    let amount = 150
    let body = document.getElementById('bgthree')
    console.log(body);
    let i = 0
    console.log("123");
    // while (i < amount) {
    //   let drop = document.createElement('i');
    //   console.log(i);
    //   let size = Math.random() * 5;
    //   let posX = Math.floor(Math.random() * window.innerWidth)
    //   let delay = Math.random() * -20
    //   let duration = Math.random() * 5

    //   drop.style.width = 0.2 + size + 'px'
    //   drop.style.left = posX + 'px'
    //   drop.style.animationDelay = delay + 's'
    //   drop.style.animationDuration = 1 + duration + 's'
    //   body.appendChild(drop)
    //   i++
    // }
    ///// gsap //// 
    initGsap()
  }, [])
  useEffect(() => {
    /////// hover image /// 
    /* Store the element in el */
    let el = document.getElementById('tilt')

    /* Get the height and width of the element */
    const height = el.clientHeight
    const width = el.clientWidth

    /*
      * Add a listener for mousemove event
      * Which will trigger function 'handleMove'
      * On mousemove
      */
    // el.addEventListener('mousemove', handleMove)
    /* Define function a */
    // function handleMove(e) {

    //   const xVal = e.layerX
    //   const yVal = e.layerY
    //   const yRotation = 20 * ((xVal - width / 2) / width)
    //   const xRotation = -20 * ((yVal - height / 2) / height)
    //   const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
    //   el.style.transform = string
    // }

    // el.addEventListener('mouseout', function () {
    //   el.style.transform = 'perspective(10px) scale(1) rotateX(0) rotateY(0)'
    // })

    // el.addEventListener('mousedown', function () {
    //   el.style.transform = 'perspective(10px) scale(0.9) rotateX(0) rotateY(0)'
    // })

    // el.addEventListener('mouseup', function () {

    //   el.style.transform = 'perspective(10px) scale(1.1) rotateX(0) rotateY(0)'
    // }) 
  }, [])
  return (
    <div className="App">
      <header>
        <div className='nav_bar'>
          <div className='nav_toggle' id="toggle">
            <span className='bar1'></span>
            <span className='bar2'></span>
            <span className='bar3'></span>
          </div>

        </div>
        <div className='nav_back'>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Service</a></li>
            <li><a href="#">Service</a></li>
          </ul>
        </div>
      </header>
      <section className='loading' id="bgthree">
        <Loading />
        {/* {flag ?
          <Particles
            id="tsparticles"

            options={{
              fpsLimit: 60,
              interactivity: {
                detectsOn: "canvas",
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#000000",
                },
                links: {
                  color: "#000000",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                collisions: {
                  enable: true,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 4,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                  value: 80,
                },

                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 5,
                },
              },
              detectRetina: true,
            }}
          /> : <></>
        } */}
      </section>
      <section className="section  w70" name="section" >
        <div className='left'>
          <h2 className='name my-4 fadeUp'>DIỆP VĨNH KIÊN</h2>
          <h3 className='title split-text my-4 fadeUp'>Blockchain Developer</h3>
          <p className='des my-4 fadeUp'>
            Hi! I have worked through blockchain projects on crypto exchanges, forums with metamask integration. I use reactJS, nodeJS to build app
          </p>
          <div className='signature fadeUp'>
            KienDiep
          </div>
        </div>
        <div class="keyframes">
          <p>Scroll down</p>
          <div class="lineScrool">
            <span></span>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="project">
            <div className='projectCaption'>
              <h2 className='captionName'>Forum</h2>
            </div>

          </div>
          <div className='image'>
            <img id="tilt" alt="" />
          </div>
        </div>
      </section>
      <section className="section">
        <h1>Scale - Them</h1>
      </section>
      <section className="section">
        <h1>Do Whatever you want with them</h1>
        <h2>Three.js Tutorial</h2>
        <h1>GSAP + Scrolltrigger</h1>
      </section>

    </div>
  );
}

export default App;
