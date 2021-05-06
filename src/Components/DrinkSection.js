import Card from "./Card"

export default function DrinkSection(props) {
    return (
        <section>
            <span className="section__title">Agora, sua bebida</span>
            <div className="content__articles drink">
                    {props.items.map(item => <Card {...item}/>)}
            </div>
        </section>
    )
}