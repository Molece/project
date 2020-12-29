import React from 'react'

function Details({item, itemToRemove}){
    const {name, price } = item

    const onDelete = () => {
        itemToRemove(name)
    }

    return (
        <div className="card" style={{width: '88rem', marginTop: '0rem', }}>
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{price}</h6>
                <p className="card-text">This is an example of displaying a card containing the item name and its price in Malawian Kwacha </p>
                <button onClick={onDelete} className="btn btn-danger">Delete</button>
            </div>
        </div>
    )
}

export default Details