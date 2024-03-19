//modules
import { Grid, Typography } from "@mui/material";
//assets
import imgWedding from "../../assets/home/image-mariage.jpg";
import imgEvents from "../../assets/home/image-event.jpg";
import imgCorpo from "../../assets/home/image-corpo.jpg";
//styles
import style from "../../styles/home.page.section/EventsPageSection.module.css";

const EventsPageSection = () => {
  return (
    <Grid
      container
      direction="column"
      alignItems="center"
      className={style.container}
    >
      <Typography style={{ marginBottom: "10px" }} variant="h4">
        Des évènement authentiques, modernes et colorés !
      </Typography>
      <Grid container justifyContent="center">
        <Grid className={style.photoContainer}>
          <Typography variant="h4" className={style.title}>
            WEEDINGS
          </Typography>
          <img className={style.photo} src={imgWedding} alt="" />
        </Grid>
        <Grid className={style.photoContainer}>
          <Typography variant="h4" className={style.titleEvents}>
            EVENTS
          </Typography>
          <img className={style.photo} src={imgEvents} alt="" />
        </Grid>
        <Grid className={style.photoContainer}>
          <Typography variant="h4" className={style.title}>
            CORPORATE
          </Typography>
          <img className={style.photo} src={imgCorpo} alt="" />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default EventsPageSection;
