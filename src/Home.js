import React from 'react'
import { useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Parallax } from 'react-parallax';
import img1 from './images/boho4.jpg';
import img2 from './images/plants.jpg';
import img3 from './images/bali.jpg';
import img4 from './images/pink.jpg';


const inlineStyle = {
  background: '#faf0e6',
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '50px',
  transform: 'translate(-50%, -50%)',
  opacity: '90%'
}

const inlineStyle2 = {
  background: '#faf0e6',
  left: '50%',
  top: '50%',
  position: 'absolute',
  padding: '50px',
  transform: 'translate(-50%, -50%)',
  opacity: '90%'
}

export default function Home() {
  return (
    <div className='App'>
      <Parallax bgImage={img2} strength={300}>
        <div style={{ height:500}}>
          <div style={inlineStyle}>
            <h3>Tervetuloa Bohemion verkkokauppaan</h3>
          </div>
        </div>
      </Parallax>
      <div style={{height : '10px'}}></div>
      <Parallax bgImage={img4} strength={300}>
        <div style={{ height:500}}>
          <div style={inlineStyle2}>
            Sisustustuotteemme ovat saaneet inspiraationsa trooppisten maiden luonnonmateriaaleista ja 
            rennosta elämäntyylistä. Valikoimaamme kuuluu piensisustustuotteita sekä huonekaluja. 
            Suurin osa tuotteistamme valmistetaan käsityönä, joten jokainen tuote on uniikki ja persoonallinen. Haluamme tukea paikallisia pienyrityksiä, sekä
            käsityöläisiä Balilla.
            </div>
        </div>
      </Parallax>
    </div>
        
  )


}

{/* <div style={{'padding':'50px', 'text-align':'center', 'color':'#312416'}}>
            <h3>TERVETULOA BOHEMION VERKKOKAUPPAAN!</h3>

            <p style={{'padding':'40px','font-size':'17pt', 'color':'#312416'}}>Sisustustuotteemme ovat saaneet inspiraationsa trooppisten maiden luonnonmateriaaleista ja 
            rennosta elämäntyylistä. Valikoimaamme kuuluu piensisustustuotteita sekä huonekaluja. 

            Suurin osa tuotteistamme valmistetaan käsityönä, joten jokainen tuote on uniikki ja persoonallinen. Haluamme tukea paikallisia pienyrityksiä, sekä
            käsityöläisiä Balilla.</p>
            <figure>
            <img style={{'height':'100%', 'width': '100%', 'border': 'solid', 'color': '#D8CAC5'}} src={img1} alt=""/>
            </figure>
        </div> */}
        






