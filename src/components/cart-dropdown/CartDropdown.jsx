import React from 'react'
import './styles.scss'
import Button from '../button/Button'

const CartDropdown = () => {
  return (
    <div className='cart-dropdown-container'>
      <div className="cart-items" />
      <Button>Checkout</Button>
    </div>
  )
}

export default CartDropdown