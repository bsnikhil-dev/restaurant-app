import Image from "next/image";
import classes from "./page.module.css";
import { getMealBySlug } from "@/utils/lib";
import { notFound } from "next/navigation";

interface PageProps {
    params: {
        meal: string;
    };
}

export async function generateMetadata({params}:PageProps){
    const meal = getMealBySlug(params.meal);
    if (!meal) {
        return {
            title: "No Such Meal",
            description: "The requested meal could not be found.",
        };
    }
    return {
        title: meal.title,
        description: meal.summary,
    };
}
export default function MealDetailsPage({ params }: PageProps) {

    const meal = getMealBySlug(params.meal);

    if (!meal) {
       notFound();
    }

    meal.instructions = (meal.instructions as string).replace(/\n/g, '<br />');

    return (
        <>
            <header className={classes.header}>
                <div className={classes.image}>
                    <Image src={meal.image} alt={meal.title} fill />
                </div>
                <div className={classes.headerText}>
                    <h1>{meal.title}</h1>
                    <p className={classes.creator}>
                        by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
                    </p>
                    <p className={classes.summary}>{meal.summary}</p>
                </div>
            </header>
            <main>
                <p
                    className={classes.instructions}
                    dangerouslySetInnerHTML={{
                        __html: meal.instructions,
                    }}
                ></p>
            </main>
        </>
    );
}