import Card from "./Card"
import React from "react"

export default function DessertSection({items, setDessertSelected}) {
    const [selecteds, setSelecteds] = React.useState({})

    const addSelected = (id) => {
        if(!selecteds[id]){
            setSelecteds({...selecteds, [id]:{id:id, quantity: 1}})
            setDessertSelected(true)
        }
    }

    const removeSelected = (id) => {
        const newState = {...selecteds, [id]: undefined}
        setSelecteds(newState)
        setDessertSelected(checkHasSelected(newState))
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

    const increaseCounter = (id) => {
        setSelecteds({...selecteds, [id]:{id:id, quantity: selecteds[id].quantity + 1}})
    }

    const decreaseCounter = (id) => {
        if(selecteds[id].quantity > 1){
            setSelecteds({...selecteds, [id]:{id:id, quantity: selecteds[id].quantity - 1}})
        } else {
            removeSelected(id)
        }
    }


    return (
        <section>
            <span className="section__title">Por fim, sua sobremesa</span>
            <div className="content__articles dessert">
                {items.map((item, i) => (
                    <Card 
                        key={i} 
                        {...item} 
                        isChecked={selecteds[i]} 
                        addSelected={addSelected} 
                        removeSelected={removeSelected}
                        id={i} 
                        increaseCounter={increaseCounter}
                        decreaseCounter={decreaseCounter}
                        quantity={selecteds[i] ? selecteds[i].quantity : 0} 
                    />
                ))}
            </div>
        </section>
    )
}