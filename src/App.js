import './App.css';
import { Route, Switch, useLocation } from "react-router";
import { useEffect, useState} from 'react';
import Footer from "./components/Footer";
import Home from "./Home"; 
import NavBar from "./components/NavBar";
import Header from './components/Header';
import Product from './Product';
import Order from './Order';
import Products from './Products';


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
      if (location.pathname ==="/products") {
        setCategory({id: location.state.id, name:location.state.name});
      } else if (location.pathname === "/product") {
        console.log(location.state);
        setProduct({id: location.state.id, name:location.state.name, price: location.state.price, description: location.state.description, picture: location.state.picture}); //kaksi vikaa lisättiin jounin kanssa.
      }
    }
  },[location.state])

  function addToCart(product) {
    if (cart.some(item => item.id === product.id)) {
      const existingProduct = cart.filter(item => item.id === product.id);
      updateAmount(parseInt(existingProduct[0].amount) + 1, product);
    } else {
      product ["amount"] = 1;
      const newCart = [...cart,product];
      setCart(newCart);
      localStorage.setItem('cart',JSON.stringify(cart));
    }
  }

  function updateAmount(amount, product) {
    product.amount = amount;
    const index = cart.findIndex((item => item.id === product.id));
    const modifiedCart = Object.assign([...cart], {[index]:product});
    setCart(modifiedCart);
    localStorage.setItem('cart', JSON.stringify(modifiedCart));
  }

  function removeFromCart(product) {
    const itemsWithoutRemoved = cart.filter(item => item.id !== product.id);
    setCart(itemsWithoutRemoved);
    localStorage.setItem('cart', JSON.stringify(itemsWithoutRemoved));
  }

  function emptyCart() {
    setCart([]);
    localStorage.removeItem('cart');
  }

  return (
    <>
    <Header />
    <NavBar url={URL} setCategory={setCategory} cart={cart}/>
      <div id='content' className='container-fluid'>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route 
            path="/products" render ={() =>
              <Products 
              url={URL}
              category={category}
              addToCart={addToCart}
            />}
            /* exact */
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
          <Route path="/order" render={() =>
            <Order 
              cart={cart}
              updateAmount={updateAmount}
              removeFromCart={removeFromCart}
              empty={emptyCart}
              url={URL} 
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
