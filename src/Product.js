import React from 'react'

export default function Product({url, product, addToCart}) {
    return (
        <div style={{'padding-top' : '50px'}}>
            <h4>{product?.name}</h4>
            {<img src={url + 'images/' + product?.picture} alt={product?.name} id='kuvakoko'/>}
            {product?.price} €
            <div style={{'padding': '30px'}}>
            <button class='btn' style={{'background-color': '#D8CAC5', 'color':'#ffffff'}} type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button></div>
                <div>
                    {product?.description}
                </div>
        </div>
    )
}

