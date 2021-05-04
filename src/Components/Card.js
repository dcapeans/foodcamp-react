const data = [
    [
        {
            name: "Frango Yin Yang",
            image: "/assets/img/frango_yin_yang 1.png",
            text: "Um pouco de batata, um pouco de salada",
            price: "15,00"
        },
        {
            name: "Carne Yin Yang",
            image: "/assets/img/frango_yin_yang 1.png",
            text: "Um pouco de batata, um pouco de salada",
            price: "18,00"
        },
        {
            name: "Peixe Yin Yang",
            image: "/assets/img/frango_yin_yang 1.png",
            text: "Um pouco de batata, um pouco de salada",
            price: "17,00"
        },
        {
            name: "Porco Yin Yang",
            image: "/assets/img/frango_yin_yang 1.png",
            text: "Um pouco de batata, um pouco de salada",
            price: "20,00"
        },
    ],
    [
        {
            name: "Coquinha gelada",
            image: "/assets/img/coquinha_gelada 1.png",
            text: "Lata 350ml",
            price: "5,00"
        },
        {
            name: "Guaraná gelado",
            image: "/assets/img/guarana.png",
            text: "Lata 350ml",
            price: "6,00"
        },
        {
            name: "Pepsi gelada",
            image: "/assets/img/pepsi.png",
            text: "Lata 350ml",
            price: "4,00"
        },
        {
            name: "Fanta gelada",
            image: "/assets/img/fanta.png",
            text: "Lata 350ml",
            price: "7,00"
        },
    ],
    [
        {
            name: "Pudim",
            image: "/assets/img/pudim 1.png",
            text: "Apenas pudim",
            price: "8,00"
        },
        {
            name: "Torta",
            image: "/assets/img/torta.png",
            text: "Apenas torta",
            price: "10,00"
        },
        {
            name: "Mousse",
            image: "/assets/img/mousse.png",
            text: "Apenas mousse",
            price: "11,00"
        },
        {
            name: "Quindim",
            image: "/assets/img/quindim.png",
            text: "Apenas quindim",
            price: "9,00"
        },
    ],
]

export default function Card(props) {
    const [foodData, drinkData, dessertData] = data
    
    if(props.type === "food"){
        return (
            <>
            {foodData.map(food => {
                return (
                <article class="item__card">
                    <img src={food.image} alt={food.name} />
                    <p class="item__title">{food.name}</p>
                    <p class="item__text">{food.text}</p>
                    <p class="item__price">R$ <span class="price__value">{food.price}</span></p>
                    <ion-icon name="checkmark-circle" class="hidden"></ion-icon>
                </article>
                )
            })}
            </>
        )
        
    } else if(props.type === "drink"){
        return (
            <>
            {drinkData.map(food => {
                return (
                <article class="item__card">
                    <img src={food.image} alt={food.name} />
                    <p class="item__title">{food.name}</p>
                    <p class="item__text">{food.text}</p>
                    <p class="item__price">R$ <span class="price__value">{food.price}</span></p>
                    <ion-icon name="checkmark-circle" class="hidden"></ion-icon>
                </article>
                )
            })}
            </>
        )
    }  else if(props.type === "dessert"){
        return (
            <>
            {dessertData.map(food => {
                return (
                <article class="item__card">
                    <img src={food.image} alt={food.name} />
                    <p class="item__title">{food.name}</p>
                    <p class="item__text">{food.text}</p>
                    <p class="item__price">R$ <span class="price__value">{food.price}</span></p>
                    <ion-icon name="checkmark-circle" class="hidden"></ion-icon>
                </article>
                )
            })}
            </>
        )
    }
}