import React from 'react'
import { Link } from 'react-router-dom';
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector';

const Navbar = () => {
    const item = useSelector((state)=> state.cart);
  return (
    <div className='navbar'>
        <span className='logo'>Shopping Cart</span>
        <div>
            <Link className='navLink' to='/'>Home</Link>
            <Link className='navLink' to='/cart'>Cart</Link>
            <span className='cartCount'>
                Cart items: {item.length}
            </span>
        </div>
    </div>
  )
}

export default Navbar