import * as THREE from 'three';
import {
    GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader.js'
import {
    OrbitControls
} from "three/examples/jsm/controls/OrbitControls";
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
let camera, scene, renderer;
let geometry, material, mesh, controls;


/////////////////////////////////
var cameraHorzLimit = 50;
var cameraVertLimit = 50;
var mouse = new THREE.Vector2();
var cameraCenter = new THREE.Vector3();
//////////////////
const loader = new GLTFLoader()
// init();
// animate
const project = gsap.timeline();
 export function init() {

    camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.z = 1;

    camera.rotation.z = 1;


    scene = new THREE.Scene();
    const light = new THREE.HemisphereLight(0xffffff, 0x000000, 2);
    scene.add(light)
    const mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh)
    camera.position.set(0, 0, 1000)
    /////adnimation gsap
    loader.load('/models/bitcoin-hight/scene.gltf', (gltf) => {
        ///// reposive

        let xModelPosition, yModelPosition, modelScale
     
        if (window.innerWidth <= 375) {
            xModelPosition = 35
            yModelPosition = 85
            modelScale = .05
        } else if (window.innerWidth <= 414) {
            xModelPosition = 45
            yModelPosition = 85
            modelScale = .05
        } else {
            xModelPosition = 85
            yModelPosition = .5
            modelScale = .25
        }

        ///// reposive
        let model = gltf.scene
        model.scale.set(0.3, 0.3, 0.3)

        project.to(".loading", {
                y: "-100%",
                duration: 1,
                delay:4
            })

            .to(camera.position, {
                z: 150,
                duration: 1,
                ease: 'back.out(1.7)',
                duration: 1,
            })
            .to(model.scale, {
                duration: 1,
                deley: 2,
                x: modelScale,
                y: modelScale,
                z: modelScale,
            }, "-=1")
            .to(model.position, {
                duration: 1,
                deley: 2,
                x: xModelPosition,
                y: yModelPosition,
            }, "-=1")
            .to('.fadeUp', {
                duration: 1.7,
                opacity: 1,
                ease: 'power3.out',
                stagger: .1
            })
        // .to(camera.rotation, {
        //     z: 0,
        //     duration: 1
        // })
        // .to(model.rotation, {
        //     x: 1,
        //     duration: 1,
        //     deley: 1
        // })
        // .to(model.rotation, {
        //     y: Math.PI * 1.75,
        //     duration: 2,
        //     deley: 1
        // })
        // .to(model.scale, {
        //     duration: 1,
        //     deley: 1,
        //     x: .25,
        //     y: .25,
        //     z: .25,
        // })
        ///////////////////////////
        // gsap.to(model.position, {
        //     duration: 1,
        //     deley: 2,
        //     x: .55,
        //     y: .10,
        // })

        ////// text
        gsap.registerPlugin(ScrollTrigger)
        ScrollTrigger.defaults({
            scrub: 3,
            ease: 'none',
        })
        const sections = document.querySelectorAll('.section')
        gsap.from(model.position, {
            y: 1,
            duration: 1,
            ease: 'expo',
        })
        gsap.from('h1', {
            yPercent: 100,
            autoAlpha: 0,
            ease: 'back',
            delay: 0.3,
        })
        // gsap.from('.fadeUp', {

        //     scrollTrigger: {
        //         trigger: sections[0],
        //         toggleActions: 'none none none play'
        //     },
        //     duration: 1.7,
        //     opacity: 1,
        //     ease: 'power3.out',
        //     stagger: .1,

        // })
        gsap.to(model.rotation, {
            x: Math.PI * 2,
            scrollTrigger: {
                trigger: sections[1],
                toggleActions: 'play pasue none none'
            },
        })
        gsap.to(model.scale, {
            x: 0.5,
            y: 0.5,
            scrollTrigger: {
                trigger: sections[2],
            },
        })
        gsap.to(model.scale, {
            x: 1,
            y: 1,
            scrollTrigger: {
                trigger: sections[3],
            },
        })
        ////// text end
        scene.add(model)
        setTimeout(() => {
            animate()
        }, 5000)

        function animate() {
            updateCamera();
            requestAnimationFrame(animate);
            // model.rotation.y += 0.05
            renderer.render(scene, camera);
        }
    })
    renderer = new THREE.WebGLRenderer({
        antialias: true
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animation);
    renderer.setClearColor(`rgb(0 ,0, 0,1)`, 1)
    document.body.appendChild(renderer.domElement);
    window.addEventListener('resize', () => {

        project.restart()
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
    })
    // gsap.registerPlugin(ScrollTrigger)
    // ScrollTrigger.defaults({
    //     scrub: 3,
    //     ease: 'none',
    // })
    window.addEventListener('mousemove', (e) => {
        const x = e.clientX
        const y = e.clientY
        gsap.to(scene.rotation, {
            y: gsap.utils.mapRange(0, window.innerWidth, 1, -1, x),
            x: gsap.utils.mapRange(0, window.innerHeight, 1, -1, y),
        })
        //    new OrbitControls(camera, renderer.domElement)
    }, false)
    controls = new OrbitControls(camera, renderer.domElement)
    controls.target.set(4.5, 0, 4.5);

    controls.enablePan = false;
    controls.maxPolarAngle = Math.PI / 2;

    controls.enableDamping = true;
    window.requestAnimationFrame(animation);
}
// function onWindowResize() {
//     camera.aspect = window.innerWidth / window.innerHeight;
//     camera.updateProjectionMatrix();
//     renderer.setSize(window.innerWidth, window.innerHeight);
// }


function updateCamera() {
    //offset the camera x/y based on the mouse's position in the window
    camera.position.x = cameraCenter.x + (cameraHorzLimit * mouse.x);
    camera.position.y = cameraCenter.y + (cameraVertLimit * mouse.y);
}

function onDocumentMouseMove(event) {
    event.preventDefault();
    //  const ratio = camera.position.y / camera.position.z
    //  camera.position.y += (event.wheelDelta * this.sensitivity * ratio)
    //  camera.position.z += (event.wheelDelta * this.sensitivity)
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

function animation(time) {

    // mesh.rotation.x = time / 2000;
    // mesh.rotation.y = time / 1000;
    renderer.render(scene, camera);

}