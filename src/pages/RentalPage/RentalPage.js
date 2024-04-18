import {useLoaderData } from 'react-router-dom'
import { itemToList } from '../../assets/utils'

import Carousel from '../../components/Carousel/Carousel'
import Dropdown from '../../components/Dropdown/Dropdown'
import Tag from '../../components/Tag/Tag'

import './RentalPage.scss'

export default function RentalPage() {
    const rental = useLoaderData()

    function calcRatingStyle () {
        let ratingIter = [1,2,3,4,5]
        let ratingClassName = true
        return ratingIter.map((iter) => {
            if (iter > parseInt(rental.rating)) {ratingClassName = false}
            return ratingClassName.toString()
        })
    }
    const ratingStyle = calcRatingStyle()

    function splitName (name) {
        let middleIndex = name.lastIndexOf(' ', Math.ceil(name.length / 2))
        if (middleIndex === -1) {middleIndex = name.lastIndexOf(' ')}
        return <div>
            {name.slice(0, middleIndex)}
            <br/>
            {name.slice(middleIndex)}
        </div>
    }
    const hostName = splitName(rental.host.name)

    const picList = rental.pictures.map((pic) => {return (<img src={pic} alt=''></img>)})

    return (
        <main className='main'>
            <div className='main__carousel-container'>
                <Carousel items={picList} />
            </div>
            <div className='main__items'>
                <div className="main__items__container">
                    <div className='main__items__container__title'>
                        <p className='main__items__container__title__title'>{rental.title}</p>
                        <p className='main__items__container__title__location'>{rental.location}</p>
                    </div>
                    <div className='main__items__container__tags'>
                        {rental.tags.map(element => {
                            return <div key={element}>
                                <Tag tag={element} />
                            </div>
                        })}
                    </div>
                </div>
                <div className="main__items__container">
                    <div className='main__items__container__host'>
                        <div className='main__items__container__host__name'>{hostName}</div>
                        <img className='main__items__container__host__pic' src={rental.host.picture} alt={`${rental.host.name}`}></img>
                    </div>
                    <div className='main__items__container__rating'>
                        {ratingStyle.map((style,index) => {
                            return <p key={index} className={`star ${style}`}></p>
                        })}
                    </div>
                </div>
            </div>
            <div className='main__details'>
                <div className='main__details__dropdown'>
                    <Dropdown title="Description" content={rental.description} />
                </div>
                <div className='main__details__dropdown'>
                    <Dropdown title="Équipements" content={itemToList(rental.equipments)} />
                </div>
            </div>            
        </main>
    )
}