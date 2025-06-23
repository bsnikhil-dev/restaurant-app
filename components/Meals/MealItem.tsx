import classes from "./MealItem.module.css";
import Image from "next/image";
import Link from "next/link";

export interface MealItemType{
    title:string;
    meal:string;
    image:string;
    summary:string;
    creator:string;
}

export default function MealItem({ title, meal, image, summary, creator }:MealItemType) {
  return (
    <article className={classes.meal}>
      <header>
        <div className={classes.image}>
          <Image src={image} alt={title} fill />
        </div>
        <div className={classes.headerText}>
          <h2>{title}</h2>
          <p>by {creator}</p>
        </div>
      </header>
      <div className={classes.content}>
        <p className={classes.summary}>{summary}</p>
        <div className={classes.actions}>
          <Link href={`/meals/${meal}`}>View Details</Link>
        </div>
      </div>
    </article>
  );
}