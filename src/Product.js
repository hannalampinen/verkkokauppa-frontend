import React from 'react'

export default function Product({url, product, addToCart}) {
    return (
        <div style={{'padding-top' : '50px'}}>
            <h4>{product?.name}</h4>
            {product?.price}
            <button class='btn btn-primary' type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
                <div>
                    Tänne tulee tuotetiedot kaikista, vielä kovakoodattu
                </div>
        </div>
    )
}

