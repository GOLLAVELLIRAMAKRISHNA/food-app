import { createContext, useState } from "react"
import { food_list } from "../assets/assets";

export const Context = createContext(null);

const ContextProvider = (props) => {

    const [cartItem, setCartItem] = useState({});
    const [cartState, setCartState] = useState(0);

    const ContextValue = {
        food_list,
        cartItem,
        setCartItem,
        cartState,
        setCartState
    }

    return (
        <Context.Provider value={ContextValue}>
            {props.children}
        </Context.Provider>
    )
}

export default ContextProvider