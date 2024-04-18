import './Card.scss'

export default function Card({ rental }) {
    return <div className="gallery__card">
            <img src={rental.cover} alt={rental.title}></img>
            <h3>{rental.title}</h3>
        </div>
}