import classes from "./TeamMember.module.css";

const TeamMember = (props) => {
  return (
    <div className={classes.container}>
      <img className={classes.image} src={props.src} alt="Ceo" />
      <div className={classes.textContainer}>
        <h2 className={classes.name}>{props.name}</h2>
        <h3 className={classes.workPosition}>{props.workPosition}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default TeamMember;
