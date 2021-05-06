import Card from "./Card"

export default function DrinkSection(props) {
    return (
        <section>
            <span class="section__title">Agora, sua bebida</span>
            <div class="content__articles drink">
                    {props.items.map(item => <Card {...item}/>)}
            </div>
        </section>
    )
}