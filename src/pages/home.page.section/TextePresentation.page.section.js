//modules
import { Grid, Typography } from "@mui/material";
//assets
import imageback from "../../assets/home/image-home.jpg";
//styles
import style from "../../styles/home.page.section/TextPresentationPageSection.module.css";

const TextPresentationPageSection = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems={"center"}
    >
      <img className={style.background} src={imageback} alt="" />
      <Typography className={style.text}>
        Fée Marraine , une agence <br /> évènementielle créatrice d'émotions{" "}
        <br />
        et de moments uniques.
      </Typography>
      <Typography variant="body1" className={style.text1}>
        Spécialisés dans l'organisation et la décoration d'évènements privés et
        professionnels, nous <br /> organisons avec vous tous les beaux moment
        qui rythment une vie.
      </Typography>
      <Typography variant="body2" className={style.text2}>
        Cotè privé, nous intervenons sur les mariages, pacs, batemes,
        anniversaires, baby-showers ou encore demande en mariage. <br /> Coté
        professionnels, c'est plutot team building, inauguration, séminaires &
        co.
      </Typography>
    </Grid>
  );
};

export default TextPresentationPageSection;
