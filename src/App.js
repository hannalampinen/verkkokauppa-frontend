import './App.css';
import { Route, Switch } from "react-router";
import About from "./components/About";
import Footer from "./components/Footer";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFound";
import Contact from "./components/Contact";
import Header from './components/Header';
import ShoppingCart from './components/ShoppingCart';
import Ale from './components/Ale';
import Sisustus from './components/Sisustus';
import Valaisimet from './components/Valaisimet';
import Huonekalut from './components/Huonekalut';
import KaikkiTuotteet from './components/KaikkiTuotteet';
import Faqs from './components/Faqs';


function App() {
  return (
    <>
    <Header />
    <NavBar />
    <div className='container-fluid' id='pageBg'>
      <Switch>
        <Route path="/navbar" component={NavBar} />
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/footer" component={Footer} />
        <Route path="/shoppingcart" component={ShoppingCart} />
        <Route path="/ale" component={Ale} />
        <Route path="/huonekalut" component={Huonekalut} />
        <Route path="/valaisimet" component={Valaisimet} />
        <Route path="/sisustus" component={Sisustus} />
        <Route path="/kaikkituotteet" component={KaikkiTuotteet} />
        <Route path="/faqs" component={Faqs} />
        <Route component={NotFound} />
      </Switch>
    </div>
    <Footer />
    </>
  );
}

export default App;
