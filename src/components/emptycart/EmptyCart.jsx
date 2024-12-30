import { assets } from '../../assets/assets'
import './EmptyCart.css'

const EmptyCart = () => {
    return (
        <div className='emptycart'>
            <div className="emp-cart-img">
                <img src={assets.empty_cart} alt="" />
            </div>
            <h2>Your Cart Is Empty</h2>
        </div>
    )
}

export default EmptyCart