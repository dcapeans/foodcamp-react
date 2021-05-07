import React from "react"

export default function Counter({increase, decrease, value}) {
    
    return (
        <div className="counter">
            <button className="minus__button" onClick={decrease}>-</button>
            <div className="value">{value}</div>
            <button className="plus__button" onClick={increase}>+</button>
        </div>
    )
}