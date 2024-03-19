//modules
import { Grid, Link } from "@mui/material";
//styles
import style from "../styles/Nav.module.css";

const Nav = () => {
  return (
    <nav>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ height: "80px" }}
      >
        <Link className={style.text}>A C C U E I L</Link>
        <Link className={style.text}>A P R O P O S</Link>
        <Link className={style.text}>N O S P R E S T A T I O N</Link>
        <Link className={style.text}>B L O G</Link>
        <Link className={style.text}>P O R T F O L I O</Link>
        <Link className={style.text}>C O N T A C T</Link>
      </Grid>
    </nav>
  );
};

export default Nav;
