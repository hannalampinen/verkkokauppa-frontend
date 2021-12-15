import React from 'react'

import img3 from './images/gifts.jpg.jpg'

export default function ContactUs() {
    return (
        <section class="row">
        <div class="col-md-6" style={{'padding':'50px','color':'#312416'}}>
            <h2 style={{'padding-bottom':'20px'}}>Ota yhteyttä</h2>
            <h5>Sisustusverkkokauppa Bohemio</h5>
            <p>Sähköposti: info(a)bohemio.fi</p>
            <p>Puhelin: 12301230123</p>
            <p>Tavoitat meidät parhaiten sähköpostilla tai puhelimitse arkisin klo 8-16.</p>
            <p>Y-tunnus 123456-7</p>
            <p>Verkkolaskuosoite (OVT-tunnus): 00231233333221</p>
        </div>
        <div class="col-md-6" style={{'padding':'50px'}}>
        <img style={{'height':'100%', 'width': '100%'}} src={img3} alt=""/>
        </div>
        </section>
    )
}
