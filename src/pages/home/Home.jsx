import { useState } from 'react';
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';
import './Home.css'
import FoodItems from '../../components/foodItems/FoodItems';
import AppDownload from '../../components/appdownload/AppDownload';

const Home = () => {

    const [category, setCategory] = useState("All");

    return (
        <div>
            <Header />
            <Menu category={category} setCategory={setCategory} />
            <FoodItems category={category} />
            <AppDownload />
        </div>
    )
}

export default Home;