import classes from "./Hero.module.css";

import Container from "./Container";
import Button from "./Button";

const Hero = () => {
  return (
    <Container
      className={classes.container}
      childClasses={classes.childContainer}
    >
      <div className={classes.actionContainer}>
        <h1 className={classes.mainHeader}>Helicopter Rentals</h1>
        <p>
          From luxury to commercial helicopters, we have everything, for
          excellent prices!
        </p>
        <Button href="#" className={classes.bigButton}>
          View Options ➔
        </Button>
      </div>
      <img src="helicopter.jpg" className={classes.image} />
    </Container>
  );
};

export default Hero;
