function itemToList (item) {
    const items = !Array.isArray(item) ? Array.of(item) : item
    const toReturn = (
        <>
            {items.map(element => {return <p key={element}>{element}</p>})}
        </>
    )
    return toReturn
}

export { itemToList }