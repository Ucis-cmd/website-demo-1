import classes from "./Container.module.css";

const Container = (props) => {
  return (
    <div className={`${classes.container} ${props.className}`}>
      <div className={`${classes.content} ${props.childClasses}`}>
        {props.children}
      </div>
    </div>
  );
};

export default Container;
