import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import './FoodItems.css'
import FoodCart from '../foodCart/FoodCart';

const FoodItems = ({ category }) => {

  const { food_list } = useContext(Context);

  return (
    <div className='fooditems-container'>
      <h1>Top Dishes Near You</h1>
      <div className="fooditems">
        {food_list.map((item, i) => {
          return category === "All" || category === item.category ? <FoodCart key={i} item={item} /> : ""
        })}
      </div>
    </div>
  )
}

export default FoodItems