import React from 'react'
import icon from './icon.png'
import cart from './cart.png'
import heart from './heart.png'
import menu from './menu.png'
import './navbar.scss'

const Navbar = () => {
    return (
        <div className='navbar'>
            <img src={icon} alt="" className='logo'/>
            <ul className='categorie'>
                <li> <a href=""> Nouveauté</a> </li>
                <li> <a href=""> Homme</a> </li>
                <li> <a href=""> Femme</a> </li>
                <li> <a href=""> Enfants</a> </li>
            </ul>
            <div className="icon">
            <a href="" className='heart'><img src={heart} alt=""/></a>
            <a href="" className='cart'><img src={cart} alt=""/></a>
            <a href="" className='menuMobile'><img src={menu} alt=""/></a>
            </div>
        </div>
    )
}

export default Navbar
