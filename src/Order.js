import React from 'react'
import { useEffect } from 'react/cjs/react.development';
import Cart from './components/Cart'
import './Order.css';

export default function Order({cart,updateAmount,removeFromCart}) {

  function changeAmount(e,product) {
    updateAmount(e.target.value,product);
  }

    return (
      <div>
        <h4>Ostoskori</h4>
          <table>
            {cart.map((product)=> {
              return (
                <tr>
                  <td>{product.name}</td>
                  <td>{product.price} €</td>
                  <td>
                    {/* <button className='add' onClick={e => changeAmount(e,product)} value={product.amount}> 
                    +</button> */}
                    Kpl
                   <input 
                      id='tuotekpl'
                      type='number' 
                      step="1"
                      onChange={e => changeAmount(e,product)}
                      value={product.amount}
                    /> 
                    {/* <button className='remove' onClick={e => changeAmount(e,product)} value={product.amount}> 
                    -</button> */}
                  </td>
                  <td>{product.amount} x {product.price} €</td>
                  <td><a href='#' onClick={() => removeFromCart(product)}>Poista tuote</a></td>
                </tr>
              );
            })}
          </table>
          <div id='lomake'>
            <h4>Tilauslomake</h4>
            <form>
              <div class="form-row">
                <div class="col-md-6">
                  <label for="inputEmail4">Etunimi</label>
                  <input type="email" class="form-control" id="inputEmail4" placeholder="First name" />
                </div>
                <div class="col-md-6">
                  <label for="inputPassword4">Sukunimi</label>
                  <input type="password" class="form-control" id="inputPassword4" placeholder="Last name" />
                </div>
              </div>
              <div class="form-group col-md-6">
                <label for="inputAddress">Osoite</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St" />
              </div>
              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="inputCity">Kaupunki</label>
                  <input type="text" class="form-control" id="inputCity" />
                </div>
                <div class="form-group col-md-2">
                  <label for="inputZip">Postinumero</label>
                  <input type="text" class="form-control" id="inputZip" />
                </div>
                <div class="form-group col-md-4">
                  <label for="inputState">Toimitus</label>
                  <select id="inputState" class="form-control">
                    <option selected>Toimitusvaihtoehtoja</option>
                    <option>...</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" id="gridCheck" />
                  <label class="form-check-label" for="gridCheck">
                    Hyväksyn jotain 
                  </label>
                </div>
              </div>
              <button type="submit" class="btn btn-primary">Sign in</button>
            </form>
          </div>
      </div>

    )
}

