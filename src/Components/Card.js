import React from "react"
import Counter from "./Counter"

export default function Card(props) {
    const { name, image, text, price, id, addSelected, isChecked, increaseCounter, decreaseCounter, quantity} = props

    const clickHandler = () => {
        addSelected(id)
    }

    return (
        <article onClick={clickHandler} className={`item__card ${isChecked ? "checked" : ""}`}>
            <img src={image} alt={name} />
            <p className="item__title">{name}</p>
            <p className="item__text">{text}</p>
            <p className="item__price">R$ <span className="price__value">{price}</span></p>
            <Counter increase={() => increaseCounter(id)} decrease={() => decreaseCounter(id)} value={quantity}/>
        </article>
    )
}