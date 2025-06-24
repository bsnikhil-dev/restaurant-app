import classes from "./MealsGrid.module.css";
import { MealItemType } from "./MealItem";
import MealItem from "./MealItem";

export default function MealsGrid({meals} :{meals:MealItemType[]}) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.title}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}