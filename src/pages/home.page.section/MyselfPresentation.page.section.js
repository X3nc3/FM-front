//modules
import { Button, Grid, Typography } from "@mui/material";
//assets
import imgDeco from "../../assets/home/img-decoratrice.jpg";
//styles
import style from "../../styles/home.page.section/MyselfPresentationPageSection.module.css";

const MyselfPresentationPageSection = () => {
  return (
    <Grid
      container
      justifyContent="center"
      xs={12}
      style={{ marginBottom: "50px" }}
    >
      <img className={style.imageContainer} src={imgDeco} alt="" />
      <Grid
        container
        direction="column"
        justifyContent="center"
        xs={5}
        style={{ marginLeft: "60px" }}
      >
        <Typography
          variant="h3"
          style={{ marginBottom: "30px", color: "#e9dccd" }}
        >
          Je suis Adeline
        </Typography>
        <Typography variant="h6">
          Enthousiaste, passionnée et créative, je serais à vos cotés à chaque
          étape de l'organisation pour construire jour après jour un évènement
          unique à votre image.
        </Typography>
        <Grid className={style.BoldLigne}></Grid>
        <Button className={style.button} variant="contained">
          En savoir plus
        </Button>
      </Grid>
    </Grid>
  );
};

export default MyselfPresentationPageSection;
