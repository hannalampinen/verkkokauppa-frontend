import React from 'react'



export default function Product({url, product, addToCart}) {
    return (
        <div style={{'padding' : '40px'}}>

            <section class="row">


            <div class="col-4">
            {<img src={url + 'images/' + product?.picture} alt={product?.name} id='kuvakoko2'/>}
            </div>


                <div class="col-4">
                <h2>{product?.name}</h2>
                <div style={{'font-size':'20pt', 'padding-bottom': '40px'}}>
                {product?.price} €
                </div>
                    {product?.description}
                    <div style={{'padding': '30px'}}>
                    <button class='btn' style={{'background-color': '#D8CAC5', 'color':'#ffffff'}} type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
                    </div>
                </div>
                
                </section>

        </div>
    )
}


