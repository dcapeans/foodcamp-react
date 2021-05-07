import Card from "./Card"
import React from "react"

export default function DrinkSection({items, setDrinkSelected, setOrder, removeSelectedItems}) {
    const [selecteds, setSelecteds] = React.useState({})

    const addSelected = (id, item) => {
        if(!selecteds[id]){
            const foodItem = {...item, id:id, quantity: 1}
            setSelecteds({...selecteds, [id]: foodItem})
            setDrinkSelected(true)
            setOrder(foodItem)
        }
    }

    const removeSelected = (id, item) => {
        const newState = {...selecteds, [id]: undefined}
        setSelecteds(newState)
        setDrinkSelected(checkHasSelected(newState))
        removeSelectedItems(item)
    }

    const checkHasSelected = (state) => {
        let hasSelected = false;
        Object.keys(state).forEach((key) => {
            if(state[key]){
                hasSelected = true
            }
        })
        return hasSelected
    }

    const increaseCounter = (id, item) => {
        setSelecteds({...selecteds, [id]:{id:id, quantity: selecteds[id].quantity + 1}})
        setOrder({...item, id:id, quantity: selecteds[id].quantity + 1})
    }

    const decreaseCounter = (id, item) => {
        if(selecteds[id].quantity > 1){
            setSelecteds({...selecteds, [id]:{id:id, quantity: selecteds[id].quantity - 1}})
            setOrder({...item, id:id, quantity: selecteds[id].quantity - 1})
        } else {
            removeSelected(id, item)
        }
    }

    return (
        <section>
            <span className="section__title">Agora, sua bebida</span>
            <div className="content__articles drink">
                {items.map((item, i) => (
                    <Card 
                        key={i} 
                        {...item} 
                        isChecked={selecteds[i]} 
                        addSelected={() => addSelected(i, item)}
                        id={i} 
                        increaseCounter={() => increaseCounter(i, item)}
                        decreaseCounter={() => decreaseCounter(i, item)}
                        quantity={selecteds[i] ? selecteds[i].quantity : 0} 
                    />
                ))}
            </div>
        </section>
    )
}