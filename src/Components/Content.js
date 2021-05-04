import DessertSection from "./DessertSection";
import DrinkSection from "./DrinkSection";
import FoodSection from "./FoodSection";

export default function Content() {
    return (
        <section class="content">
            <FoodSection />
            <DrinkSection />
            <DessertSection />
        </section>
    )
}