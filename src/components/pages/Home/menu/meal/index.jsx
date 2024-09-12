import classes from "./meal.module.css";

export default function Meal({ data }) {
  return (
    <article className={classes.container}>
      <div>
        <img src={data.image} alt={data.name} className={classes.img} />
      </div>
      <div className={classes.info1}>
        <h3>{data.name}</h3>
        <span>{data.price}</span>
      </div>
      <div className={classes.info2}>
        <p>{data.description}</p>
      </div>
    </article>
  );
}
