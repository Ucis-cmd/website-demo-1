import { useState } from "react";

import classes from "./Navbar.module.css";

import Button from "./Button";

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleHandler = () => {
    setIsActive((prevState) => !prevState);
  };
  return (
    <nav className={classes.navbar}>
      <a href="#" className={classes.logo}>
        BLUE INK
      </a>
      <a className={classes.toggleButton} onClick={toggleHandler}>
        ☰
      </a>
      <div
        className={
          isActive
            ? `${classes.navLinks} ${classes.active}`
            : `${classes.navLinks}`
        }
      >
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Product</a>
          </li>
          <li>
            <Button>Sign up</Button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
