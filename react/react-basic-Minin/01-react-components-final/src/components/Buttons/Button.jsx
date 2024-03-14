import classes from "./Button.module.css";

export default function Button({ children, isActive, ...props }) {
  //return( <button className={isActive ? "button active" : "button" } onClick={onClick}>
  return (
    <button
    {...props}
      className={
        isActive ? `${classes.button} ${classes.active} ` : classes.button
      }
      
    >
      {children}
    </button>
  );
}
