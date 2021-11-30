import React from 'react'
import Header from './inc/Header'
import { useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Home({url, category, addToCart}) {
    const [products, setProducts] = useState([]);
    console.log(category)
    useEffect(() => {
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
                            id: product.id,
                            name: product.name
                            }
                        }}>
                            <img src={url + 'images/' + product.image} alt={product.name} />
                            <div>
                                {product.name}
                            </div>
                    </Link>
                    {product.price}
                    {/* <button class='btn btn-primary' type="button" onClick={e => addToCart(product)}>Lisää ostoskoriin</button> */}

                </div>
            ))}
        </div>
    )
}
