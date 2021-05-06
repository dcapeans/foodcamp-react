import React from "react"

export default function Counter(props) {
    const { setIsChecked} = props
    const [value, setValue] = React.useState(1)

    function increase(){
        setValue(value + 1)
    }

    function decrease(){
        if(value > 1){
            setValue(value - 1)
        } else if (value === 1) {
            setIsChecked("")
        }
    }

    return (
        <div className="counter">
            <button className="minus__button" onClick={decrease}>-</button>
            <div className="value">{value}</div>
            <button className="plus__button" onClick={increase}>+</button>
        </div>
    )
}