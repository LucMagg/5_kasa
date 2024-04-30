import Dropdown from '../../components/Dropdown/Dropdown'

import aboutData from '../../data/about.json'
import backgroundImage from '../../assets/images/about-backgrd.jpg'

import './About.scss'

export default function About() {
    return (
        <div className='about-main'>
            <h2 className='about-main__title'>A propos</h2>
            <div className='about-main__header'>
                <img className='about-main__header__img' src={backgroundImage} alt=""></img>
            </div>
            <div className='about-main__dropdown'>
                {aboutData && aboutData.map(element => {
                    return <div className='about-main__dropdown__item' key={element.title}>
                        <h3 className='about-main__dropdown__title'>{element.title}</h3>
                        <Dropdown title={element.title} content={element.description} />
                    </div>
                })}
            </div>              
        </div>
    )
}