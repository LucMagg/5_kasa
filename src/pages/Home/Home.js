import { Link, useLoaderData } from 'react-router-dom'

import Card from "../../components/Card/Card"

import './Home.scss'
import backgroundImage from '../../assets/images/home-backgrd.jpg'

export default function Home() {
    const rentals = useLoaderData();

    return (
        <div className='main'>
            <div className='main__header'>
                <img src={ backgroundImage } alt=""></img>
                <p>Chez vous, partout et ailleurs</p>
            </div>
            <div className="main__gallery">
                <h2>Gallerie</h2>
                {rentals.map(rental => {
                    return <div key={rental.id}>
                        <Link to={`/rental/${rental.id}`}>
                            <Card rental={rental} />
                        </Link>
                    </div>
                })}
            </div>
        </div>
    )
}