import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import data from "../data"
import DessertSection from "./DessertSection";
import DrinkSection from "./DrinkSection";
import FoodSection from "./FoodSection";

const {foodData, drinkData, dessertData} = data

export default function App() {
    const [allSelected, setAllSelected] = React.useState({foodSelected: false, drinkSelected: false, dessertSelected: false})
    
    const setFoodSelected = (value) => {
        setAllSelected({...allSelected, foodSelected: value})
        console.log(value)
    }
    const setDrinkSelected = (value) => {
        setAllSelected({...allSelected, drinkSelected: value})
        console.log(value)
    }
    const setDessertSelected = (value) => {
        setAllSelected({...allSelected, dessertSelected: value})
        console.log(value)
    }

    return (
        <>
        <Header />
        <section className="content">
            <FoodSection items={foodData} type="food" setFoodSelected={setFoodSelected} />
            <DrinkSection items={drinkData} type="drink" setDrinkSelected={setDrinkSelected} />
            <DessertSection items={dessertData} type="dessert" setDessertSelected={setDessertSelected} />
        </section>
        <Footer allSelected={allSelected}/>
        </>
    )
}


