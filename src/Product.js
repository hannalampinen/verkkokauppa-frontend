import React from 'react'



export default function Product({url, product, addToCart}) {
    return (
        <div style={{'padding' : '50px'}}>

            <section class="row">


            <div style={{'padding-top': '20px', 'padding-right': '30px'}} class="col-md-4">
            {<img src={url + 'images/' + product?.picture} alt={product?.name} id='kuvakoko2'/>}
            </div>


                <div class="col-md-4">
                <h2 style={{'padding-top': '20px'}}>{product?.name}</h2>
                <div style={{'font-size':'20pt', 'padding-bottom': '20px'}}>
                {product?.price} €
                </div>
                    {product?.description}
                    <div style={{'padding-top': '20px'}}>
                    <button class='btn' style={{'background-color': '#D8CAC5', 'color':'#ffffff'}} type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
                    </div>
                </div>
                
                </section>

        </div>
    )
}


