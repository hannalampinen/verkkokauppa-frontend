import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost/webshop/products/getcategories.php')
      .then((response) => {
        console.log(response);
        const json = response.data;
        setCategories(json);

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
                  <Link className='nav-link' aria-current='page' to='/'>Etusivu</Link>
                </li>
                <li className='nav-item dropdown'>
                  <a className='nav-link dropdown-toggle' href='#' id='dropdown01' data-bs-toggle='dropdown' aria-expanded='false'>Tuotteet</a>
                  <ul className='dropdown-menu' aria-labelledby='dropdown01'>
                    {categories?.map(category => (
                      <li>
                        <Link>
                          {category.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                
              </ul>
            </div>
          </div>
        </nav>
        
      </>
    )
}

{/* <nav id='navigaatio' className="py-2 bg-light">
            <div className="container-fluid d-flex flex-wrap">
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <ul className="nav me-auto nav-fill w-100">
                <li className="nav-item"><Link className='nav-link' to='/'>Etusivu</Link></li>
                <li className="nav-item"><Link className='nav-link' to='/kaikkituotteet'>Kaikki tuotteet</Link></li>
                <li className="nav-item"><Link className='nav-link' to='/huonekalut'>Huonekalut</Link></li>
                <li className="nav-item"><Link className='nav-link' to='/valaisimet'>Valaisimet</Link></li>
                <li className="nav-item"><Link className='nav-link' to='/sisustus'>Sisustusesineet</Link></li>
                <li className="nav-item"><Link className='nav-link' to='/shoppingcart'>Ostoskori</Link></li>
                <li className="nav-item"><Link className='nav-link' to='/shoppingcart'>Kirjaudu sisään</Link></li>
              </ul>
            </div>
          </nav> */}

{/* <ul className="nav me-auto nav-fill w-100">
<li className="nav-item"><Link className='nav-link' to='/'>Etusivu</Link></li>
<li className="nav-item"><Link className='nav-link' to='/kaikkituotteet'>Kaikki tuotteet</Link></li>
<li className="nav-item"><Link className='nav-link' to='/huonekalut'>Huonekalut</Link></li>
<li className="nav-item"><Link className='nav-link' to='/valaisimet'>Valaisimet</Link></li>
<li className="nav-item"><Link className='nav-link' to='/sisustus'>Sisustusesineet</Link></li>
<li className="nav-item"><Link className='nav-link' to='/shoppingcart'>Ostoskori</Link></li>
<li className="nav-item"><Link className='nav-link' to='/shoppingcart'>Kirjaudu sisään</Link></li>
</ul> */}

{/* 
  nav-fill w-100
  <li className="nav-item"><Link className='nav-link' to='/'>Etusivu</Link></li>
                <li className="nav-item"><Link className='nav-link' to='/kaikkituotteet'>Kaikki tuotteet</Link></li>
                <li className="nav-item"><Link className='nav-link' to='/huonekalut'>Huonekalut</Link></li>
                <li className="nav-item"><Link className='nav-link' to='/valaisimet'>Valaisimet</Link></li>
                <li className="nav-item"><Link className='nav-link' to='/sisustus'>Sisustusesineet</Link></li>
                <li className="nav-item"><Link className='nav-link' to='/shoppingcart'>Ostoskori</Link></li>
                <li className="nav-item"><Link className='nav-link' to='/shoppingcart'>Kirjaudu sisään</Link></li> */}


 
        