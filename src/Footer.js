import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>&copy; 2023 Blue Ink. All Rights Reserved.</p>
      <a href="privacy-policy.html">Privacy Policy</a> |
      <a href="terms-of-service.html">Terms of Service</a>
    </footer>
  );
};

export default Footer;
