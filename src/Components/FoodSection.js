import Card from "./Card"

export default function FoodSection(props) {
    return (
        <section>
            <span className="section__title">Primeiro, seu prato</span>
            <div className="content__articles food">
                {props.items.map(item => <Card {...item}/>)}
            </div>
        </section>
    )
}