import Card from "./Card"

export default function DessertSection(props) {
    return (
        <section>
            <span class="section__title">Por fim, sua sobremesa</span>
            <div class="content__articles dessert">
                {props.items.map(item => <Card {...item}/>)}
            </div>
        </section>
    )
}