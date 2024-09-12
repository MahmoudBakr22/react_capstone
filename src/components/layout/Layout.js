import Header from "./header";
import Footer from "./footer";

import classes from "./layout.module.css";
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className={classes.container}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
