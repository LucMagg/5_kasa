import PropTypes from 'prop-types'
import { useEffect, useState, useRef } from 'react'

import './Carousel.scss'



export default function Carousel ({items}) {    
    const slideTimer = 5000
    const [activeSlide, setActiveSlide] = useState(0)
    const timeOut = useRef(null)

    function targetSlide(offset) {
        let target = activeSlide + offset;
        if (target < 0) {
            target = items.length + offset;
        } else if (target >= items.length) {
            target = 0;
        }
        return target;
    }

    function slide(classToApply) {
        if (classToApply === 'slide-to-left') {
            setActiveSlide(targetSlide(-1));
        } else {
            setActiveSlide(targetSlide(1));
        }
    }

    function resetTimeout() {
        timeOut.current && clearTimeout(timeOut.current)
    }

    useEffect(() => {
        timeOut.current = setTimeout(() => {setActiveSlide(targetSlide(1))},slideTimer)
        return () => resetTimeout()
    },[activeSlide])

    return (
        <div className='carousel-container'>
            {items.map((item,index) => {return <div className='carousel-container__slide' key={index} style={{transform: `translateX(${-activeSlide * 100}%)`}}>{item}</div>})}
            {
                items.length > 1 && <>
                    <button className='carousel__button left' aria-label='Précédent' onClick={() => slide("slide-to-left")}>
                        <span className='carousel__button__left-icon' aria-hidden='true'></span>
                    </button>
                    <button className='carousel__button right' aria-label='Suivant' onClick={() => slide("slide-to-right")}>
                        <span className='carousel__button__right-icon' aria-hidden='true'></span>
                    </button>
                </>
            }
        </div>
    )
}

Carousel.propTypes = {
    items: PropTypes.array
}