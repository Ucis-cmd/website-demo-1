import classes from "./CallToAction.module.css";

import Container from "./Container";
import Button from "./Button";

const CallToAction = () => {
  return (
    <Container
      className={classes.container}
      childClasses={classes.childContainer}
    >
      <h1>Enjoy an unforgettable experience</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <Button className={classes.button}>View Options ➔</Button>
    </Container>
  );
};

export default CallToAction;
