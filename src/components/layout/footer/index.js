import { Link } from "react-router-dom";
import logoWhiteImage from "../assets/logo-white.png";
import pages from "../../../utils/pages";

import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <img className={classes.logo} src={logoWhiteImage} alt="Little Lemon" />
        <nav className={classes.nav}>
          <h4>Sitemap</h4>
          <ul>
            {pages.map((navLink, index) => (
              <li key={index}>
                <Link to={navLink.path}>{navLink.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
