import Card from "./Card"

export default function DrinkSection() {
    return (
        <section>
                <span class="section__title">Agora, sua bebida</span>
                <div class="content__articles drink">
                    <Card type="drink" />
                </div>
            </section>
    )
}