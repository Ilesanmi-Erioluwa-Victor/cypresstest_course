import classes from "./CourseGoal.module.css";

function CourseGoal(props) {
    console.log(props)
  return (
    <li className={classes.goal}>
      <span className={classes.icon}>{props.icon}</span>
      <span>{props.text}</span>
    </li>
  );
}

export default CourseGoal;
