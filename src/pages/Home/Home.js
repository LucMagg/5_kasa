import { Link, useLoaderData } from 'react-router-dom'

import Card from "../../components/Card/Card"

import './Home.scss'
import backgroundImage from '../../assets/images/home-backgrd.jpg'

export default function Home() {
    const rentals = useLoaderData();

    return (
        <div className='home-main'>
            <div className='home-main__header'>
                <img className='home-main__header__img' src={ backgroundImage } alt=""></img>
                <p className='home-main__header__text'>
                    <span className='home-main__header__text__to-wrap'>Chez vous, </span>
                    <span className='home-main__header__text__to-wrap'>partout et ailleurs</span>
                </p>
            </div>
            <div className='home-main__gallery'>
                <h2 className='home-main__gallery__title'>Galerie</h2>
                {rentals.map(rental => {
                    return <div className='home-main__gallery__card' key={rental.id}>
                        <Link className='home-main__gallery__card__link' to={`/rental/${rental.id}`}>
                            <Card rental={rental} />
                        </Link>
                    </div>
                })}
            </div>
        </div>
    )
}