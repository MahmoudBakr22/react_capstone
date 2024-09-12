import bruschettaImage from "../assets/bruschetta.jpg";
import greekSaladImage from "../assets/greek-salad.jpg";
import lemonDessertImage from "../assets/lemon-dessert.jpg";
import Meal from "./meal";

import classes from "./menu.module.css";

const meals = [
  {
    name: "Greek Salad",
    image: greekSaladImage,
    price: "$12.99",
    description: `The famous greek salad of crispy lettuce, peppers, olives and 
      our Chicago style feta cheese, garnished with crunchy garlic and rosemary 
      croutons.`,
  },
  {
    name: "Bruschetta",
    image: bruschettaImage,
    price: "$5.99",
    description: `Our Bruschetta is made from grilled bread that has been 
      smeared with garlic and seasoned with salt and olive oil.`,
  },
  {
    name: "Lemon Dessert",
    image: lemonDessertImage,
    price: "$5.00",
    description: `This comes straight from grandma's recipe book, every last 
      ingredient has been sourced and is as authentic as can be imagined.`,
  },
];

export default function Menu() {
  return (
    <section className={classes.container}>
      <div>
        <h2>Our Menu</h2>
      </div>
      <div className={classes.mealContainer}>
        {meals.map((meal, index) => (
          <Meal key={index} data={meal} />
        ))}
      </div>
    </section>
  );
}
