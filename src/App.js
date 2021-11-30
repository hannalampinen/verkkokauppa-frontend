import './App.css';
import { Route, Switch, useLocation } from "react-router";
import { useEffect, useState} from 'react';
import Footer from "./inc/Footer";
import Home from "./Home";
import NavBar from "./inc/NavBar";
import Header from './inc/Header';
import Product from './Product';


const URL = "http://localhost/webshop/";

function App() {
  const [category, setCategory] = useState(null);
  const [product, setProduct] = useState(null);
  const [cart, setCart]= useState([]);

  let location = useLocation();

  useEffect(() => {
    if ('cart' in localStorage) {
      setCart(JSON.parse(localStorage.getItem('cart')));
    }
  },[])

  useEffect(() => {
    if (location.state !== undefined) {
      if (location.pathname ==="/") {
        setCategory({id: location.state.id, name:location.state.name});
      } else if (location.pathname === "/product") {
        setProduct({id: location.state.id, name:location.state.name});
      }
    }
  },[location.state])

  function addToCart(product) {
    const newCart = [...cart,product];
    setCart(newCart);
    localStorage.setItem('cart',JSON.stringify(cart));
  }

  return (
    <>
    <Header />
    <NavBar url={URL} setCategory={setCategory} cart={cart}/>
      <div id='content' className='container-fluid'>
        <Switch>
          <Route 
            path="/" render ={() =>
              <Home 
              url={URL}
              category={category}
              addToCart={addToCart}
            />}
            exact
          />
          <Route 
            path='/product'
            render={() =>
              <Product
                url={URL}
                product={product}
                addToCart={addToCart}
              />
            }
          />
        </Switch>
      </div>
    <Footer />
    </>
  );
}

export default App;
