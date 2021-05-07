import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function Footer({allSelected, calculateTotal}) {
    const {foodSelected, drinkSelected, dessertSelected} = allSelected
    const enabled = (foodSelected && drinkSelected && dessertSelected)
    
    return (
        <footer>
            <Link to="/review" className={`order__button ${enabled ? 'active' : 'disabled'}`} disabled={!enabled} onClick={calculateTotal}>
                {enabled ? "Fechar Pedido" : "Selecione os 3 itens para fechar o pedido"}
            </Link>
        </footer>
    )
}