import { Link } from 'react-router-dom'

import Register from '../Pages/register'

import Logo from '../Assets/img/Logo.svg'
import Fav from '../Assets/img/FAV.svg'
import Cart from '../Assets/img/CART.svg'
import User from '../Assets/img/USER.svg'

const Header = () => {
    return (
        <header>
            <img className='logo' alt="Logo" src={Logo}/>
            <input type='text' placeholder='Search...'/>
            <div className='icon wishlist'>
                <img className='img' alt="Star" src={Fav}/>
                <p>Wishlist</p>
            </div>
            <div className='icon cart'>
                <img className='img' alt="Cart" src={Cart}/>
                <p>Cart</p>
            </div>
            <div className='icon account'>
                <img className='img' alt="User" src={User}/>
                <p>Account</p>
            </div>
        </header>
    )
}

export default Header