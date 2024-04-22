import {useLoaderData } from 'react-router-dom'

import Carousel from '../../components/Carousel/Carousel'
import Dropdown from '../../components/Dropdown/Dropdown'
import Tag from '../../components/Tag/Tag'

import './RentalPage.scss'

function itemToList (item) {
    const items = !Array.isArray(item) ? Array.of(item) : item
    const toReturn = (
        <>
            {items.map(element => {return <p key={element}>{element}</p>})}
        </>
    )
    return toReturn
}

function urlToImg (rental) {
    const toReturn = 
        rental.pictures.map((pic, index) => {
            return (
                <div key={pic} className="rental-pic">
                    <img className="rental-pic__image" src={pic} alt={`${rental.title} ${index}`}></img>
                </div>
            )
        })
    return toReturn
}

function calcRatingStyle (rating) {
    let ratingIter = [1,2,3,4,5]
    let ratingClassName = true
    return ratingIter.map((iter) => {
        if (iter > parseInt(rating)) {ratingClassName = false}
        return ratingClassName.toString()
    })
}

function splitName (name) {
    let middleIndex = name.lastIndexOf(' ', Math.ceil(name.length / 2))
    if (middleIndex === -1) {middleIndex = name.lastIndexOf(' ')}
    return <div>
        {name.slice(0, middleIndex)}
        <br/>
        {name.slice(middleIndex)}
    </div>
}

export default function RentalPage() {
    const rental = useLoaderData()
    const ratingStyle = calcRatingStyle(rental.rating)
    const hostName = splitName(rental.host.name)
    const picList = urlToImg(rental)

    return (
        <div className='rental-main'>
            <div className='rental-main__carousel-container'>
                <Carousel items={picList} />
            </div>
            <div className='rental-main__items'>
                <div className="rental-main__items__container">
                    <div className='rental-main__items__container__title'>
                        <p className='rental-main__items__container__title__title'>{rental.title}</p>
                        <p className='rental-main__items__container__title__location'>{rental.location}</p>
                    </div>
                    <div className='rental-main__items__container__tags'>
                        {rental.tags.map(element => {
                            return <div key={element}>
                                <Tag tag={element} />
                            </div>
                        })}
                    </div>
                </div>
                <div className="rental-main__items__container rental-main__items__host-stars">
                    <div className='rental-main__items__container__host'>
                        <div className='rental-main__items__container__host__name'>{hostName}</div>
                        <img className='rental-main__items__container__host__pic' src={rental.host.picture} alt={`${rental.host.name}`}></img>
                    </div>
                    <div className='rental-main__items__container__rating'>
                        {ratingStyle.map((style,index) => {
                            return <p key={index} className={`star ${style}`}></p>
                        })}
                    </div>
                </div>
            </div>
            <div className='rental-main__details'>
                <div className='rental-main__details__dropdown'>
                    <Dropdown title="Description" content={rental.description} />
                </div>
                <div className='rental-main__details__dropdown'>
                    <Dropdown title="Équipements" content={itemToList(rental.equipments)} />
                </div>
            </div>            
        </div>
    )
}