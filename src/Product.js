import React from 'react'

export default function Product({url, product, addToCart}) {
    return (
        <div style={{'padding-top' : '50px'}}>
            <h4>{product?.name}</h4>
            {/* <img src={url + 'images/' + product.image} alt={product.name} id='kuvakoko'/> */}
            {product?.price}€
            <button class='btn btn-primary' type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
                <div>
                    {/* {product.description} */}
                </div>
        </div>
    )
}

