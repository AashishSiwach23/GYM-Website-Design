import React from 'react'
import "./Footer.css"
const a = new Date();
let year = a.getFullYear();

export default function Footer() {
  return (
    <div className='footer'>
      <nav className='nav-footer'>
        <ul className='ul-footer'>
          <li className='li-footer'><i class="social fab fa-facebook fa-2x" style={{ color: "#ffffff", }}></i> xyz</li>
          <li className='li-footer'><i class="social fab fa-twitter fa-2x"></i> xyz</li>
          <li className='li-footer'><i class="social fab fa-github fa-2x"></i> xyz</li>
        </ul>
      </nav>
      <h5 className='footer-text'>copyright © {year}</h5>
    </div>
  )
}