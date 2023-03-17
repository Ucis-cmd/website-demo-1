import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <a href={props.href} className={`${classes.button} ${props.className}`}>
      {props.children}
    </a>
  );
};

export default Button;
