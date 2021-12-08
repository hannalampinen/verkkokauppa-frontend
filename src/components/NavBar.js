import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import Cart from './Cart';


export default function NavBar({url,setCategory,cart}) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(url + 'products/getcategories.php')
      .then((response) => {
        console.log(response);
        const json = response.data;
        setCategories(json);
        setCategory(json[0]);
      }).catch (error => {
        if (error.response === undefined) {
          alert(error);
        } else {
          alert(error.response.data.error);
        }
      })
  },[])

    return (
      <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className='nav-item'>
                  <Link className='nav-link' to='/'>Etusivu</Link>
                </li>
                <li className='nav-item dropdown'>
                  <a className='nav-link dropdown-toggle' href='#' id='dropdown01' data-bs-toggle='dropdown' aria-expanded='false'>Tuotteet</a>
                  <ul className='dropdown-menu' aria-labelledby='dropdown01'>
                    {/* <li>
                      <Link>Kaikki tuotteet</Link>
                    </li> */}
                    {categories?.map(category => (
                      <li key={category.id}>
                        <Link className="dropdown-item"
                          to={{
                            pathname: '/products',
                            state: {
                              id: category.id,
                              name: category.name
                            }
                          }}
                        >
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
              <ul className='navbar-nav ml-auto' style={{'margin-right':'1em'}}>
                  <li className='nav-item'>
                    <Cart cart={cart}/>
                  </li>
              </ul>
            </div>
          </div>
        </nav>
        
      </>
    )
}

