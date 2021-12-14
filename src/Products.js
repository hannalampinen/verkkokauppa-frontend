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
        <div style={{'padding-top':'60px'}}>
            <h3>{category?.name}</h3>
            {products.map(product => (
                <div key={product.id}> 
                    <Link
                        to={{
                            pathname: '/product',
                            state: { 
                            picture: product.image,
                            description: product.description,
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
                    {/* <button class='btn btn-primary' type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button> */}

                </div>
            ))}
        </div>
    )
}
