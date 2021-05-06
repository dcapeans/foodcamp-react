import Card from "./Card"

export default function DessertSection(props) {
    return (
        <section>
            <span className="section__title">Por fim, sua sobremesa</span>
            <div className="content__articles dessert">
                {props.items.map(item => <Card {...item}/>)}
            </div>
        </section>
    )
}