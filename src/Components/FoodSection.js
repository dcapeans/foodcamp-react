import Card from "./Card"

export default function FoodSection() {
    return (
        <section>
                <span class="section__title">Primeiro, seu prato</span>
                <div class="content__articles food">
                    <Card type="food"/>
                </div>
        </section>
    )
}