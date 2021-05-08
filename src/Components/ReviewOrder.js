import {Link} from "react-router-dom";

export default function ReviewOrder({orderedItems, closeOrder, totalPrice, resetOrderedItems}) {
    return (
        <div className="confirmation__window">
            <h1 className="review__title">Revise seu pedido</h1>
            <div className="confirmation__box">
                {Object.entries(orderedItems).map((item, i)=> (
                    <div key={i}>
                        <p className="confirmation__food">{item[1].name} {item[1].quantity > 1 ? `(${item[1].quantity}x)` : ""}</p>
                        <p className="confirmation__price"> R$ {item[1].price}</p>
                    </div>
                ))}
                <div className="total__price">
                    <p>TOTAL</p>
                    <p className="confirmation__total"> R$ {totalPrice}</p>
                </div>
                
            </div>
            <button onClick={closeOrder} className="confirm__button">Tudo certo, pode pedir!</button>
            <Link to="/">
                    <button onClick={resetOrderedItems} className="cancel__button">Cancelar</button>
            </Link>
        </div>
    )
}