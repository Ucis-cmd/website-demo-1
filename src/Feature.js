import classes from "./Feature.module.css";

import Container from "./Container";

const Feature = () => {
  return (
    <Container
      className={classes.container}
      childClasses={classes.childContainer}
    >
      <img
        src="interior.jpg"
        alt="interior of helicopter"
        className={classes.image}
      />
      <div className={classes.actionContainer}>
        <h1 className={classes.mainHeader}>Party on helicopter?</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <ul className={classes.list}>
          <li>Benefit of Feature</li>
          <li>Benefit of Feature</li>
          <li>Benefit of Feature</li>
        </ul>
      </div>
    </Container>
  );
};

export default Feature;
