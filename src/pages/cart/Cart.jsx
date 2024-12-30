import React, { useContext } from 'react'
import './Cart.css'
import EmptyCart from '../../components/emptycart/EmptyCart'
import CartItems from '../../components/cartitems/CartItems'
import { Context } from '../../context/Context'

const Cart = () => {

  const { cartState } = useContext(Context)

  return (
    <div className='cart-page'>
      {
        cartState === 0 ? <EmptyCart /> : <CartItems />
      }
    </div>
  )
}

export default Cart;