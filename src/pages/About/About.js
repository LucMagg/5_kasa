import Dropdown from '../../components/Dropdown/Dropdown'

import aboutData from '../../data/about.json'
import backgroundImage from '../../assets/images/about-backgrd.jpg'

import './About.scss'

export default function About() {
    return (
        <div className='about-main'>
            <div className='about-main__header'>
                <img className='about-main__header__img' src={backgroundImage} alt=""></img>
            </div>
            <div className='about-main__dropdown'>
                {aboutData && aboutData.map(element => {
                    return <div className='about-main__dropdown__item' key={element.title}>
                        <Dropdown title={element.title} content={element.description} />
                    </div>
                })}
            </div>              
        </div>
    )
}