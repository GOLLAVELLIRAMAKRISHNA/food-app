import React, { useContext } from 'react'
import './FoodCart.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context';


const FoodCart = ({ item }) => {

    const { cartItem, setCartItem, setCartState, cartState } = useContext(Context);

    return (
        <div className='cart-item'>
            <div className="cart-img">
                <img src={item.image} alt="" />
                {
                    !cartItem[item._id] ?
                        <div className="itemcount">
                            <img src={assets.add_icon_white} alt='' onClick={() => { setCartItem((prev) => ({ ...prev, [item._id]: 1 })); setCartState(cartState + 1) }} />
                        </div>
                        :
                        <div className="itemcount">
                            <img src={assets.remove_icon_red} alt='' onClick={() => { setCartItem((prev) => ({ ...prev, [item._id]: prev[item._id] - 1 })); setCartState(cartState - 1) }} />
                            <p>{cartItem[item._id]}</p>
                            <img src={assets.add_icon_green} alt='' onClick={() => { setCartItem((prev) => ({ ...prev, [item._id]: prev[item._id] + 1 })); setCartState(cartState + 1) }} />
                        </div>
                }
            </div>
            <div className="cart-content">
                <div className="cart-name-rating">
                    <p>{item.name}</p>
                    <img src={assets.rating_starts} alt="" />
                </div>
                <p className='desc'>{item.description}</p>
                <p className='price'>${item.price}</p>
            </div>
        </div>
    )
}

export default FoodCart