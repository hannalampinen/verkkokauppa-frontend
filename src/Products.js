import React from 'react'
import { useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Products({url, category, addToCart}) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    console.log(products);
    if (category !== null) {
      const address = url + 'products/getproducts.php/' + category?.id;
            axios.get(address)
            .then((response) => {
                const json = response.data;
                setProducts(json);
                console.log(json);
            }).catch(error => {
                if (error.response === undefined) {
                    alert(error);
                } else {
                    alert(error.response.data.error);
                }
            })
        }
    },[category])

    return (
        <div style={{'padding-top':'20px'}}>
            
            <h3>{category?.name}</h3>
            <section class="row">

            {products.map(product => (
                <div class="col-md-4 p-2" key={product.id} id='tuotteet'> 
                    <Link
                        to={{
                            pathname: '/product',
                            state: { 
                            picture: product.image,
                            description: product.description, //DESCRIPTION on isolla tietokannassa, siksi ei toiminut. Tai pienellä:D
                            id: product.id,
                            name: product.name,
                            price: product.price
                            }
                        }}>
                        
                            <img src={url + 'images/' + product.image} alt={product.name} id='kuvakoko'/>
                            <div>
                                {product.name}
                            </div>
                           
                    </Link>
                    {product.price}€
                    <div style={{'padding': '20px'}}>
                    <button class='btn' style={{'background-color': '#D8CAC5', 'color':'#ffffff'}} type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button>
                    </div>
                
                    {/* <button class='btn btn-primary' type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button> */}

                </div>
            ))}
            </section>
        </div>
    )
}
