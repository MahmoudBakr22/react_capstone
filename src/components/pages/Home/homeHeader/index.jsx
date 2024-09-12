import React from "react";

import restaurantFoodImage from "../assets/chefs-mario-and-adrian_a.jpg";

import classes from "./homeHeader.module.css";

export default function HomeHeader() {
  return (
    <section className={classes.container}>
      <div className={classes.innerContainer}>
        <div className={classes.heroInfo}>
          <h1>Little Lemon</h1>
        </div>
        <img className={classes.img} src={restaurantFoodImage} alt="Restaurant" />
      </div>
    </section>
  );
}
