export default function Card(props) {
    const { name, image, text, price } = props

    return (
        <article class="item__card">
            <img src={image} alt={name} />
            <p class="item__title">{name}</p>
            <p class="item__text">{text}</p>
            <p class="item__price">R$ <span class="price__value">{price}</span></p>
            <ion-icon name="checkmark-circle" class="hidden"></ion-icon>
        </article>
    )
}