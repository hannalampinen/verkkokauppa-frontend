import React from 'react'
import Header from './components/Header'
import { useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import img1 from './images/boho4.jpg';



export default function Home() {
 
    return (
        <div style={{'padding':'50px', 'text-align':'center', 'color':'#312416'}}>
            <h3>TERVETULOA BOHEMION VERKKOKAUPPAAN!</h3>

            <p style={{'padding':'40px','font-size':'17pt', 'color':'#312416'}}>Sisustustuotteemme ovat saaneet inspiraationsa trooppisten maiden luonnonmateriaaleista ja 
            rennosta elämäntyylistä. Valikoimaamme kuuluu piensisustustuotteita sekä huonekaluja. 

            Suurin osa tuotteistamme valmistetaan käsityönä, joten jokainen tuote on uniikki ja persoonallinen. Haluamme tukea paikallisia pienyrityksiä, sekä
            käsityöläisiä Balilla.</p>
            <figure>
            <img style={{'height':'100%', 'width': '100%', 'border': 'solid', 'color': '#D8CAC5'}} src={img1} alt=""/>
            </figure>
        </div>
        
    )


}






