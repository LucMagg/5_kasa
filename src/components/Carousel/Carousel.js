import PropTypes from 'prop-types'
import { useEffect, useState} from 'react'

import './Carousel.scss'

function slide(whichWay, activeSlide, items) {
    let target = (whichWay === 'left') ? activeSlide - 1 : activeSlide + 1
    if (target < 0) {target = items.length - 1}
    if (target === items.length) {target = 0}
    return target
}

export default function Carousel ({items}) {    
    const slideTimer = 5000
    const [activeSlide, setActiveSlide] = useState(0)

    useEffect(() => {
        const timeOut = setTimeout(() => (setActiveSlide(slide('right', activeSlide, items))), slideTimer)
        return () => {clearTimeout(timeOut)}
    },[activeSlide, slideTimer, items])

    return (
        <div className='carousel-container'>
            {items.map((item,index) => {return <div className='carousel-container__slide' key={index} style={{transform: `translateX(${-activeSlide * 100}%)`}}>{item}</div>})}
            {
                items.length > 1 && <>
                    <button className='carousel__button left' aria-label='Précédent' onClick={() => setActiveSlide(slide('left', activeSlide, items))}>
                        <span className='carousel__button__left-icon' aria-hidden='true'></span>
                    </button>
                    <button className='carousel__button right' aria-label='Suivant' onClick={() => setActiveSlide(slide('right', activeSlide, items))}>
                        <span className='carousel__button__right-icon' aria-hidden='true'></span>
                    </button>
                    {items.length > 1 && <p className="carousel__index">{`${activeSlide + 1}/${items.length}`}</p>}
                </>
            }
        </div>
    )
}

Carousel.propTypes = {
    items: PropTypes.array
}