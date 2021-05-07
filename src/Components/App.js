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
    const [orderedItems, setOrderedItems] = React.useState({})
    console.log(orderedItems)

    const setFoodSelected = (value) => {
        setAllSelected({...allSelected, foodSelected: value})
    }
    const setDrinkSelected = (value) => {
        setAllSelected({...allSelected, drinkSelected: value})
    }
    const setDessertSelected = (value) => {
        setAllSelected({...allSelected, dessertSelected: value})
    }
    const setOrder = (item) => {
        setOrderedItems({...orderedItems, [item.name]: item})
    }
    const closeOrder = () => {
        let totalPrice = 0
        let message = "Olá, gostaria de fazer o pedido:\n"
        Object.entries(orderedItems).forEach((item) => {
            message += `- ${item[1].name} ${item[1].quantity > 1 ? `(${item[1].quantity}x)` : ""}\n`
            totalPrice += changeComaToDot(item[1].price) * parseInt(item[1].quantity)
        })
        message += `Total: R$ ${totalPrice}`
        const uriMessage = encodeURIComponent(message);
        const link = "https://wa.me/5521999999999?text=" + uriMessage;
        window.open(link);
    }

    const changeComaToDot = (value) => {
        value = value.replace(/,/g, '.')
        const parsedValue = parseFloat(value)
        return parsedValue
    }

    const removeSelectedItems = (item) => {
        delete orderedItems[item.name]
    }

    return (
        <>
        <Header />
        <section className="content">
            <FoodSection items={foodData} type="food" setFoodSelected={setFoodSelected} setOrder={setOrder} removeSelectedItems={removeSelectedItems} />
            <DrinkSection items={drinkData} type="drink" setDrinkSelected={setDrinkSelected} setOrder={setOrder} removeSelectedItems={removeSelectedItems} />
            <DessertSection items={dessertData} type="dessert" setDessertSelected={setDessertSelected} setOrder={setOrder} removeSelectedItems={removeSelectedItems} />
        </section>
        <Footer allSelected={allSelected} closeOrder={closeOrder}/>
        </>
    )
}


