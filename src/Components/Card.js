import React from "react"
import Counter from "./Counter"

export default function Card(props) {
    const { name, image, text, price } = props
    const [isChecked, setIsChecked] = React.useState("")

    function ClickHandler() {
        if(isChecked === ""){
            setIsChecked("checked")
        } else {
            setIsChecked("")
        }
    }

    return (
        <article onClick={ClickHandler} className={`item__card ${isChecked}`}>
            <img src={image} alt={name} />
            <p className="item__title">{name}</p>
            <p className="item__text">{text}</p>
            <p className="item__price">R$ <span className="price__value">{price}</span></p>
            <Counter setIsChecked={setIsChecked}/>
        </article>
    )
}