import './CartItems.css'
import { Fragment, useContext } from 'react';
import { Context } from '../../context/Context';
import { assets } from '../../assets/assets';

const CartItems = () => {

    const { food_list, cartItem, setCartItem, setCartState, cartState } = useContext(Context);

    return (
        <div className="cart-items">
            <div className="cart-items-titles">
                <p>Item</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <br />
            <hr />
            {food_list.map((item, i) => {
                if (cartItem[item._id] > 0) {
                    console.log(cartItem[item._id]===0)
                    return (
                        <Fragment key={i}>
                            <div className='cart-items-titles cart-items-item'>
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>{item.price}</p>
                                <div className='count-item'>
                                    <img onClick={() => { setCartItem((prev) => ({ ...prev, [item._id]: prev[item._id] - 1 })); setCartState(cartState - 1) }} src={assets.remove_icon_red} alt="" />
                                    <p>{cartItem[item._id]}</p>
                                    <img onClick={() => { setCartItem((prev) => ({ ...prev, [item._id]: prev[item._id] + 1 })); setCartState(cartState + 1) }} src={assets.add_icon_green} alt="" />
                                </div>
                                <p>{item.price * cartItem[item._id]}</p>
                                <p onClick={()=>setCartItem((prev) => ({ ...prev, [item._id]: 0 }))} className='cross'>X</p>
                            </div>
                            <hr />
                        </Fragment>
                    )
                }
                return (null)
            })}
        </div>
    )
}

export default CartItems