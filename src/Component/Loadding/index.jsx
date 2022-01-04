import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './style.scss'
import { init } from '../../utils/initDroneLayer'
function Loading(props) {
    const [numberLoading, setNumberLoading] = useState(0)
    useEffect(() => {
        const progressBar = document.getElementById('loa')
        const computedStyle = getComputedStyle(progressBar)
        let a = setInterval(() => {
            const computedStyle = getComputedStyle(progressBar)
            const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0
            if (width <= 90) {
                setNumberLoading(parseInt(width) + 10)
                progressBar.style.setProperty('--width', width + .1)
            } else clearInterval(a)
        }, 0.75)
    }, [])


    return (
        <>
            <div classname='progress-bar' id="loa" data-label={`${numberLoading}% Loading...`} >

            </div>

        </>


    );
}

export default Loading;