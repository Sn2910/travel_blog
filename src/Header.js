import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
        <header>
            <h1>Travel<span>Blog</span></h1>
            <nav className='navLinks'>
                <Link to="#">Home</Link>
                <Link to="#">About</Link>
                <Link to="#">Contact</Link>
                <Link to="#" className='dest'>Destinations
                    <ul>
                        <li><Link to="#">France - Paris</Link></li>
                        <li><Link to="#">Austria - Vienna</Link></li>
                        <li><Link to="#">Germany - Berlin</Link></li>
                        <li><Link to="#">Romania - Bucharest</Link></li>
                        <li><Link to="#">Netherlands - Amsterdam</Link></li>
                    </ul>
                </Link>
            </nav>
        </header>
    </div>
  )
}
