import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

import classes from "./confirmed.module.css";

export default function Confirmed() {
  return (
    <div className={classes.container}>
      <FontAwesomeIcon icon={faCircleCheck} size="3x" />
      <h2>Your reservation has been confirmed.</h2>
    </div>
  );
}
