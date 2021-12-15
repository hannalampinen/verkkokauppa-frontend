import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <div>
            <footer className="py-2 my-2">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link className='nav-link' to='/faq'>FAQ's</Link></li>
                    <li className="nav-item"><Link className='nav-link' to='/about'>Meistä</Link></li>
                    <li className="nav-item"><Link className='nav-link' to='/contactUs'>Ota yhteyttä</Link></li>
                </ul>
                <p className="text-center text-muted">&copy; 2021 Bohemio</p>
            </footer>
        </div>
    )
}
