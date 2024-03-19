import { Grid, Typography } from "@mui/material";
import React from "react";
import imgSAlle from "../../assets/home/image-salle.jpg";
import imgCouple from "../../assets/home/image-couple.jpg";
import style from "../../styles/home.page.section/WorkAndContactPageSection.module.css";

const WorkAndContactPageSEction = () => {
  return (
    <Grid
      container
      justifyContent="center"
      gap={20}
      style={{ backgroundColor: "#e9dccd" }}
    >
      <Grid container direction="column" xs={5} className={style.imgContainer}>
        <img className={style.img} src={imgSAlle} alt="" />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className={style.textContainer}
        >
          <Typography variant="h5" style={{ color: "#927e6c" }}>
            Découvrez notre travail
          </Typography>
        </Grid>
      </Grid>
      <Grid container direction="column" xs={5} className={style.imgContainer}>
        <img className={style.img} src={imgCouple} alt="" />
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          className={style.textContainer}
        >
          <Typography variant="h5" style={{ color: "#927e6c" }}>
            Racontez-nous votre histoire
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default WorkAndContactPageSEction;
