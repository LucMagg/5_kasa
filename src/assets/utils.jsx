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
                    {rental.pictures.length > 1 && <p className="rental-pic__index">{`${index + 1}/${rental.pictures.length}`}</p>}
                </div>
            )
        })
    return toReturn
}

export { itemToList, urlToImg }