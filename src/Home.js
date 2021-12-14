import React from 'react'
import Header from './components/Header'
import { useEffect, useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Home() {
 
    return (
        <div style={{'padding':'50px', 'text-align':'center'}}>
            <h3>TERVETULOA BOHEMION VERKKOKAUPPAAN!</h3>

            Sisustustuotteemme ovat saaneet inspiraationsa trooppisten maiden luonnonmateriaaleista ja 
            rennosta elämäntyylistä. Valikoimaamme kuuluu piensisustustuotteita sekä huonekaluja. 

            Suurin osa tuotteistamme valmistetaan käsityönä, joten jokainen tuote on uniikki ja persoonallinen. Haluamme tukea paikallisia pienyrityksiä, sekä
            käsityöläisiä Balilla.
        </div>
    )
}
