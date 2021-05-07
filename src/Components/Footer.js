import React from "react"

export default function Footer({allSelected}) {
    const {foodSelected, drinkSelected, dessertSelected} = allSelected

    const enabled = (foodSelected && drinkSelected && dessertSelected)

    return (
        <footer>
            <button className={`order__button ${enabled ? 'active' : 'disabled'}`} disabled={!enabled}>
                Selecione os 3 itens para fechar o pedido
            </button>
        </footer>
    )
}