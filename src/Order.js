import React,{useState} from 'react';
import uuid from 'react-uuid';
import './Order.css';

export default function Order({cart,updateAmount,removeFromCart,empty,url}){

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [zip, setZip] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
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
        phone: phone,
        email: email,
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
      <div class='container' id='ordersivu'>
        <div class="py-5 text-center">
          <h2>Tilaus</h2>
        </div>
        <div>
          <div class="col-md-12 col-lg-12 order-md-last">
            <h4 class="d-flex justify-content-between align-items-center mb-3">
              <span class='mb-3 mt-3'>Ostoskori</span>
            </h4>
            <table className="table">
              <tbody>
                {cart.map(product => {
                  sum+=parseFloat(product.price) * parseInt(product.amount);
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
                      <td><a id='ostoskori' style={{'color': '#312416'}} href='#' onClick={() => removeFromCart(product)}>Poista tuote</a></td>
                    </tr>
                  )
                })}
                <tr key={uuid()}>
                <td style={{'color': '#312416'}} className="sumrow">Yhteensä:</td>
                <td className="sumrow">{sum.toFixed(2)}€</td>
                <td></td>
                <td></td>
                <td className="sumrow"><a id='ostoskori' style={{'color': '#312416'}} href="#" onClick={e => empty()}>Tyhjennä ostoskori</a></td> 
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        {cart.length > 0 && //render order form, if there is something in cart.
        <>
        <div class="row">
            <div class="col">
              <h4 class="mb-4 mt-4">Asiakkaan tiedot</h4>
              <form onSubmit={order}>
                <div class="row">
                  <div class="col-12 col-sm-6">
                    <label for="firstName" class="form-label">Etunimi</label>
                    <input type="text" class="form-control" id="firstName" onChange={e => setFirstname(e.target.value)}/>
                  </div>
                  <div class="col-12 col-sm-6">
                    <label for="lastName" class="form-label">Sukunimi</label>
                    <input type="text" class="form-control" id="lastName"  onChange={e => setLastname(e.target.value)}/>
                  </div>
                  <div class="col-12">
                    <label for="address" class="form-label">Osoiterivi</label>
                    <input type="text" class="form-control" id="address" onChange={e => setAddress(e.target.value)}/>
                  </div>
                  <div class="col-12 col-sm-6">
                    <label for="city" class="form-label">Kaupunki</label>
                    <input type="text" class="form-control" id="city" onChange={e => setCity(e.target.value)} />
                  </div>
                  <div class="col-12 col-md-6">
                    <label for="zip" class="form-label">Postinumero</label>
                    <input type="text" class="form-control" id="zip" onChange={e => setZip(e.target.value)}/>
                  </div>

                  <div class="col-12">
                    <label for="email" class="form-label">Sähköposti</label>
                    <input type="email" class="form-control" id="email" onChange={e => setEmail(e.target.value)}/>
                  </div>

                  <div class="col-sm-6 col-12">
                    <label for="phone" class="form-label">Puhelinnumero</label>
                    <input type="text" class="form-control" id="phone" onChange={e => setPhone(e.target.value)}/>
                  </div>
                </div>

                <hr class="my-4" />

                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="same-address" />
                  <label class="form-check-label" for="same-address">Hyväksyn tilaus- ja toimitusehdot.</label>
                </div>

                <hr class="my-4" />
                <button class="w-100 btn btn-lg" style={{'background-color': '#D8CAC5', 'color':'#ffffff'}} type="submit">Tilaa</button>
              </form>
            </div>
          </div>
        </>
        }
      </div>
    )
  }
else {
  return (
    <>
      <h3 style={{'padding-top': '100px'}}>Kiitos tilauksestasi!</h3>
      <p style={{'text-align' :'center', 'padding-bottom' : '200px'}}>Lähetämme sinulle vahvistuksen tilauksestasi sähköpostiin.</p>
    </>
  );
}
}


{/* <div class="container">
          <div class="py-5 text-center">
            <h2>Tilaus</h2>
          </div>
          <div class="row g-5">
            

            <div class="col-md-7 col-lg-8">
              <h4 class="mb-3">Asiakkaan tiedot</h4>
              <form onSubmit={order}>
                <div class="row g-3">
                  <div class="col-sm-6">
                    <label for="firstName" class="form-label">Etunimi</label>
                    <input type="text" class="form-control" id="firstName" placeholder="" value="" required onChange={e => setFirstname(e.target.value)}/>
                    <div class="invalid-feedback">
                      Etunimi vaaditaan.
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <label for="lastName" class="form-label">Sukunimi</label>
                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required onChange={e => setLastname(e.target.value)}/>
                    <div class="invalid-feedback">
                      Sukunimi vaaditaan.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="address" class="form-label">Osoiterivi</label>
                    <input type="text" class="form-control" id="address" onChange={e => setAddress(e.target.value)}/>
                    <div class="invalid-feedback">
                      Osoite vaaditaan.
                    </div>
                  </div>

                  <div class="col-sm-6">
                    <label for="lastName" class="form-label">Kaupunki</label>
                    <input type="text" class="form-control" id="lastName" placeholder="" value="" required onChange={e => setCity(e.target.value)}/>
                    <div class="invalid-feedback">
                      Kaupunki vaaditaan.
                    </div>
                  </div>

                  <div class="col-md-6">
                    <label for="zip" class="form-label">Postinumero</label>
                    <input type="text" class="form-control" id="zip" placeholder="" required onChange={e => setZip(e.target.value)}/>
                    <div class="invalid-feedback">
                      Zip code required.
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="email" class="form-label">Sähköposti</label>
                    <input type="email" class="form-control" id="email" required onChange={e => setEmail(e.target.value)}/>
                    <div class="invalid-feedback">
                      Sähköpostiosoite vaaditaan.
                    </div>
                  </div>

                  <div class="col-6">
                    <label for="address" class="form-label">Puhelinnumero</label>
                    <input type="text" class="form-control" id="phone" onChange={e => setPhone(e.target.value)}/>
                  </div>
                </div>

                <hr class="my-4" />

                <div class="form-check">
                  <input type="checkbox" class="form-check-input" id="same-address" />
                  <label class="form-check-label" for="same-address">Hyväksyn tilaus- ja toimitusehdot.</label>
                </div>

                <hr class="my-4" />
                <button class="w-100 btn btn-primary btn-lg" type="submit">Tilaa</button>
              </form>
            </div>
          </div>
      </div> */}
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

