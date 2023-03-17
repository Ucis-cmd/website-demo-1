import classes from "./Team.module.css";

import Container from "./Container";
import TeamMember from "./TeamMember";

const Team = () => {
  return (
    <Container
      className={classes.container}
      childClasses={classes.childContainer}
    >
      <h1 className={classes.title}>Meet the Team</h1>
      <div className={classes.memberContainer}>
        <TeamMember
          name="Quinn Johnson"
          workPosition="CEO"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
          src="portrait1.jpg"
        />
        <TeamMember
          name="Mary Johnson"
          workPosition="Technical Director"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
          src="portrait2.jpg"
        />
        <TeamMember
          name="Mason Jarr"
          workPosition="Engineer"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
          src="portrait3.jpg"
        />
      </div>
    </Container>
  );
};

export default Team;
