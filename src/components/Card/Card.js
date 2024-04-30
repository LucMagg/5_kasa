import './Card.scss'

export default function Card({ rental }) {
    return <div className="gallery__card">
            <img className="gallery__card__pic" src={rental.cover} alt=""></img>
            <h3 className="gallery__card__title">{rental.title}</h3>
        </div>
}