import React from 'react'
import Products from '../components/Products'

const Home = () => {
  return (
    <div>
        <h2 className='shopping'>Welcome To the Shopping Cart Store</h2>
        <section>
        <h3>Products</h3>
        <Products/>
        </section>
    </div>
  )
}

export default Home