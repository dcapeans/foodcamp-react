import Card from "./Card"

export default function FoodSection(props) {
    return (
        <section>
            <span class="section__title">Primeiro, seu prato</span>
            <div class="content__articles food">
                {props.items.map(item => <Card {...item}/>)}
            </div>
        </section>
    )
}