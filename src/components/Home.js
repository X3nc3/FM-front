import { Grid, Typography } from "@mui/material";
import React from "react";
import imageback from "../assets/image-home.jpg";
import style from "../styles/Home.module.css";

const Home = () => {
  return (
    <Grid container direction="column">
      <Grid container justifyContent="center" alignItems={"center"}>
        <img className={style.background} src={imageback} alt="" />
        <Typography className={style.text}>
          Fée Marraine , une agence <br /> évènementielle créatrice d'émotions{" "}
          <br />
          et de moments uniques.
        </Typography>
        <Typography variant="body1" className={style.text1}>
          Spécialisés dans l'organisation et la décoration d'évènements privés
          et professionnels, nous <br /> organisons avec vous tous les beaux
          moment qui rythment une vie.
        </Typography>
        <Typography variant="body2" className={style.text2}>
          Cotè privé, nous intervenons sur les mariages, pacs, batemes,
          anniversaires, baby-showers ou encore demande en mariage. <br /> Coté
          professionnels, c'est plutot team building, inauguration, séminaires &
          co.
        </Typography>
      </Grid>
      <Grid container direction="column" alignItems="center">
        <Typography variant="h5">
          Des évènement authentiques, modernes et colorés !
        </Typography>
        <Grid container justifyContent="center"></Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
