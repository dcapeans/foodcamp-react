export default function Confirmation() {
    return (
        <div class="confirmation__window hidden">
            <div class="confirmation__box">
                <p>Confirme seu pedido</p>
                <div>
                    <p class="confirmation__food">Frango Yin Yang</p>
                    <p class="confirmation__food-price">14,00</p>
                </div>
                <div>
                    <p class="confirmation__drink">Coquinha Gelada</p>
                    <p class="confirmation__drink-price">7,00</p>
                </div>
                <div>
                    <p class="confirmation__dessert">Pudim</p>
                    <p class="confirmation__dessert-price">9,00</p>
                </div>
                <div class="total__price">
                    <p>TOTAL</p>
                    <p class="confirmation__total">9,00</p>
                </div>
                <span class="client__name">NOME: </span>
                <span class="client__address">ENDEREÇO: </span>
                <form onsubmit="SendMessage()">
                    <button type="submit" class="confirm__button">Tudo certo, pode pedir!</button>
                </form>
                <form onsubmit="CancelConfirmation()">
                    <button type="submit" class="cancel__button">Cancelar</button>
                </form>
            </div>
        </div>
    )
}