import React from 'react'

import img2 from './images/room.jpg';

export default function About() {
    return (
        <div style={{'padding-top':'70px', 'text-align':'center'}}>
            <h2 style={{'color':'#312416'}}>Meistä</h2>
            <p style={{'padding':'20px', 'color':'#312416'}}>Bohemio sai alkunsa kun viisi rohkeaa tietojenkäsittelyn opiskelijaa halusivat perustaa yrityksen ja päättivät aloittaa verkkokauppaprojektin yhdessä. 
            Inspiraatio verkkokaupan tuotteisiin sai alkunsa rakkaudesta matkusteluun ja eksoottisiin maihin. 
            Haluamme tukea paikallisia pienyrittäjiä Balilla sekä verkkokauppamme tuotteet on valmistettu pääosinluonnonmateriaaleista.</p>
            <p style={{'color':'#312416'}}>Myymme piensisutustuotteita, valaisimia sekä huonekaluja, jotka tekevät kodistasi viihtyisän ja kodikkaan.</p>
            <figure>
            <img style={{'height':'50%', 'width': '50%', 'border': 'solid', 'color': '#D8CAC5'}} src={img2} alt=""/>
            </figure>
        </div>

    )
}
