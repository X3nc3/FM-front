import { Grid, Link } from "@mui/material";
import React from "react";
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
        <Link className={style.text}>ACCUEIL</Link>
        <Link className={style.text}>A PROPOS</Link>
        <Link className={style.text}>NOS PRESTATION</Link>
        <Link className={style.text}>BLOG</Link>
        <Link className={style.text}>PORTFOLIO</Link>
        <Link className={style.text}>CONTACT</Link>
      </Grid>
    </nav>
  );
};

export default Nav;
