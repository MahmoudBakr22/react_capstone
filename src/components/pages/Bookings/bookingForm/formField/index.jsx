import classes from "./formField.module.css";

export default function FormField({ children, label, htmlFor, hasError, errorMessage }) {
  return (
    <div className={classes.container}>
      <label htmlFor={htmlFor}>{label}</label>
      {children}
      {hasError && errorMessage ? <p data-testid="error-message">{errorMessage}</p> : null}
    </div>
  );
}
