import React,{useState} from 'react';
import uuid from 'react-uuid';
import './Order.css';

export default function Order({cart,updateAmount,removeFromCart,empty,url}){

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [finished, setFinished] = useState(false);

  function changeAmount(e,product) {
    updateAmount(e.target.value,product);
  }

  function order(e) {
    e.preventDefault();
    fetch(url + 'order/add.php', {
      method: 'POST',
      header: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstname: firstname,
        lastname: lastname,
        address: address,
        zip: zip,
        city: city,
        cart: cart,
      })
    })
    .then (res => {
      return res.json();
    })
    .then (
      (res) => {
      empty();
        setFinished(true);
      },(error) => {
        alert(error);
      }
    )
  }

  let sum = 0;

  if (finished === false) {
    return (
      <div>
        <h3 className="header">Ostoskori</h3>
        <table className="table">
          <tbody>
            {cart.map(product => {
              sum+=parseFloat(product.price);
              return (
                <tr key={uuid()}>
                  <td>{product.name}</td>
                  <td>{product.price}€</td>
                  <td>
                     Kpl
                    <input 
                       id='tuotekpl'
                       type='number' 
                       step="1"
                       onChange={e => changeAmount(e,product)}
                       value={product.amount}
                     /> 
                   </td>
                  <td>{product.amount} x {product.price}€</td>
                   <td><a href='#' onClick={() => removeFromCart(product)}>Poista tuote</a></td>
                 </tr>
              )
            })}
            <tr key={uuid()}>
            <td className="sumrow">Yhteensä:</td>
            <td className="sumrow">{sum.toFixed(2)}€</td>
            <td className="sumrow"><a href="#" onClick={e => empty()}>Tyhjennä ostoskori</a></td> 
            </tr>
          </tbody>
        </table>
        {cart.length > 0 && //render order form, if there is something in cart.
        <>
        <h3 className="header">Asiakkaan tiedot</h3>
        <form onSubmit={order}>
          <div className="form-group">
            <label>Etunimi:</label>
            <input className="form-control" onChange={e => setFirstname(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Sukunimi:</label>
            <input className="form-control" onChange={e => setLastname(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Osoite:</label>
            <input className="form-control" onChange={e => setAddress(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Postinumero:</label>
            <input className="form-control" onChange={e => setZip(e.target.value)}/>
          </div>
          <div className="form-group">
            <label>Kaupunki:</label>
            <input className="form-control" onChange={e => setCity(e.target.value)}/>
          </div>
          <div className="buttons" style={{'padding': '30px'}}>
            <button className="btn" style={{'background-color': '#D8CAC5', 'color':'#ffffff'}} type='button' onClick={e => order(e)}>Tilaa</button>
          </div>
        </form>
        </>
        }
      </div>
    )
  }
else {
  return (<h3 style={{'padding-top': '100px'}}>Kiitos tilauksestasi!</h3>);
}

}
//import React,{useState} from 'react';
// import { useEffect } from 'react/cjs/react.development';
// import Cart from './components/Cart'
// import './Order.css';

// export default function Order({cart,updateAmount,removeFromCart}) {

//   function changeAmount(e,product) {
//     updateAmount(e.target.value,product);
//   }

//     return (
//       <div>
//         <h4>Ostoskori</h4>
//           <table>
//             {cart.map((product)=> {
//               return (
//                 <tr>
//                   <td>{product.name}</td>
//                   <td>{product.price} €</td>
//                   <td>
//                     {/* <button className='add' onClick={e => changeAmount(e,product)} value={product.amount}> 
//                     +</button> */}
//                     Kpl
//                    <input 
//                       id='tuotekpl'
//                       type='number' 
//                       step="1"
//                       onChange={e => changeAmount(e,product)}
//                       value={product.amount}
//                     /> 
//                     {/* <button className='remove' onClick={e => changeAmount(e,product)} value={product.amount}> 
//                     -</button> */}
//                   </td>
//                   <td>{product.amount} x {product.price} €</td>
//                   <td><a href='#' onClick={() => removeFromCart(product)}>Poista tuote</a></td>
//                 </tr>
//               );
//             })}
//           </table>
//           <div id='lomake'>
//             <h4>Tilauslomake</h4>
//             <form>
//               <div class="form-row">
//                 <div class="col-md-6">
//                   <label for="inputEmail4">Etunimi</label>
//                   <input type="email" class="form-control" id="inputEmail4" placeholder="First name" />
//                 </div>
//                 <div class="col-md-6">
//                   <label for="inputPassword4">Sukunimi</label>
//                   <input type="password" class="form-control" id="inputPassword4" placeholder="Last name" />
//                 </div>
//               </div>
//               <div class="form-group col-md-6">
//                 <label for="inputAddress">Osoite</label>
//                 <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
//               </div>
//               <div class="form-row">
//                 <div class="form-group col-md-6">
//                   <label for="inputCity">Kaupunki</label>
//                   <input type="text" class="form-control" id="inputCity" />
//                 </div>
//                 <div class="form-group col-md-2">
//                   <label for="inputZip">Postinumero</label>
//                   <input type="text" class="form-control" id="inputZip" />
//                 </div>
//                 <div class="form-group col-md-4">
//                   <label for="inputState">Toimitus</label>
//                   <select id="inputState" class="form-control">
//                     <option selected>Toimitusvaihtoehtoja</option>
//                     <option>...</option>
//                   </select>
//                 </div>
//               </div>
//               <div class="form-group">
//                 <div class="form-check">
//                   <input class="form-check-input" type="checkbox" id="gridCheck" />
//                   <label class="form-check-label" for="gridCheck">
//                     Hyväksyn jotain 
//                   </label>
//                 </div>
//               </div>
//               <button type="submit" class="btn btn-primary">Sign in</button>
//             </form>
//           </div>
//       </div>

//     )
// }

