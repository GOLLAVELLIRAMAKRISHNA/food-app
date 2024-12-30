import './Menu.css'
import { menu_list } from '../../assets/assets'

const Menu = ({ category, setCategory }) => {
    return (
        <div className='menu-container' id='explore'>
            <h1>Explore Our Menu</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque dicta modi laboriosam dignissimos esse saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="menu-list">
                {menu_list.map((item, key) => {
                    return (
                        <div onClick={() => { setCategory(category === item.menu_name ? "All" : item.menu_name) }} className='menu-list-item' key={key}>
                            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
    )
}

export default Menu